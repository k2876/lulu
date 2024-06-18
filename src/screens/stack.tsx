import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {screens} from '../assets/routes';
import {Platform} from 'react-native';
import {useState} from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Study from './Study';
import singleAsk from './Study/singleAsk';
import multyAsk from './Study/multyAsk';
import emptyAsk from './Study/emptyAsk';
import dialogue from './Study/dialogue';
import detail from './Study/dialogue/detail';
import dictionary from './Study/dictionary';
import review from './Study/review';
import single from './Study/review/single';
import multy from './Study/review/multy';
import empty from './Study/review/empty';
import Translate from './Translate';
import Rangking from './Rangking';
import Setting from './Setting';
import AppSetting from './Setting/appSetting';
import accountSetting from './Setting/accountSetting';
import help from './Setting/help';
import serviceTerms from './Setting/serviceTerms';
import infoTerms from './Setting/infoTerms';

const OS = Platform.OS;

const screenOptions: NativeStackNavigationOptions = {
  animation: 'ios',
  headerBackTitle: '뒤로',
  headerTitleAlign: 'center',
  headerTitle: () => {
    return (
      <HeaderTitle style={{paddingTop: OS === 'android' ? 2 : 0}}>
        {/* <Logo source={} /> */}
      </HeaderTitle>
    );
  },
  headerRight: () => {
    const [isNotice, setNotice] = useState<boolean>(false);

    return (
      <>
        {/* <HeaderRight onPress={() => setNotice(true)}>
          <Icon name="notifications" />
        </HeaderRight>
        <Modal visible={isNotice}>
          <NoticeModal onClose={() => setNotice(false)} />
        </Modal> */}
      </>
    );
  },
};

const HomeStack = createNativeStackNavigator();
const StudyStack = createNativeStackNavigator();
const TranslateStack = createNativeStackNavigator();
const RankingStack = createNativeStackNavigator();
screenOptions;
const SettingStack = createNativeStackNavigator();

const Stack = {
  Home: () => (
    <HomeStack.Navigator screenOptions={{...screenOptions}}>
      <HomeStack.Screen name={screens.HOME.STACK.DEFAULT} component={Home} />
    </HomeStack.Navigator>
  ),
  Study: () => (
    <StudyStack.Navigator screenOptions={screenOptions}>
      <StudyStack.Screen name={screens.STUDY.STACK.DEFAULT} component={Study} />
      <StudyStack.Screen
        name={screens.STUDY.STACK.SINGLE_ASK}
        component={singleAsk}
      />
      <StudyStack.Screen
        name={screens.STUDY.STACK.MULTY_ASK}
        component={multyAsk}
      />
      <StudyStack.Screen
        name={screens.STUDY.STACK.EMPTY_ASK}
        component={emptyAsk}
      />
      <StudyStack.Screen
        name={screens.STUDY.STACK.DIALOGUE}
        component={dialogue}
      />
      <StudyStack.Screen
        name={screens.STUDY.STACK.DIALOGUE_DETAIL}
        component={detail}
      />
      <StudyStack.Screen
        name={screens.STUDY.STACK.DICTIONARY}
        component={dictionary}
      />
      <StudyStack.Screen name={screens.STUDY.STACK.REVIEW} component={review} />
      <StudyStack.Screen
        name={screens.STUDY.STACK.SINGLE_ASK_REVIEW}
        component={single}
      />
      <StudyStack.Screen
        name={screens.STUDY.STACK.MULTY_ASK_REVIEW}
        component={multy}
      />
      <StudyStack.Screen
        name={screens.STUDY.STACK.EMPTY_REVIEW}
        component={empty}
      />
    </StudyStack.Navigator>
  ),
  Translate: () => (
    <TranslateStack.Navigator screenOptions={screenOptions}>
      <TranslateStack.Screen
        name={screens.TRANSLATE.STACK.DEFAULT}
        component={Translate}
      />
    </TranslateStack.Navigator>
  ),
  Ranking: () => (
    <RankingStack.Navigator screenOptions={screenOptions}>
      <RankingStack.Screen
        name={screens.RANKING.STACK.DEFAULT}
        component={Rangking}
      />
    </RankingStack.Navigator>
  ),
  Setting: () => (
    <SettingStack.Navigator screenOptions={screenOptions}>
      <SettingStack.Screen
        name={screens.SETTING.STACK.DEFAULT}
        component={Setting}
      />
      <SettingStack.Screen
        name={screens.SETTING.STACK.APP_SETTING}
        component={AppSetting}
      />
      <SettingStack.Screen
        name={screens.SETTING.STACK.ACCOUNT_SETTING}
        component={accountSetting}
      />
      <SettingStack.Screen name={screens.SETTING.STACK.HELP} component={help} />
      <SettingStack.Screen
        name={screens.SETTING.STACK.SERVICE_TERMS}
        component={serviceTerms}
      />
      <SettingStack.Screen
        name={screens.SETTING.STACK.INFO_TERMS}
        component={infoTerms}
      />
    </SettingStack.Navigator>
  ),
};

const HeaderTitle = styled.View`
  height: 100%;
`;
const Logo = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  aspect-ratio: 322 / 85;
  height: 36px;
`;
const HeaderRight = styled.TouchableOpacity``;
const Icon = styled(Ionicons)`
  font-size: 22px;
`;
