import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {tabs} from '../assets/routes';

const Tab = createMaterialBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {tabs?.map(item => (
          <Tab.Screen
            key={item?.name}
            name={item?.name}
            component={item?.component}
            // options={{
            //   tabBarColor: '#f00',
            //   title: item?.title,
            //   tabBarIcon: ({focused}) => {
            //     let iconName = item?.icon[focused ? 'active' : 'default'];
            //     let iconColor = colors[focused ? 'main' : 'gray'];
            //     return (
            //       <item.Icon
            //         style={{paddingTop: 2}}
            //         name={iconName}
            //         color={iconColor}
            //         size={18}
            //       />
            //     );
            //   },
            // }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
