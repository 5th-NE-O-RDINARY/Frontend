// SmallButton.tsx

import React from 'react';
import styled, { DefaultTheme } from 'styled-components/native';

interface SmallButtonProps {
  onPress: () => void;
  children: string;
  choice?: boolean;
}

const SmallButton = ({ onPress, children, choice }: SmallButtonProps) => {
  return (
    <Container theme={{ choice }} onPress={onPress}>
      <ButtonText theme={{ choice }}>{children}</ButtonText>
    </Container>
  );
};

export default SmallButton;

const Container = styled.TouchableOpacity`
  background-color: ${({ theme }: { theme: { choice?: boolean } }) =>
    theme.choice ? '#0075ff' : '#F1F1F1'};
  padding: 10px;
  border-radius: 100px;
  width: 70px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${({ theme }: { theme: { choice?: boolean } }) =>
    theme.choice ? '#fff' : '#5C5B7C'};
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.24px;
`;
