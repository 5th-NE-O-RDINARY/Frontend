import { Platform, Image } from 'react-native';
import styled from 'styled-components/native';

interface PromiseProps {
  id: number;
  title: string;
  content: string;
  date: string;
  isLate: boolean;
  image?: string;
  width?: number;
}

const ListItem = ({ promise }: { promise: PromiseProps }) => {
  return (
    <Container>
      <Date>{promise.date}</Date>
      <Box>
        <Title>{promise.title}</Title>
        {promise.image && (
          <Image
            source={promise.image}
            style={{ width: promise.width, height: 30 }}
          />
        )}
      </Box>
      <Content>
        {promise.isLate ? (
          <Content style={{ color: '#FF0000' }}>{promise.content}</Content>
        ) : (
          <Content style={{ color: 'blue' }}>{promise.content}</Content>
        )}
      </Content>
    </Container>
  );
};

export default ListItem;

const Container = styled.View`
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  background-color: #fff;
  margin-bottom: 10px;
  ${Platform.select({
    ios: `
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 1px;
  `,
    android: `
    elevation: 4;
  `,
  })}
`;

const Date = styled.Text`
  font-size: 10px;
  color: #5c5b7c;
  font-weight: 400;
`;

const Title = styled.Text`
  width: 100%;
  margin-top: 5px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

const Content = styled.Text`
  margin-top: 5px;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;

const Box = styled.View`
  width: 60%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
