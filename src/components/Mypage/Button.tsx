import ArrowRight from '@/assets/icon/ArrowRight';
import styled from 'styled-components/native';

interface ButtonProps {
  title: string;
  point: string;
}

const Button = ({ title, point }: ButtonProps) => {
  return (
    <Container>
      <Box>
        <Title>{title}</Title>
        <Content>{point}</Content>
      </Box>
      <Icon>
        <ArrowRight />
      </Icon>
    </Container>
  );
};

export default Button;

const Container = styled.View`
  width: 144px;
  height: 70px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 12px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  border: 1px solid #e5e5e5;
  padding: 0 11px;
`;

const Box = styled.View`
  width: 60%;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
`;

const Icon = styled.View``;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
`;

const Content = styled.Text`
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;
