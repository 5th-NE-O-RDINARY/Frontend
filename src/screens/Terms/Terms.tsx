import { Button } from '@/components/atoms/Button';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const RadioButtonGroup = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((item) => item !== option),
      );
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    }
  };

  const isOptionSelected = (option) => {
    return selectedOptions.includes(option);
  };

  const checkSelectAll = () => {
    selectedOptions.sort();
    if (
      selectedOptions[0] === contents[0].Option &&
      selectedOptions[1] === contents[1].Option &&
      selectedOptions[2] === contents[2].Option &&
      selectedOptions[3] === contents[3].Option &&
      selectedOptions[4] === contents[4].Option &&
      selectedOptions[5] === contents[5].Option
    ) {
      setSelectAll(true);
    } else setSelectAll(false);
  };

  useEffect(() => {
    checkSelectAll();
  }, [selectedOptions]);

  const contents = [
    { text: '(필수) 서비스 이용약관', Option: 'Option 1' },
    { text: '(필수) 위치기반 서비스 이용약관', Option: 'Option 2' },
    { text: '(필수) 개인정보 수집 동의', Option: 'Option 3' },
    { text: '(필수) 결제서비스 이용약관', Option: 'Option 4' },
    { text: '(선택) 개인정보 제3자 제공 동의', Option: 'Option 5' },
    { text: '(선택) 광고 수신 및 마케팅 동의', Option: 'Option 6' },
  ];

  return (
    <ScrollView>
      <Container>
        <Box>
          <RadioButton
            onPress={() => handleOptionSelect('option')}
            selected={isOptionSelected('option')}
          >
            <RadioInner selected={isOptionSelected('option')}>
              {isOptionSelected('option') && <RadioInnerSelected />}
            </RadioInner>
            <SelectAllWrapper>
              <SelectAll>전체 동의</SelectAll>
              <Description>(선택) 광고 수신을 포함하여 동의합니다</Description>
            </SelectAllWrapper>
          </RadioButton>
          <Check>확인</Check>
        </Box>

        <Hr />

        {contents.map((option, index) => (
          <Box>
            <RadioButton
              key={index}
              onPress={() => handleOptionSelect(option.Option)}
              selected={isOptionSelected(option.Option)}
            >
              <RadioInner selected={isOptionSelected(option.Option)}>
                {isOptionSelected(option.Option) && <RadioInnerSelected />}
              </RadioInner>
              <LabelText>{option.text}</LabelText>
            </RadioButton>
            <Check>확인</Check>
          </Box>
        ))}

        <ButtonWrapper>
          <Button children="동의" disabled={!selectAll} />
        </ButtonWrapper>
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding-top: 25px;

  background-color: white;

  gap: 21px;
`;

const Hr = styled.View`
  width: 311px;
  height: 1px;
  flex-shrink: 0;
  margin: 25px auto;

  border: 1px solid #f0f0f0;
`;

const Box = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 301px;
  margin: 0 auto;
`;

const RadioButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const RadioInner = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 14px;
  border-width: 2px;
  border-color: black;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  ${({ selected }) => selected && 'border-color: black;'}
`;

const RadioInnerSelected = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: black;
`;

const SelectAllWrapper = styled.View`
  width: 199px;
  padding-left: 12px;
  margin-left: 12px;

  flex-direction: column;
  height: 30px;
  align-items: flex-start;
  padding-top: 3px;
`;

const SelectAll = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

const LabelText = styled.Text`
  width: 199px;
  padding: 12px;
  margin-left: 12px;

  font-size: 14px;
  letter-spacing: -0.28px;
`;

const SelectOption = styled.Text`
  color: #0075ff;
`;

const Description = styled.Text`
  color: #cacaca;
  font-size: 10px;
  letter-spacing: -0.2px;
`;

const Check = styled.Text`
  justify-content: flex-end;
  margin-right: 12px;

  color: #cacaca;
  font-size: 14px;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
`;

const ButtonWrapper = styled.View`
  margin: 0 auto;
`;

export default RadioButtonGroup;
