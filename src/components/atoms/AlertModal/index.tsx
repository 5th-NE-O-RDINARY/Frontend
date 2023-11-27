import XIcon from '@/assets/icon/XButton';
import { promiseDetailState } from '@/libs/store/promiseDetail';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { Button } from '../Button';

const AlertModal = () => {
  const setModal = useSetRecoilState(promiseDetailState);
  const [copy, setCopy] = useState<boolean>(false);
  return (
    <AlertModalWrapper>
      <StyledButton
        onPress={() => setModal((prevData) => ({ ...prevData, isOpen: false }))}
      >
        <Text>
          <XIcon />
        </Text>
      </StyledButton>
      <Flex>
        <StyledText>초대할 사람에게 공유해주세요!</StyledText>
        <StyledDescription>초대코드 창</StyledDescription>
        <Button
          variant="short"
          onClick={() => {
            setCopy(!copy);
          }}
        >
          복사
        </Button>
        {copy && <StyledText>복사되었습니다!!</StyledText>}
      </Flex>
    </AlertModalWrapper>
  );
};

export default AlertModal;

const AlertModalWrapper = styled(View)`
  position: absolute;
  width: 251px;
  height: 188px;
  background-color: #ffffff;
  border-radius: 15px;
  left: 8%;
  bottom: 45%;
`;

const StyledButton = styled(TouchableOpacity)`
  margin-top: 10px;
  margin-left: 90%;
  margin-bottom: 10px;
`;

const StyledText = styled(Text)`
  color: #0075ff;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.2px;
`;

const StyledDescription = styled(Text)`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;
`;

const Flex = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
`;
