import { View, Text } from "react-native"
import { styled } from "styled-components"

const PromiseLocation = ({promiseLocationName, promiseLocationAddress}: {promiseLocationName: string, promiseLocationAddress: string}) => {
    return (
        <View>
            <StyledTitle>약속 장소</StyledTitle>
            <StyledLocationTitle>{promiseLocationName}</StyledLocationTitle>
            <StyledLocationDetail>{promiseLocationAddress}</StyledLocationDetail>
        </View>
    )
}

export default PromiseLocation

const StyledTitle = styled(Text)`
  margin-bottom: 8px;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
`

const StyledLocationTitle = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;
  margin-bottom: 8px;
`

const StyledLocationDetail = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;
  margin-bottom: 24px;
`