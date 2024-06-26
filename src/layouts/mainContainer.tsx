import {ScrollView, View} from 'react-native';

type Props = JSX.Element;

const scrollViewContainer = (props: Props) => {
  return <ScrollView>{props}</ScrollView>;
};
const viewContainer = (props: Props) => {
  return <ScrollView>{props}</ScrollView>;
};

export default {
  scrollViewContainer,
  viewContainer,
};
