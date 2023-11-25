// import DepositButton from '@/components/MyPage/DepositButton';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

const buttonData = [
  { text: '5,000', id: 0 },
  { text: '10,000', id: 1 },
  { text: '20,000', id: 2 },
  { text: '30,000', id: 3 },
  { text: '40,000', id: 4 },
  { text: '50,000', id: 5 },
];

const Deposit = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <StyledView>
      <Flex>
        <StyledText>미리 충전하고</StyledText>
        <StyledText>편리하게 사용하세요!</StyledText>
      </Flex>
      <AmountText>충전할 금액</AmountText>
      <DepositButtonWrapper>
        {/* {buttonData.map((button) => (
          <DepositButton
            variant={button.id === selectedButton ? 'default' : 'disabled'}
            onClick={() => {
              console.log(button.id);
              setSelectedButton(button.id);
            }}
          >
            {button.text}
          </DepositButton>
        ))} */}
      </DepositButtonWrapper>
      <AmountText>결제 방법</AmountText>
      <VirtualAccountWrapper>
        <VirtualAccountText>가상계좌</VirtualAccountText>
      </VirtualAccountWrapper>
      <WarningText>
        *충전 신청 후 2시간 이내에 입금하지 않으면 충전이 취소됩니다.
      </WarningText>
      <VirtualAccountGuideView>
        <GuideText>가상 계좌 안내</GuideText>
        <GuideDescriptionText>
          - 가상계좌를 발급 받아 무통장으로 입금할 수 있어요.
        </GuideDescriptionText>
        <GuideDescriptionText>
          - 등록하신 계정의 휴대폰 번호로 무통장 계좌 안내가 발송돼요.
        </GuideDescriptionText>
      </VirtualAccountGuideView>
    </StyledView>
  );
};

export default Deposit;

const StyledView = styled(SafeAreaView)`
  padding: 0 32px;
  background-color: #fff;
  height: 700px;
`;

const Flex = styled(View)`
  display: flex;
  flex-direction: column;
  margin-bottom: 29px;
  margin-top: 6px;
`;

const StyledText = styled(Text)`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
  margin-top: 4px;
`;

const DepositButtonWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 13px;
  margin-bottom: 24px;
`;

const AmountText = styled(Text)`
  color: #000;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.24px;
  margin-bottom: 12px;
`;

const VirtualAccountWrapper = styled(View)`
  width: 311px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #000;
  margin-bottom: 8px;
`;

const VirtualAccountText = styled(Text)`
  color: #000;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
`;

const WarningText = styled(Text)`
  color: #f00;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.2px;
  margin-bottom: 9px;
`;

const VirtualAccountGuideView = styled(View)`
  padding: 12px 54px 13px 12px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 6px;
  background: #f1f1f1;
  width: 320px;
  height: 75px;
`;

const GuideText = styled(Text)`
  color: #5c5b7c;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.24px;
  margin-bottom: 4px;
`;

const GuideDescriptionText = styled(Text)`
  color: #5c5b7c;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.2px;
`;
