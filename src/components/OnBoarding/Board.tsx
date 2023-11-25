import {
  AppRegistry,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { OnBoardingData } from '@/constants/onBoardingData';

const Board = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.floor(offsetX / Dimensions.get('window').width);
    setCurrentPage(currentIndex);
  };

  return (
    <>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      >
        {OnBoardingData.map((item, index) => (
          <View key={index} style={styles.container}>
            <View style={styles.img}></View>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.contentWrapper}>
              <Text style={styles.content}>{item.content1}</Text>
              <Text style={styles.content}>{item.content2}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {OnBoardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentPage && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  img: {
    width: 311,
    height: 264,
    backgroundColor: 'gray',
    marginBottom: 61,
  },
  title: {
    color: '#4876EF',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 21,
  },
  content: {
    fontSize: 11,
    textAlign: 'center',
  },
  contentWrapper: {
    marginBottom: 37,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 4,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#4876EF',
  },
});

export default Board;
