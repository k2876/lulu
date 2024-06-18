import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';
import Ioincons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TestContainer = ({navigation}: any) => {
  return (
    <Container>
      <Button
        title="이동하기"
        onPress={() => navigation?.navigate('STACK2')}></Button>
    </Container>
  );
};

const Tab1Stack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="STACK1"
        component={TestContainer}
        options={{title: '친구'}}
      />
      <Stack.Screen
        name="STACK2"
        component={Container}
        options={{title: '설정'}}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            let size = 24;
            let color = focused ? '#22aaaa' : '#aaa';
            let routeName = route?.name;
            let name = '';

            if (routeName === 'TAB1') {
              name = focused ? 'accessibility' : 'accessibility-outline';
            } else if (routeName === 'TAB2') {
              name = focused ? 'airplane' : 'airplane-outline';
            } else if (routeName === 'TAB3') {
              name = focused ? 'airplane' : 'airplane-outline';
            } else if (routeName === 'TAB4') {
              name = focused ? 'airplane' : 'airplane-outline';
            } else if (routeName === 'TAB5') {
              name = focused ? 'airplane' : 'airplane-outline';
            }
            return <Ioincons name={name} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="TAB1"
          component={Tab1Stack}
          options={{title: '친구1'}}
        />
        <Tab.Screen
          name="TAB2"
          component={Container}
          options={{title: '친구2'}}
        />
        <Tab.Screen
          name="TAB3"
          component={Container}
          options={{title: '친구3'}}
        />
        <Tab.Screen
          name="TAB4"
          component={Container}
          options={{title: '친구4'}}
        />
        <Tab.Screen
          name="TAB5"
          component={Container}
          options={{title: '친구5'}}
        />
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Container}
          options={{title: 'hello'}}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
const Container = styled.SafeAreaView`
  flex: 1;
`;
