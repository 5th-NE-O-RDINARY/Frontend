import PromiseAuthentication from "@/components/PromiseDetail/PromiseAuthentication"
import PromiseHeader from "@/components/PromiseDetail/PromiseHeader"
import PromiseLocation from "@/components/PromiseDetail/PromiseLocation"
import PromiseParticipant from "@/components/PromiseDetail/PromiseParticipant"
import PromisePay from "@/components/PromiseDetail/PromisePay"
import PromiseSchedule from "@/components/PromiseDetail/PromiseSchedule"
import AlertModal from "@/components/atoms/AlertModal"
import { promiseDetailState } from "@/libs/store/promiseDetail"
import { ScrollView } from "react-native"
import { useRecoilValue } from "recoil"
import styled from "styled-components"

const PromiseDetail = () => {
  const promiseDetailStateData = useRecoilValue(promiseDetailState)

  return (
    <PromiseDetailWrapper>
      <PromiseHeader promiseTitle={'약속방 제목'} />
        <PromiseParticipant participantCount={4} variant='default'/>
        <PromiseSchedule promiseDate={'2023-11-25'} promiseTime="NN:NN"/>
        <PromiseLocation promiseLocationName={'약속 장소 이름'} promiseLocationAddress={'약속 장소 주소'} />
        <PromiseAuthentication isLocation={true} />
        <PromisePay commonPay={false} />
        {promiseDetailStateData.isOpen && <AlertModal />}
    </PromiseDetailWrapper>
  )
}

export default PromiseDetail

const PromiseDetailWrapper = styled(ScrollView)`
    padding: 0 32px;
`