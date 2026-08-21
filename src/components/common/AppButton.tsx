import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import { appColors } from '@/constants/appColors';

import { AppText } from './AppText';

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'fullBackground' | 'outline';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  variant = 'fullBackground',
  style,
  textStyle,
  disabled,
  ...props
}) => {
  const isOutline = variant === 'outline';

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        styles.button,
        isOutline ? styles.outlineButton : styles.fullBgButton,
        disabled && styles.disabledButton,
        style,
      ]}
      {...props}
    >
      <AppText
        style={[
          styles.text,
          isOutline ? styles.outlineText : styles.fullBgText,
          textStyle,
        ]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  fullBgButton: {
    backgroundColor: appColors.APP_007AFF,
  },
  outlineButton: {
    backgroundColor: appColors.TRANSPARENT,
    borderWidth: 1,
    borderColor: appColors.APP_007AFF,
  },
  disabledButton: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  fullBgText: {
    color: appColors.WHITE,
  },
  outlineText: {
    color: appColors.APP_007AFF,
  },
});
