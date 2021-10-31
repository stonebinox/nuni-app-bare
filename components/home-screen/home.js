import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Scan } from '../scan-screen/scan';
import { colors } from '../common.styles';
import { Profile } from '../profile-screen/profile';

const Tab = createBottomTabNavigator();

export const HomeScreen = ({ navigation }) => (
  <Tab.Navigator
    initialRouteName="Scan"
    backBehaviour="firstRoute"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let selectedColor = focused ? colors.aqua : color;

        if (route.name === 'Scan') {
          iconName = 'scan-outline';
        } else if (route.name === 'Profile') {
          iconName = 'person-outline';
        } else if (route.name === 'Search') {
          iconName = 'search-outline';
        }

        return <Icon name={iconName} size={size} color={selectedColor} />;
      },
      tabBarActiveTintColor: colors.aqua,
      tabBarInactiveTintColor: colors.grey3,
      headerShown: false,
      tabBarHideOnKeyboard: true,
    })}>
    <Tab.Screen name="Search" component={Scan} />
    <Tab.Screen name="Scan" component={Scan} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
