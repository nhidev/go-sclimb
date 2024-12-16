export const ROUTE = {
  HOME: '/',
  OPERATION: '/pricing',
  INTERIOR: '/first-visit',
};
export const MEDIA_SIZE = {
  tablet: 768,
  desktop: 1024,
};

export const SURVEY_LIST = [
  {
    icon: 'boring-face.png',
    text: '비효율적인 구매 프로세스',
    nextText: '협력사 퀄리티 컨트롤의 어려움',
  },
  {
    icon: 'anxious-face.png',
    text: '협력사 퀄리티 컨트롤의 어려움',
    nextText: '임직원 사무실 CS 처리',
  },
  {
    icon: 'exploding-face.png',
    text: '임직원 사무실 CS 처리',
    nextText: '사무실 운영 관리 지원',
  },
  {
    icon: 'crying-face.png',
    text: '사무실 운영 관리 지원',
    nextText: '돌발적인 사무실 시설 문제',
  },
  {
    icon: 'amazing-face.png',
    text: '돌발적인 사무실 시설 문제',
    nextText: '비효율적인 구매 프로세스',
  },
];

export const TAB_CONTENT = [
  {
    id: 'month1',
    title: '1월',
  },
  {
    id: 'month2',
    title: '2월',
  },
  {
    id: 'month3',
    title: '3월',
  },
];

export const MEMBERSHIP_OPTIONS = [
  {
    title: 'PRICING TYPE',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'ADULT',
    dataIndex: 'adult',
    key: 'adult',
  },
  {
    title: 'STUDENT',
    dataIndex: 'student',
    key: 'student',
  },
  {
    title: 'KID',
    dataIndex: 'kid',
    key: 'kid',
  },
];

export const DATA_MEMBERSHIP = [
  {
    key: '1',
    type: 'SINGLE TICKET',
    adult: '180.000 VND',
    kid: '140.000 VND',
  },
  {
    key: '2',
    type: 'PUNCH CARDS',
    adult: '1.710.000 VND',
    kid: '1.330.000 VND',
  },
  {
    key: '3',
    type: '1 MONTH',
    adult: '1.440.000 VND',
    student: '800.000 VND',
    kid: '1.120.000 VND',
  },
  {
    key: '4',
    type: '3 MONTHS',
    adult: '3.600.000 VND',
    kid: '2.800.000 VND',
  },
  {
    key: '5',
    type: '6 MONTHS',
    adult: '5.760.000 VND',
    kid: '4.480.000 VND',
  },
  {
    key: '6',
    type: '1 YEAR',
    adult: '10.080.000 VND',
    kid: '7.840.000 VND',
  },
];

export const CLASSES_OPTIONS = [
  {
    title: 'CLASS TYPE',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'ADULT',
    dataIndex: 'adult',
    key: 'adult',
  },
  {
    title: 'STUDENT',
    dataIndex: 'student',
    key: 'student',
  },
  {
    title: 'KID',
    dataIndex: 'kid',
    key: 'kid',
  },
];

export const DATA_CLASSES = [
  {
    key: '1',
    type: '1 MONTH CLASS',
    adult: '2.160.000 VND',
    student: '1.100.000 VND',
    kid: '1.680.000 VND',
  },
  {
    key: '2',
    type: '3 MONTHS',
    adult: '5.400.000 VND',
    kid: '4.200.000 VND',
  },
  {
    key: '3',
    type: '6 MONTHS',
    adult: '8.640.000 VND',
    kid: '6.720.000 VND',
  },
  {
    key: '4',
    type: '1 YEAR',
    adult: '15.120.000 VND',
    kid: '11.760.000 VND',
  },
];
