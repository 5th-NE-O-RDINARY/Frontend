import { View, Text } from "react-native"
import { styled } from "styled-components"

const PromiseAuthentication = ({isLocation}: {isLocation: boolean}) => {
    return (
        <View>
            <StyledTitle>인증 방법</StyledTitle>
            <StyledLocation>{isLocation ? '위치기반 자동 인증' : '방장 수동 인증'}</StyledLocation>
            <StyledDescription>50m 이내로 가까워졌을 때 자동 인증돼요!</StyledDescription>
        </View>
    )
}

export default PromiseAuthentication

const StyledTitle = styled(Text)`
  margin-bottom: 8px;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
`

const StyledLocation = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;
  margin-bottom: 8px;
`

const StyledDescription = styled(Text)`
    font-size: 10px;
    font-weight: 400;
    letter-spacing: -0.2px;
    margin-bottom: 24px;
    color: #5C5B7C;
`
