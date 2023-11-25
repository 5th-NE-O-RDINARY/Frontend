import { Button } from '@/components/atoms/Button';
import React from 'react';
import { Text } from 'react-native';

const Home = () => {
  return (
    <>
      <Button onClick={() => console.log('click')}>로그인</Button>
      <Button disabled>로그인</Button>
    </>
  );
};

export default Home;
