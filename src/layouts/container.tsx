import {ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

type Props = {
  children: JSX.Element;
};
const colorList = [
  {offset: '0%', color: '#231557', opacity: '1'},
  {offset: '29%', color: '#44107A', opacity: '1'},
  {offset: '67%', color: '#FF1361', opacity: '1'},
  {offset: '100%', color: '#FFF800', opacity: '1'},
];
const scrollViewContainer = ({children}: Props) => {
  return <ScrollContainer>{children}</ScrollContainer>;
};
const viewContainer = ({children}: Props) => {
  return (
    <ViewContainer>
      {/* <LinearGradient></LinearGradient> */}
      {children}
    </ViewContainer>
  );
};

const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-image: linear-gradient(
    #b9d9f1 0%,
    #d3c5ff 27%,
    #dec9ff 37%,
    #dcbce3 54%,
    #f4cecb 75%,
    #e8d4cd 100%
  );
`;
const ViewContainer = styled.View`
  flex: 1;
  background: linear-gradient(
    #b9d9f1 0%,
    #d3c5ff 27%,
    #dec9ff 37%,
    #dcbce3 54%,
    #f4cecb 75%,
    #e8d4cd 100%
  );
`;

export default {
  scrollViewContainer,
  viewContainer,
};
