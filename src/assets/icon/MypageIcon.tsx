import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const MypageIcon = ({ color }: { color: string }) => {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_59_7252)">
        <Path
          d="M15.9997 16.0002C18.9463 16.0002 21.333 13.6135 21.333 10.6668C21.333 7.72016 18.9463 5.3335 15.9997 5.3335C13.053 5.3335 10.6663 7.72016 10.6663 10.6668C10.6663 13.6135 13.053 16.0002 15.9997 16.0002ZM15.9997 18.6668C12.4397 18.6668 5.33301 20.4535 5.33301 24.0002V25.3335C5.33301 26.0668 5.93301 26.6668 6.66634 26.6668H25.333C26.0663 26.6668 26.6663 26.0668 26.6663 25.3335V24.0002C26.6663 20.4535 19.5597 18.6668 15.9997 18.6668Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_59_7252">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default MypageIcon;
