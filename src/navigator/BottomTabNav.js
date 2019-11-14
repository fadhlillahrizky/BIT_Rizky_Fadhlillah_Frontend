import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base'

import Home from './../screens/Home'
import Settings from './../screens/Settings'


const BottomTabNav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `checkmark-circle-outline`;
        } else if (routeName === 'Settings') {
          iconName = `settings`;
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={25} color='white' />;
      },
    }),
    
    tabBarOptions: {
      
      activeBackgroundColor: '#99ddcc',
      inactiveBackgroundColor:'#f6f6f6', 
      activeTintColor: 'white',
      inactiveTintColor: '#99ddcc',
      labelStyle: {
        fontSize: 18
      },
    },
  }
);
export default createAppContainer(BottomTabNav);
