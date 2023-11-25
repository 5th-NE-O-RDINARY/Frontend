import styled from 'styled-components/native';
import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

type VariantType = 'default' | 'small'

interface ButtonProps extends TouchableOpacityProps {
  variant?: VariantType
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variant = 'default',
  children,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonWrapper variant={variant} disabled={disabled} onPress={onClick}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(TouchableOpacity)`
  width: ${({ variant }: { variant: VariantType }) => variant === 'small' ? '140px' : '311px'};
  height: ${({ variant }: { variant: VariantType }) => variant === 'small' ? '40px' : '52px'};
  border-radius: ${({ variant }: { variant: VariantType }) => variant === 'small' ? '12px' : '15px'};
  justify-content: center;
  align-items: center;
  background-color: ${({ variant, disabled }: { variant: VariantType, disabled?: boolean }) =>
    disabled ? variant === 'small' ? '#F1F1F1' : '#CACACA' : '#0075ff'};
`;

const ButtonText = styled(Text)`
  color: ${({ variant, disabled }: { variant: VariantType, disabled?: boolean }) =>
    variant === 'small' && disabled ? "#5C5B7C" : "#fff"};
  font-size: ${({ variant }: { variant: VariantType }) => variant === 'small' ? '12px' : '16px'};
  font-weight: ${({ variant }: { variant: VariantType }) => variant === 'small' ? '400' : '500'};
  letter-spacing: ${({ variant }: { variant: VariantType }) => variant === 'small' ? '-0.24px' : '-0.32px'};
`;
