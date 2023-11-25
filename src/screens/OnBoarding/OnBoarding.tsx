import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Board from '@/components/OnBoarding/Board';

const OnBoarding = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Board />
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {},
});
