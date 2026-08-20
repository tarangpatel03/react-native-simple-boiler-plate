import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { AppRoute } from '@/navigation/navigation.routes';
import DetailsScreen from '@/screens/Details';
import { RootStackParamList } from '@/types/navigation.types';

import { BottomTabNavigator } from './BottomTabNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoute.BOTTOM_TABS}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={AppRoute.DETAILS} component={DetailsScreen} />
    </Stack.Navigator>
  );
};
