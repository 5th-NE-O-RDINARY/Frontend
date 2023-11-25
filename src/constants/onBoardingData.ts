export type ItemData = {
  key: string;
  title: string;
  content1: string;
  content2: string;
  imgUrl: string;
};

export const OnBoardingData: ItemData[] = [
  {
    key: '1',
    title: '친구와 약속잡고 지각비 정산',
    content1: `우리의 시간은 금이에요!`,
    content2: `친구를 초대해 약속방을 만들고 지각비 정산까지 1분!`,
    imgUrl: require('@/assets/onBoarding1.png'),
  },
  {
    key: '2',
    title: '지각 시간에 따라 지각비 차등 정산',
    content1: `10분과 1시간은 달라요!`,
    content2: `얼마나 지각했는지에 따라 지각비 정산이 가능해요!`,
    imgUrl: require('@/assets/onBoarding2.png'),
  },
  {
    key: '3',
    title: '모임 지각비 정산',
    content1: `한 명 때문에 여러명이 기다린 적 있으신가요?`,
    content2: `모임 구성원 여러명이서도 참여할 수 있어요!`,
    imgUrl: require('@/assets/onBoarding3.png'),
  },
  {
    key: '4',
    title: '대면 중고거래 위약금 설정',
    content1: `대면 중고거래도 사기가 많아졌어요`,
    content2: `만남 시간에 지각비를 걸어놓고 안전하게 만나요!`,
    imgUrl: require('@/assets/onBoarding4.png'),
  },
];
