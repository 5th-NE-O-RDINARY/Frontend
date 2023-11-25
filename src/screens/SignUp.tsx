import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity } from 'react-native';
import Input from '@/components/Input';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Button } from '@/components/atoms/Button';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');

  const [check, setCheck] = useState<boolean>(false);
  const [passwordOk, setPasswordOk] = useState<boolean>(false);

  useEffect(() => {
    if (password.length === passwordCheck.length && password.length > 0) {
      setPasswordOk(true);
    }
  }, [passwordCheck]);
  const handleSignup = () => {
    console.log('회원가입');
  };

  const duplicateCheck = () => {
    console.log('중복확인');
    setCheck(true);
  };

  useEffect;

  return (
    <Container>
      <Blank />
      <Input
        label="이름"
        placeholder="이름을 입력해주세요"
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      />

      <Input
        label="아이디"
        placeholder="아이디를 입력해주세요"
        value={id}
        onChangeText={(text) => {
          setId(text);
        }}
        button={<Btn />}
        onClick={duplicateCheck}
      />
      {check && <DuplicateCheck>사용가능한 아이디입니다.</DuplicateCheck>}
      <Input
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        isPassword
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
      />
      <Input
        label="비밀번호 확인"
        placeholder="비밀번호를 한번 더 입력해주세요"
        isPassword
        onChangeText={(text) => {
          setPasswordCheck(text);
        }}
        value={passwordCheck}
      />
      {!passwordOk && (
        <DuplicateCheck>비밀번호가 일치하지 않습니다</DuplicateCheck>
      )}
      <ButtonBox>
        <Button onClick={() => navigation.navigate('Login')}>
          회원가입하기
        </Button>
      </ButtonBox>

      <Bottom>
        <Text>혹시 이미 가입된 회원이신가요?</Text>
        <TouchableOpacity>
          <Go onPress={() => navigation.navigate('Login')}>로그인하기</Go>
        </TouchableOpacity>
      </Bottom>
    </Container>
  );
};
const Btn = () => {
  return (
    <CheckButton>
      <CheckText>중복 확인</CheckText>
    </CheckButton>
  );
};

const CheckButton = styled.View`
  width: 49px;
  height: 20px;
  background-color: #0075ff;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`;

const CheckText = styled.Text`
  color: #fff;
  font-size: 10px;
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
  margin-top: 32px;
`;

const DuplicateCheck = styled.Text`
  color: #ff0000;
  width: 300px;
  margin-bottom: 20px;
  font-size: 12px;
`;
export default SignUp;
