import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';

import { AppRoute, TabRoute } from '@/navigation/navigation.routes';
import { RootStackParamList, TabParamList } from '@/types/navigation.types';

import { styles } from './styles';

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, TabRoute.HOME>,
  NativeStackScreenProps<RootStackParamList>
>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('home.title')}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(AppRoute.DETAILS, { id: '123' })}
      />
    </View>
  );
};

export default HomeScreen;
