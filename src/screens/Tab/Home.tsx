import Input from '@/components/Input';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SmallButton from '@/components/Home/Button';
import LogoIcon from '@/assets/icon/Logo';
import { Button } from '@/components/atoms/Button';
import ImageBox from '@/components/Home/ImageBox';

const Home = ({ navigation }) => {
  return (
    <Container>
      <Logo>
        <Image
          source={require('@/assets/Logo.png')}
          style={{ width: 48, height: 48 }}
        />
        <LogoIcon />
      </Logo>
      <Buttons>
        <SmallButton title="빠른 약속 계획" />
        <SmallButton title="초대코드로 입장하기" fill />
      </Buttons>
      <Expected>
        <Image
          source={require('@/assets/Hand.png')}
          style={{ width: 64, height: 64 }}
        />
        <BigText>아직 예정된 약속이 없어요!</BigText>
        <SmallText>친구, 지인과 약속을 잡고</SmallText>
        <SmallText>약속한 시간에 만나 더 많은 시간을 보내 보세요.</SmallText>
        <View style={{ height: 24 }} />
        <Button onClick={() => navigation.navigate('약속잡기')}>
          1분만에 약속 잡기
        </Button>
      </Expected>
      <Famous>
        <FamousTitle>인기 약속 장소 Best 10</FamousTitle>
        <Place>
          {placeList.map((place) => (
            <ImageBox key={place.id} image={place.image} />
          ))}
        </Place>
      </Famous>
    </Container>
  );
};

export default Home;

const placeList = [
  {
    id: 1,
    name: '스페이스 워크',
    location: '포항',
    image: require('../../assets/Place1.png'),
  },
  {
    id: 2,
    name: '낭만 포차 거리',
    location: '여수',
    image: require('../../assets/Place2.png'),
  },
  {
    id: 3,
    name: '속초 중앙시장',
    location: '속초',
    image: require('../../assets/Place3.png'),
  },
  { id: 4, image: require('../../assets/Place4.png') },
  { id: 5, image: require('../../assets/Place5.png') },
  { id: 6, image: require('../../assets/Place6.png') },
];

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

const Logo = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 32px;
  margin-top: 40px;
  margin-bottom: 14px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const Buttons = styled.View`
  gap: 35px;
  flex-direction: row;
  justify-content: space-between;
`;

const Expected = styled.View`
  width: 100%;
  height: 272px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  border-radius: 15px;
  ${Platform.select({
    ios: `
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 1px;
  `,
    android: `
    elevation: 4;
  `,
  })}
`;

const BigText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
  margin-top: 24px;
  margin-bottom: 12px;
`;

const SmallText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

const Famous = styled.View`
  width: 100%;
  margin-top: 24px;
  align-items: center;
`;

const FamousTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.48px;
`;

const Place = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 24px;
  width: 100%;
  padding: 0 16px;
`;
