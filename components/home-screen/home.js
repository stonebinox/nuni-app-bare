import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Ionicons} from 'react-native-vector-icons';

import {Search} from '../search-screen/search';
import {colors} from '../common.styles';
import {Profile} from '../profile-screen/profile';

const Tab = createBottomTabNavigator();

export const HomeScreen = ({navigation}) => (
  <Tab.Navigator
    initialRouteName="Scan"
    backBehaviour="firstRoute"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        let selectedColor = focused ? colors.aqua : color;

        if (route.name === 'Scan') {
          iconName = 'scan-outline';
        } else if (route.name === 'Profile') {
          iconName = 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={selectedColor} />;
      },
      tabBarActiveTintColor: colors.aqua,
      tabBarInactiveTintColor: colors.grey3,
      headerShown: false,
      tabBarHideOnKeyboard: true,
    })}>
    <Tab.Screen name="Scan" component={Search} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
