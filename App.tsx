import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';
import Ioincons from 'react-native-vector-icons/Ionicons';
import {screens, tabs} from './src/assets/routes';
import Tab from './src/screens/tab';
import {useAsyncStorage} from '@react-native-community/async-storage';

export default function App() {
  return (
    <Container>
      <Tab />
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
`;
