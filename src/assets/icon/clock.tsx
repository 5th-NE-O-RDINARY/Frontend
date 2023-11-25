import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const Clock = () => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Circle
        cx="10.9997"
        cy="11.0002"
        r="6.41667"
        stroke="#5C5B7C"
        stroke-width="2"
      />
      <Path
        d="M5.46766 2.87494C4.84596 3.04152 4.27906 3.36882 3.82394 3.82394C3.36882 4.27906 3.04152 4.84596 2.87494 5.46766"
        stroke="#5C5B7C"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M16.5323 2.87494C17.154 3.04152 17.7209 3.36882 18.1761 3.82394C18.6312 4.27906 18.9585 4.84596 19.1251 5.46766"
        stroke="#5C5B7C"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M11 7.3335V10.7502C11 10.8882 11.1119 11.0002 11.25 11.0002H13.75"
        stroke="#5C5B7C"
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};
export default Clock;
