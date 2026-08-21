import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';

import { appColors } from '@/constants/appColors';
import { useAppSelector } from '@/hooks/useRedux';

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  color?: string;
  style?: StyleProp<TextStyle> | TextStyle[];
}

export const AppText: React.FC<AppTextProps> = ({
  children,
  color,
  style,
  ...props
}) => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  const defaultColor = isDarkMode ? appColors.WHITE : appColors.BLACK;

  return (
    <Text
      style={[styles.defaultText, { color: color ?? defaultColor }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
  },
});
