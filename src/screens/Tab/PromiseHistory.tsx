import ListItem from '@/components/PromiseHistory/ListItem';
import SmallButton from '@/components/PromiseHistory/SmallButton';
import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
// ... (위 코드와 동일)

const PromiseHistory = () => {
  const [choice, setChoice] = useState<number>(0);

  const nickname = '클로버';

  // choice에 따라 필터링된 리스트 반환
  const filteredPromises = promiss.filter((item) => {
    if (choice === 1 && !item.isLate) return false; // 1일 때는 isLate가 false인 것만
    if (choice === 2 && item.isLate) return false; // 2일 때는 isLate가 true인 것만
    return true; // 0일 때는 전체 리스트
  });

  return (
    <Container>
      <Content>
        <Top>
          <Nickname>{nickname}님의 최근 약속 내역</Nickname>
          <Record>
            <RecordText>
              최근 한달 간 <Blue>16회</Blue>의 약속을 잡았고
            </RecordText>
            <RecordText>
              평균 <Red>3.2분 </Red>지각하였습니다.
            </RecordText>
          </Record>
          <Buttons>
            <SmallButton
              onPress={() => {
                setChoice(0);
              }}
              choice={choice === 0}
            >
              전체
            </SmallButton>
            <SmallButton
              onPress={() => {
                setChoice(1);
              }}
              choice={choice === 1}
            >
              지각
            </SmallButton>
            <SmallButton
              onPress={() => {
                setChoice(2);
              }}
              choice={choice === 2}
            >
              정시 도착
            </SmallButton>
          </Buttons>
        </Top>
        <ScrollView>
          {filteredPromises.map((item) => (
            <ListItem key={item.id} promise={item} />
          ))}
        </ScrollView>
      </Content>
    </Container>
  );
};

export default PromiseHistory;

const promiss = [
  {
    id: 1,
    title: '너디너리 대상 기념 회식',
    date: '11월 25일 토요일 19:00',
    content: '5분 지각',
    isLate: true,
    image: require('../../assets/ListImage1.png'),
    width: 105,
  },
  {
    id: 2,
    title: 'CMC 모각코 아자아자',
    date: '11월 25일 토요일 19:00',
    content: '정시 도착',
    isLate: false,
    image: require('../../assets/ListImage2.png'),
    width: 60,
  },
  {
    id: 3,
    title: '정시에 안오면 죽음뿐',
    date: '11월 20일 월요일 12:00',
    content: '30분 지각',
    isLate: true,
    image: require('../../assets/ListImage3.png'),
    width: 30,
  },
  {
    id: 4,
    title: '먹고죽자 먹고죽어!!!!',
    date: '11월 17일 금요일 16:30',
    content: '5분 지각',
    isLate: true,
    image: require('../../assets/ListImage2.png'),
    width: 60,
  },
  {
    id: 5,
    title: '와라.',
    date: '11월 12일 일요일 18:00',
    content: '정시 도착',
    isLate: false,
    image: require('../../assets/ListImage3.png'),
    width: 30,
  },
  {
    id: 6,
    title: '미녕이 생일파티',
    date: '11월 9일 목요일 13:00',
    content: '5분 지각',
    isLate: true,
    image: require('../../assets/ListImage1.png'),
    width: 105,
  },
];

const Container = styled.SafeAreaView`
  background-color: #fff;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Content = styled.View`
  height: 100%;
  width: 85%;
  padding-top: 20px;
`;

const Top = styled.View``;

const Record = styled.View`
  margin-top: 16px;
`;

const Nickname = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const RecordText = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

const Red = styled.Text`
  color: #ff0000;
`;

const Blue = styled.Text`
  color: #0075ff;
`;

const Buttons = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-top: 20px;
`;
