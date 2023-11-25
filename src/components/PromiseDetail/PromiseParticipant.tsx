import { View, Text } from "react-native"
import { styled } from "styled-components"
import { Button } from "../atoms/Button"
import Avatar from "../atoms/Avatar"
import { useSetRecoilState } from "recoil"
import { promiseDetailState } from "@/libs/store/promiseDetail"

type VariantType = 'default' | 'button'

const PromiseParticipant = ({ participantCount, variant = 'default' }: { participantCount: number, variant: VariantType }) => {
    const setModal = useSetRecoilState(promiseDetailState)

    return (
        <StyledView>
            <StyledTitle>참여자</StyledTitle>
            <Flex>
                <ProfileWrapper>
                    <Avatar variant={'default'} name={'홍길동'} />
                </ProfileWrapper>
                <Button variant='small' onClick={() => setModal((prevData) => ({...prevData, isOpen: true}))}>초대코드 공유하기</Button>
            </Flex>
            {variant === 'default' && <StyledDescription>홍길동 님 외 {participantCount}명</StyledDescription>}
        </StyledView>
    )
}

export default PromiseParticipant

const StyledView = styled(View)`
    height: fit-content;
    margin-bottom: 30px;
`

const StyledTitle = styled(Text)`
  margin-bottom: 8px;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
`

const ProfileWrapper = styled(View)`
    width: 120px;
    height: fit-content;
`

const Flex = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4px;
`
const StyledDescription = styled(Text)`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.2px;
`