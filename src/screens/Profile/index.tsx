import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

import { TabRoute } from '@/navigation/navigation.routes';
import { RootStackParamList, TabParamList } from '@/types/navigation.types';

import { styles } from './styles';

type ProfileScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, TabRoute.PROFILE>,
  NativeStackScreenProps<RootStackParamList>
>;

export const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
