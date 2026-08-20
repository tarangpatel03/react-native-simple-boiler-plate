import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { TabRoute } from '@/navigation/navigation.routes';
import HomeScreen from '@/screens/Home';
import ProfileScreen from '@/screens/Profile';
import { TabParamList } from '@/types/navigation.types';

const Tab = createBottomTabNavigator<TabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TabRoute.HOME} component={HomeScreen} />
      <Tab.Screen name={TabRoute.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};
