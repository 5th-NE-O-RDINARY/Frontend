import Button from '@/components/Mypage/Button';
import TermsItem from '@/components/Mypage/TermsItem';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
const Mypage = () => {
  return (
    <View>
      <Top>
        <Profile>
          <Me>
            <Image
              source={require('@/assets/Profile.png')}
              style={{ width: 64, height: 64 }}
            />
            <NicnameBox>
              <Nickname>클로버</Nickname>
              <Money>5,200원</Money>
            </NicnameBox>
          </Me>
          <EditButton>
            <EditText>프로필 수정</EditText>
          </EditButton>
        </Profile>
        <Buttons>
          <Button title="누적 적립금" point="💵 320원" />
          <Button title="포인트" point="😀 520 P" />
        </Buttons>
      </Top>
      <Bottom>
        <TermsItem title="서비스이용약관" />
        <TermsItem title="개인정보 처리방침" />
        <TermsItem title="위치기반 서비스 이용약관" />
      </Bottom>
    </View>
  );
};

export default Mypage;

const Top = styled.View`
  background-color: #fff;
  height: 274px;
`;

const Bottom = styled.View`
  align-items: center;
  padding-top: 20px;
`;

const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 32px;
  margin-top: 20px;
`;

const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 32px;
  margin-top: 40px;
  margin-bottom: 30px;
  justify-content: space-between;
`;

const NicnameBox = styled.View`
  margin-left: 16px;
  gap: 8px;
`;

const Nickname = styled.Text`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
`;

const Money = styled.Text`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
`;

const EditButton = styled.View`
  width: 80px;
  height: 27px;
  background-color: #f1f1f1;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

const EditText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

const Me = styled.View`
  flex-direction: row;
  align-items: center;
`;
