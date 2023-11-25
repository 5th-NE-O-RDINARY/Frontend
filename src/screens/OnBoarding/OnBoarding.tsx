import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Board from '@/components/OnBoarding/Board';
import styled from 'styled-components/native';
import { Button } from '@/components/atoms/Button';

const OnBoarding = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Board />
      <ButtonWrapper>
        <Button
          children="시작하기"
          onClick={() => navigation.navigate('Login')}
        ></Button>
      </ButtonWrapper>
    </SafeAreaView>
  );
};

const ButtonWrapper = styled.View`
  margin: 0 auto;
`;

const LoginText = styled.Text`
  color: #0075ff;
  text-decoration: underline;
  text-align: center;
  margin: 32px 0;
`;

export default OnBoarding;
