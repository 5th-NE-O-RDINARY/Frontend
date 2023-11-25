import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const IdCheck = () => {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="18" height="18" rx="6" fill="#F0F0F0" />
      <G clip-path="url(#clip0_57_6250)">
        <Path
          d="M7.36354 11.2748L5.089 9.00027L4.31445 9.76936L7.36354 12.8185L13.909 6.273L13.1399 5.50391L7.36354 11.2748Z"
          fill="#7C5B5B"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_57_6250">
          <Rect
            width="13.0909"
            height="13.0909"
            fill="white"
            transform="translate(2.45459 2.45459)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default IdCheck;
