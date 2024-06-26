import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {tabs} from '../assets/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#d3c5ff',
          headerShown: false,
        }}>
        {tabs?.map(item => (
          <Tab.Screen
            key={item?.name}
            name={item?.name}
            component={item?.component}
            options={{
              title: item?.title,
              tabBarIcon: ({focused}) => {
                let iconName = item?.icon;
                let iconColor = focused ? '#b5a0fc' : '#ddd';
                return (
                  <item.Icon
                    style={{paddingTop: 2}}
                    name={iconName}
                    color={iconColor}
                    size={18}
                  />
                );
              },
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
