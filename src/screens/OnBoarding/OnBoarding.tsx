import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Board from '@/components/OnBoarding/Board';
import styled from 'styled-components/native';

const OnBoarding = () => {
  return (
    <SafeAreaView>
      <Board />
      <KaKao>
        {/* <KakaoIcon /> */}
        <KakaoText>카카오로 로그인하기</KakaoText>
      </KaKao>
      <LoginText>일반 회원 로그인</LoginText>
    </SafeAreaView>
  );
};

const KaKao = styled.View`
  width: 311px;
  height: 52px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fee404;
  border-radius: 15px;
  gap: 8px;
  margin: 0 auto;
`;

const KakaoText = styled.Text`
  color: #392020;
  font-size: 16px;
  font-weight: 500;
`;

const LoginText = styled.Text`
  text-decoration: underline;
  text-align: center;
  margin: 32px 0;
`;

export default OnBoarding;
