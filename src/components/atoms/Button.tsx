import styled from 'styled-components/native';
import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper disabled={disabled} onPress={onClick}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(TouchableOpacity)`
  width: 311px;
  height: 52px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${({ disabled }: { disabled?: boolean }) =>
    disabled ? '#CACACA' : '#0075ff'};
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
`;
