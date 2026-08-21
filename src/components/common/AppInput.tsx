import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { appColors } from '@/constants/appColors';
import { useAppSelector } from '@/hooks/useRedux';

import { AppText } from './AppText';

interface AppInputProps extends TextInputProps {
  variant?: 'fullBackground' | 'outline';
  isPassword?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export const AppInput: React.FC<AppInputProps> = ({
  variant = 'outline',
  isPassword = false,
  containerStyle,
  style,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  const isOutline = variant === 'outline';

  return (
    <View
      style={[
        styles.container,
        isOutline ? styles.outlineContainer : styles.fullBgContainer,
        {
          backgroundColor: isOutline
            ? appColors.TRANSPARENT
            : isDarkMode
            ? appColors.APP_1C1C1E
            : appColors.APP_F2F2F7,
          borderColor: isOutline
            ? isDarkMode
              ? appColors.APP_38383A
              : appColors.APP_E5E5EA
            : appColors.TRANSPARENT,
        },
        containerStyle,
      ]}
    >
      <TextInput
        style={[
          styles.input,
          { color: isDarkMode ? appColors.WHITE : appColors.BLACK },
          style,
        ]}
        placeholderTextColor={
          isDarkMode ? appColors.APP_8E8E93 : appColors.APP_A9A9AC
        }
        secureTextEntry={isPassword ? !showPassword : false}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setShowPassword(prev => !prev)}
          style={styles.iconContainer}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <AppText style={styles.iconText}>
            {showPassword ? 'Hide' : 'Show'}
          </AppText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  outlineContainer: {
    borderWidth: 1,
  },
  fullBgContainer: {
    borderWidth: 0,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 8,
  },
  iconText: {
    fontSize: 14,
    color: appColors.APP_007AFF,
  },
});
