import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const Gps = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="7" stroke="#33363F" stroke-width="2" />
      <Circle
        cx="12"
        cy="12"
        r="2"
        fill="#33363F"
        stroke="#33363F"
        stroke-width="2"
      />
      <Path
        d="M12 5V3"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M19 12L21 12"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M12 21L12 19"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M3 12H5"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};
export default Gps;
