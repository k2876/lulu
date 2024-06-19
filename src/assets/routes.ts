import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import fontAwesomeIcons from 'react-native-vector-icons/fontAwesome5';
import Stack from '../screens/stack';

export const screens = {
  HOME: {
    TITLE: '홈',
    TAB: 'HOME',
    STACK: {
      DEFAULT: 'HOME_DEFAULT',
    },
  },
  STUDY: {
    TITLE: '학습',
    TAB: 'STUDY',
    STACK: {
      DEFAULT: 'STUDY_DEFAULT',
      SINGLE_ASK: 'SINGLE_ASK',
      MULTY_ASK: 'MULTY_ASK',
      EMPTY_ASK: 'EMPTY_ASK',
      DICTIONARY: 'DICTIONARY',
      DIALOGUE: 'DIALOGUE',
      DIALOGUE_DETAIL: 'DIALOGUE_DETAIL',
      REVIEW: 'REVIEW',
      SINGLE_ASK_REVIEW: 'SINGLE_ASK_REVIEW',
      MULTY_ASK_REVIEW: 'MULTY_ASK_REVIEW',
      EMPTY_REVIEW: 'EMPTY_REVIEW',
    },
  },
  TRANSLATE: {
    TITLE: '번역',
    TAB: 'TRANSLATE',
    STACK: {
      DEFAULT: 'TRANSLATE_DEFAULT',
    },
  },
  RANKING: {
    TITLE: '랭킹',
    TAB: 'RANKING',
    STACK: {
      DEFAULT: 'RANKING_DEFAULT',
    },
  },
  SETTING: {
    TITLE: '설정',
    TAB: 'SETTING',
    STACK: {
      DEFAULT: 'SETTING_DEFAULT',
      APP_SETTING: 'APP_SETTING',
      ACCOUNT_SETTING: 'ACCOUNT_SETTING',
      HELP: 'HELP',
      SERVICE_TERMS: 'SERVICE_TERMS',
      INFO_TERMS: 'INFO_TERMS',
    },
  },
} as const;

export const tabs = [
  {
    name: screens.HOME.TAB,
    title: screens.HOME.TITLE,
    component: Stack.Home,
    Icon: Ionicons,
    icon: {default: 'easel-outline', active: 'easel'},
  },
  {
    name: screens.STUDY.TAB,
    title: screens.STUDY.TITLE,
    component: Stack.Study,
    Icon: Ionicons,
    icon: {default: 'cart-outline', active: 'cart'},
  },
  {
    name: screens.TRANSLATE.TAB,
    title: screens.TRANSLATE.TITLE,
    component: Stack.Translate,
    Icon: MaterialIcons,
    icon: {default: 'reader-outline', active: 'reader'},
  },
  {
    name: screens.RANKING.TAB,
    title: screens.RANKING.TITLE,
    component: Stack.Ranking,
    Icon: fontAwesomeIcons,
    icon: {default: 'logo-electron', active: 'logo-electron'},
  },
  {
    name: screens.SETTING.TAB,
    title: screens.SETTING.TITLE,
    component: Stack.Setting,
    Icon: Ionicons,
    icon: {default: 'settings-outline', active: 'settings'},
  },
] as const;
