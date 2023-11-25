import Input from '@/components/Input';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const [value, setValue] = useState<string>('');
  console.log('value:', value);
  return (
    <Container>
      <Input
        label="이름"
        placeholder="이름을 입력해주세요"
        value={value}
        onChangeText={(text) => {
          setValue(text);
        }}
        button={<Btn />}
        onClick={() => {
          console.log('click btn');
        }}
      />
      <Input
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        isPassword
        onChangeText={(text) => {
          setValue(text);
        }}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate('MY')}> */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>로그인하기</Text>
      </TouchableOpacity>
    </Container>
  );
};
const Btn = () => {
  return (
    <CheckButton>
      <Text>확인</Text>
    </CheckButton>
  );
};

const CheckButton = styled.View`
  width: 49px;
  height: 20px;
  background-color: #0075ff;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
export default Home;

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;
