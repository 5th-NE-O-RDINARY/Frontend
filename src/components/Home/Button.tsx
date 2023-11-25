import styled from 'styled-components/native';

interface ButtonProps {
  title: string;
  fill?: boolean;
}

const SmallButton = ({ title, fill }: ButtonProps) => {
  return (
    <Container style={{ backgroundColor: !fill ? '#fff' : '#0075ff' }}>
      <Title style={{ color: !fill ? '#000' : '#fff' }}>{title}</Title>
    </Container>
  );
};

export default SmallButton;

const Container = styled.View`
  width: 135px;
  height: 38px;
  border-radius: 10px;
  border: 2px solid #0075ff;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;
