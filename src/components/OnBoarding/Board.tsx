import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

type ItemData = {
  key: string;
  title: string;
  content: string;
};

const OnBoardingData: ItemData[] = [
  {
    key: '1',
    title: '친구와 약속잡고 지각비 정산',
    content: `우리의 시간은 금이에요!</br>친구를 초대해 약속방을 만들고 지각비 정산까지 1분!`,
  },
  {
    key: '2',
    title: '지각 시간에 따라 지각비 차등 정산',
    content: `10분과 1시간은 달라요!</br>얼마나 지각했는지에 따라 지각비 정산이 가능해요!`,
  },
  {
    key: '3',
    title: '모임 지각비 정산',
    content: `한 명 때문에 여러명이 기다린 적 있으신가요?</br>모임 구성원 여러명이서도 참여할 수 있어요!`,
  },
  {
    key: '4',
    title: '대면 중고거래 위약금 설정',
    content: `대면 중고거래도 사기가 많아졌어요</br>만남 시간에 지각비를 걸어놓고 안전하게 만나요!`,
  },
];

type ItemProps = {
  item: ItemData;
  textColor: string;
};

const Item = ({ item, textColor }: ItemProps) => {
  const contents = item.content?.split('</br>');

  return (
    <TouchableOpacity style={[styles.item]}>
      <View style={styles.img}></View>
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
      <Text style={styles.content}>
        {contents?.map((content, index) => {
          return (
            <Text key={index}>
              {content}
              {'\n'}
            </Text>
          );
        })}
      </Text>
    </TouchableOpacity>
  );
};

const Board = () => {
  const renderItem = ({ item }: { item: ItemData }) => {
    return <Item item={item} textColor="#4876EF" />;
  };

  return (
    <>
      <FlatList
        data={OnBoardingData}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 32,

    borderWidth: 1,
    borderColor: 'red',
  },
  img: {
    width: 311,
    height: 264,
    backgroundColor: 'gray',
    marginBottom: 61,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 21,
  },
  content: {
    fontSize: 11,
    textAlign: 'center',
  },
});

export default Board;
