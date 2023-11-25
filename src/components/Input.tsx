import EyeClosed from '@/assets/icon/EyeClosed';
import EyeOpend from '@/assets/icon/EyeOpend';
import React, { useState } from 'react';
import { TextInputProps, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

interface StyledInputProps extends TextInputProps {
  isPassword?: boolean;
  label?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  button?: React.ReactNode;
  onClick?: () => void;
}

const Input = ({
  isPassword,
  label,
  placeholder,
  onChangeText,
  button,
  onClick,
}: StyledInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    onChangeText && onChangeText(text);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <StyledInputContainer>
        <StyledInput
          placeholder={placeholder}
          secureTextEntry={isPassword ? !showPassword : undefined}
          onChangeText={handleInputChange}
          value={inputValue}
        />
        {button ? (
          <TouchableOpacity onPress={onClick}>{button}</TouchableOpacity>
        ) : null}
        {isPassword && (
          <PasswordToggle onPress={togglePasswordVisibility}>
            {showPassword ? <EyeOpend /> : <EyeClosed />}
          </PasswordToggle>
        )}
      </StyledInputContainer>
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.View`
  width: 311px;
  margin-bottom: 16px;
`;

const StyledInputContainer = styled.View`
  border-radius: 15px;
  background-color: #f1f1f1;
  width: 311px;
  height: 52px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
`;

const StyledInput = styled.TextInput<StyledInputProps>`
  max-width: 80%;
`;

const PasswordToggle = styled(TouchableOpacity)``;

const Label = styled.Text`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
`;
