import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const PromiseIcon = ({ color }: { color: string }) => {
  return (
    <Svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.359 5.90602C10.5336 6.55791 10.1468 7.22798 9.49489 7.40265C8.87331 7.56921 8.30651 7.89645 7.85148 8.35148C7.39644 8.80651 7.06921 9.37331 6.90265 9.99489C6.72798 10.6468 6.05791 11.0336 5.40602 10.859C4.75413 10.6843 4.36727 10.0142 4.54194 9.36234C4.81953 8.32636 5.36493 7.38171 6.12332 6.62332C6.88171 5.86493 7.82636 5.31953 8.86234 5.04194C9.51423 4.86727 10.1843 5.25413 10.359 5.90602Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.641 5.90602C23.4664 6.55791 23.8532 7.22798 24.5051 7.40265C25.1267 7.56921 25.6935 7.89645 26.1485 8.35148C26.6036 8.80651 26.9308 9.37331 27.0973 9.99489C27.272 10.6468 27.9421 11.0336 28.594 10.859C29.2459 10.6843 29.6327 10.0142 29.4581 9.36234C29.1805 8.32636 28.6351 7.38171 27.8767 6.62332C27.1183 5.86493 26.1736 5.31953 25.1377 5.04194C24.4858 4.86727 23.8157 5.25413 23.641 5.90602Z"
        fill={color}
      />
      <Path
        d="M17 28C22.5417 28 27 23.5417 27 18C27 12.4583 22.5417 8 17 8C11.4583 8 7 12.4583 7 18C7 23.5417 11.4583 28 17 28Z"
        fill={color}
      />
      <Path
        d="M19.7503 19.5835C19.7503 18.1252 18.8753 17.6252 17.1253 17.4169C15.8753 17.2502 15.6253 16.9169 15.6253 16.3335C15.6253 15.7501 16.042 15.3752 16.8753 15.3752C17.6253 15.3752 18.042 15.6252 18.2503 16.2502C18.292 16.3752 18.417 16.4585 18.542 16.4585H19.2086C19.3753 16.4585 19.5003 16.3335 19.5003 16.1669V16.1252C19.3336 15.2085 18.5836 14.5002 17.6253 14.4169V13.4169C17.6253 13.2502 17.5003 13.1252 17.292 13.0835H16.667C16.5003 13.0835 16.3753 13.2085 16.3336 13.4169V14.3752C15.0836 14.5419 14.292 15.3752 14.292 16.4169C14.292 17.7919 15.1253 18.3335 16.8753 18.5419C18.042 18.7502 18.417 19.0002 18.417 19.6669C18.417 20.3336 17.8336 20.7919 17.042 20.7919C15.9586 20.7919 15.5836 20.3335 15.4586 19.7085C15.417 19.5419 15.292 19.4585 15.167 19.4585H14.4586C14.292 19.4585 14.167 19.5835 14.167 19.7502V19.7919C14.3336 20.8335 15.0003 21.5835 16.3753 21.7919V22.7919C16.3753 22.9585 16.5003 23.0835 16.7086 23.1252H17.3336C17.5003 23.1252 17.6253 23.0002 17.667 22.7919V21.7919C18.917 21.5835 19.7503 20.7085 19.7503 19.5835Z"
        fill="white"
      />
      <Path
        d="M14.8758 23.9581C11.6258 22.7915 9.95911 19.1665 11.1675 15.9581C11.7925 14.2081 13.1675 12.8748 14.8758 12.2498C15.0425 12.1665 15.1258 12.0415 15.1258 11.8331V11.2498C15.1258 11.0831 15.0425 10.9581 14.8758 10.9165C14.8341 10.9165 14.7508 10.9165 14.7091 10.9581C10.7508 12.2081 8.58411 16.4165 9.83411 20.3748C10.5841 22.7081 12.3758 24.4998 14.7091 25.2498C14.8758 25.3331 15.0425 25.2498 15.0841 25.0831C15.1258 25.0415 15.1258 24.9998 15.1258 24.9165V24.3331C15.1258 24.2081 15.0008 24.0415 14.8758 23.9581ZM19.2925 10.9581C19.1258 10.8748 18.9591 10.9581 18.9175 11.1248C18.8758 11.1665 18.8758 11.2081 18.8758 11.2915V11.8748C18.8758 12.0415 19.0008 12.2081 19.1258 12.2915C22.3758 13.4581 24.0425 17.0831 22.8341 20.2915C22.2091 22.0415 20.8341 23.3748 19.1258 23.9998C18.9591 24.0831 18.8758 24.2081 18.8758 24.4165V24.9998C18.8758 25.1665 18.9591 25.2915 19.1258 25.3331C19.1675 25.3331 19.2508 25.3331 19.2925 25.2915C23.2508 24.0415 25.4175 19.8331 24.1675 15.8748C23.4175 13.4998 21.5841 11.7081 19.2925 10.9581Z"
        fill="white"
      />
    </Svg>
  );
};

export default PromiseIcon;
