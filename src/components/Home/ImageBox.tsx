import styled from 'styled-components/native';
import { Image } from 'react-native';

interface ImageBoxProps {
  id?: number;
  image: string;
  title?: string;
  location?: string;
}

const ImageBox = ({ image, title, location }: ImageBoxProps) => {
  return (
    <Container>
      <Image
        source={image}
        style={{ width: 95, height: 95, borderRadius: 12 }}
      />
    </Container>
  );
};

export default ImageBox;

const Container = styled.View`
  width: 95px;
  height: 95px;
  border-radius: 12px;
`;
