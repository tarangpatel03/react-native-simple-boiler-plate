import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

import { AppRoute } from '@/navigation/navigation.routes';
import { RootStackParamList } from '@/types/navigation.types';

import { styles } from './styles';

type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  AppRoute.DETAILS
>;

export const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen ID: {route.params.id}</Text>
    </View>
  );
};

export default DetailsScreen;
