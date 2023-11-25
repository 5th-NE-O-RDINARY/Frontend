import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_49_1289)">
<path d="M18.0054 3.23895C17.4746 2.70811 16.6188 2.70811 16.0879 3.23895L7.08543 12.2414C6.66293 12.6639 6.66293 13.3464 7.08543 13.7689L16.0879 22.7714C16.6188 23.3023 17.4746 23.3023 18.0054 22.7714C18.5363 22.2406 18.5363 21.3848 18.0054 20.8539L10.1621 12.9998L18.0163 5.14561C18.5363 4.62561 18.5363 3.75895 18.0054 3.23895Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_49_1289">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const ArrowDirection = () => {
  return <SvgXml xml={xml} width="2" height="2" />;
};
export default ArrowDirection;
