import { View, Text } from "react-native"
import { styled } from "styled-components"

const PromiseSchedule = ({promiseDate, promiseTime}: {promiseDate: string, promiseTime: string}) => {
    return (
        <View>
            <StyledTitle>약속 일정</StyledTitle>
            <Flex>
                <StyledDay>{promiseDate}</StyledDay>
                <StyledTime>{promiseTime}</StyledTime>
            </Flex>
        </View>
    )
}

export default PromiseSchedule

const StyledTitle = styled(Text)`
  margin-bottom: 8px;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
`

const StyledDay = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;
  margin-bottom: 4px;
  margin-right: 8px;
`

const StyledTime = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;
`

const Flex = styled(View)`
    display: flex;
    flex-direction: row;
    margin-bottom: 21px;
`