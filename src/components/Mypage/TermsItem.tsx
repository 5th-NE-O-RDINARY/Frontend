import styled from 'styled-components/native';
import ArrowRight from '@/assets/icon/ArrowRight';

const TermsItem = ({ title }: { title: string }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ArrowRight />
    </Container>
  );
};

export default TermsItem;

const Container = styled.View`
  width: 311px;
  height: 36px;
  padding: 0 24px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 12px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;
