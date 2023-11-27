import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, TouchableOpacityProps } from 'react-native';
import { styled } from 'styled-components';

type VariantType = 'default' | 'disabled';

interface ButtonProps extends TouchableOpacityProps {
  variant?: VariantType;
  children: string;
  onClick: () => void;
}

const DepositButton = ({
  children,
  variant = 'default',
  onClick,
}: ButtonProps) => {
  return (
    <ButtonWrapper variant={variant} onPress={onClick}>
      <ButtonText>{children}원</ButtonText>
    </ButtonWrapper>
  );
};

export default DepositButton;

const ButtonWrapper = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 38px;
  background-color: ${({ variant }: { variant: VariantType }) =>
    variant === 'disabled' ? '#CACACA' : '#0075FF'};
  border-radius: 6px;
`;

const ButtonText = styled(Text)`
  color: ${({ variant }: { variant: VariantType }) =>
    variant === 'disabled' ? '#A0AEC0' : '#FFFFFF'};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
`;
