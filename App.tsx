import '@/locale/i18n';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { setupInterceptors } from '@/api/axios/interceptor';
import { queryClient } from '@/api/query/queryClient';
import { navigationRef } from '@/navigation/navigation.services';
import { RootNavigator } from '@/navigation/RootNavigation';
import { persistor, store } from '@/store/store';

export const App = (): React.JSX.Element => {
  useEffect(() => {
    setupInterceptors();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer ref={navigationRef}>
              <RootNavigator />
            </NavigationContainer>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
