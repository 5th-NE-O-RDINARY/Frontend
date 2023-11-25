import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const HomeIcon = ({ color }: { color: string }) => {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_59_7231)">
        <Path
          d="M13.3335 25.3333V18.6666H18.6668V25.3333C18.6668 26.0666 19.2668 26.6666 20.0001 26.6666H24.0001C24.7335 26.6666 25.3335 26.0666 25.3335 25.3333V16H27.6001C28.2135 16 28.5068 15.24 28.0401 14.84L16.8935 4.79996C16.3868 4.34663 15.6135 4.34663 15.1068 4.79996L3.96013 14.84C3.5068 15.24 3.7868 16 4.40013 16H6.6668V25.3333C6.6668 26.0666 7.2668 26.6666 8.00013 26.6666H12.0001C12.7335 26.6666 13.3335 26.0666 13.3335 25.3333Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_59_7231">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default HomeIcon;
