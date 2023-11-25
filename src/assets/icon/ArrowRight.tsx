import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const ArrowRight = () => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_59_10177)">
        <Path
          d="M4.77641 13.9088C5.10307 14.2355 5.62974 14.2355 5.95641 13.9088L11.4964 8.36881C11.7564 8.10881 11.7564 7.68881 11.4964 7.42881L5.95641 1.88881C5.62974 1.56214 5.10307 1.56214 4.77641 1.88881C4.44974 2.21547 4.44974 2.74214 4.77641 3.06881L9.60307 7.90214L4.76974 12.7355C4.44974 13.0555 4.44974 13.5888 4.77641 13.9088Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_59_10177">
          <Rect
            width="16"
            height="16"
            fill="white"
            transform="matrix(-1 0 0 -1 16 16)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ArrowRight;
