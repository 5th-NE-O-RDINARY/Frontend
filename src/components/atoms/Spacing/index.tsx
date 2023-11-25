import { View } from "react-native";
import styled from "styled-components";

export const Spacing = styled(View)<{
  width?: number;
  height?: number;
}>`
  width: ${({ width }) => (width ? `${width}px` : '')};
  height: ${({height}) => (height ? `${height}px` : '')};
`;