import Input from '@/components/Input';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '@/components/atoms/Button';
import IdCheck from '@/assets/icon/IdCheck';
import KakaoIcon from '@/assets/icon/KakaoIcon';

const Login = ({ navigation }) => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (id.length > 0 && password.length > 0) {
      setDisabled(false);
    }
  }, [password]);

  const handleLogin = () => {
    console.log('로그인');
  };
  return (
    <Container>
      <Blank />
      <Input
        label="아이디"
        placeholder="아이디를 입력해주세요"
        value={id}
        onChangeText={(text) => {
          setId(text);
        }}
      />

      <Input
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
      />
      <Active>
        <Box>
          <IdCheck />
          <Save>아이디 저장</Save>
        </Box>
        <Find>아이디/비밀번호찾기</Find>
      </Active>

      <ButtonBox>
        <Button disabled={disabled} onClick={handleLogin}>
          로그인
        </Button>
      </ButtonBox>

      <SNS>SNS로 간편로그인</SNS>
      <KaKao>
        <KakaoIcon />
        <KakaoText>카카오로 로그인하기</KakaoText>
      </KaKao>

      <Bottom>
        <Text>아직 회원이 아니신가요?</Text>
        <TouchableOpacity>
          <Go onPress={() => navigation.navigate('SignUp')}>회원가입하기</Go>
        </TouchableOpacity>
      </Bottom>
    </Container>
  );
};

export default Login;

const Container = styled.SafeAreaView`
  background-color: #fff;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Blank = styled.View`
  height: 20px;
`;

const ButtonBox = styled.View`
  margin-top: 40px;
`;

const Box = styled.View`
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const Bottom = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  position: absolute;
  bottom: 30px;
  color: #000;
  font-size: 10px;
`;

const Go = styled.Text`
  color: #0075ff;
  margin-left: 5px;
`;

const Active = styled.View`
  width: 311px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const Save = styled.Text`
  font-size: 12px;
  color: #5c5b7c;
`;
const Find = styled.Text`
  font-size: 12px;
  color: #5c5b7c;
`;

const KakaoText = styled.Text`
  color: #392020;
  font-size: 16px;
  font-weight: 500;
`;

const KaKao = styled.View`
  width: 311px;
  height: 52px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fee404;
  border-radius: 15px;
  gap: 8px;
`;

const SNS = styled.Text`
  font-size: 12px;
  font-weight: 400;
  margin: 60px 0 12px 0;
`;
