import { View, Text } from "react-native"
import { styled } from "styled-components"

const PromisePay = ({ commonPay }: { commonPay: boolean }) => {
    const renderCommonPay = () => {
        if (commonPay) {
            return (
                <Flex>
                    <StyledText>공통 지각비 납부: </StyledText>
                    <StyledText>100,000원</StyledText>
                </Flex>
            )
        } else {
            return (
                <>
                    <Flex>
                        <StyledText>차등 지각비 납부: </StyledText>
                        <StyledText>5분마다 최대 지각비의
                            <ColoredText> 10%</ColoredText>
                        </StyledText>
                    </Flex>
                    <StyledNotCommonText>차등 납부</StyledNotCommonText>
                    <Flex>
                        <StyledText>최대 지각비 :</StyledText>
                        <StyledText>100,000원</StyledText>
                    </Flex>
                </>
            )
        }
        
    }

    return (
        <PromisePayWrapper>
            <StyledTitle>납부 방식</StyledTitle>
            {renderCommonPay()}
        </PromisePayWrapper>
    )
}

export default PromisePay

const PromisePayWrapper = styled(View)`
    padding-bottom: 46px;
`

const StyledTitle = styled(Text)`
    margin-bottom: 8px;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.4px;
`

const StyledText = styled(Text)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.32px;
    margin-bottom: 8px;
`

const ColoredText = styled(Text)`
    color: #0075FF;
`

const Flex = styled(View)`
    display: flex;
    flex-direction: row;
`

const StyledNotCommonText = styled(Text)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.32px;
    margin-bottom: 8px;
    margin-left: 115px;
    color: #0075FF;
`