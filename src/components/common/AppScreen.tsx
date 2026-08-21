import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

import { appColors } from '@/constants/appColors';
import { useAppSelector } from '@/hooks/useRedux';

interface ScreenProps {
  children: React.ReactNode;
  preset?: 'fixed' | 'scroll';
  safeAreaEdges?: Edge[];
  backgroundColor?: string;
  keyboardAvoiding?: boolean;
  keyboardAvoidingBehavior?: 'padding' | 'height' | 'position';
  keyboardShouldPersistTaps?: 'always' | 'never' | 'handled';
  dismissKeyboardOnTouch?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  scrollViewProps?: Omit<ScrollViewProps, 'contentContainerStyle'>;
  testID?: string;
}

export const AppScreen: React.FC<ScreenProps> = ({
  children,
  preset = 'fixed',
  safeAreaEdges = ['top', 'bottom'],
  backgroundColor,
  keyboardAvoiding = false,
  keyboardAvoidingBehavior = Platform.OS === 'ios' ? 'padding' : undefined,
  keyboardShouldPersistTaps = 'handled',
  dismissKeyboardOnTouch = false,
  contentContainerStyle,
  style,
  scrollViewProps,
  testID,
}) => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  const resolvedBackgroundColor =
    backgroundColor ?? (isDarkMode ? appColors.BLACK : appColors.WHITE);

  const content =
    preset === 'scroll' ? (
      <ScrollView
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        contentContainerStyle={[styles.flexGrow1, contentContainerStyle]}
        showsVerticalScrollIndicator={false}
        {...scrollViewProps}
      >
        {children}
      </ScrollView>
    ) : (
      <View style={[styles.flex1, contentContainerStyle]}>{children}</View>
    );

  const wrappedContent = dismissKeyboardOnTouch ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.flex1}>{content}</View>
    </TouchableWithoutFeedback>
  ) : (
    content
  );

  const finalContent = keyboardAvoiding ? (
    <KeyboardAvoidingView
      style={styles.flex1}
      behavior={keyboardAvoidingBehavior}
    >
      {wrappedContent}
    </KeyboardAvoidingView>
  ) : (
    wrappedContent
  );

  return (
    <SafeAreaView
      testID={testID}
      edges={safeAreaEdges}
      style={[
        styles.flex1,
        { backgroundColor: resolvedBackgroundColor },
        style,
      ]}
    >
      {finalContent}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexGrow1: {
    flexGrow: 1,
  },
});
