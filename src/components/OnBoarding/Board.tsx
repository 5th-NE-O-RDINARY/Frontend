import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { OnBoardingData } from '@/constants/onBoardingData';
import styled from 'styled-components/native';

const Board = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.floor(offsetX / Dimensions.get('window').width);
    setCurrentPage(currentIndex);
  };

  return (
    <Wrapper>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      >
        {OnBoardingData.map((item, index) => (
          <Container key={index}>
            <Img>
              <Image source={item.imgUrl} />
            </Img>
            <Title>{item.title}</Title>
            <ContentWrapper>
              <Content>{item.content1}</Content>
              <Content>{item.content2}</Content>
            </ContentWrapper>
          </Container>
        ))}
      </ScrollView>
      <Pagination>
        {OnBoardingData.map((_, index) => (
          <PaginationDot key={index} active={index === currentPage} />
        ))}
      </Pagination>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  position: relative;
`;

const Container = styled.View`
  width: ${Dimensions.get('window').width}px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Img = styled.View`
  width: 300px;
  height: 300px;
  margin-bottom: 30px;
  background-color: lightgray;
`;

const Title = styled.Text`
  color: #4876ef;
  font-size: 16px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 21px;
`;

const Content = styled.Text`
  font-size: 11px;
  text-align: center;
`;

const ContentWrapper = styled.View`
  margin-bottom: 37px;
`;

const Pagination = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 28px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PaginationDot = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 5px;
  background-color: ${({ active }: { active: boolean }) =>
    active ? '#4876ef' : '#D9D9D9'};
`;

export default Board;
