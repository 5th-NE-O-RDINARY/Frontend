import { View, Text } from "react-native"
import { styled } from "styled-components"

const PromiseHeader = ({promiseTitle}: {promiseTitle: string}) => {
    return (
        <View>
          <StyledTitle>제목</StyledTitle>
          <StyledPromiseTitle>{promiseTitle}</StyledPromiseTitle>
          <StyledDescription>지각자 체크 버튼은 1시간 전부터 자동으로 활성화 돼요!</StyledDescription>
        </View>
      )
}

export default PromiseHeader

const StyledTitle = styled(Text)`
  margin-top: 25px;
  margin-bottom: 8px;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
`

const StyledPromiseTitle = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;
  margin-bottom: 4px;
`

const StyledDescription = styled(Text)`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.2px;
  margin-bottom: 24px;
  color: #5C5B7C;
`