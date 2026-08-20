import { AppRoute, TabRoute } from '@/navigation/navigation.routes';

export type TabParamList = {
  [TabRoute.HOME]: undefined;
  [TabRoute.PROFILE]: undefined;
};

export type RootStackParamList = {
  [AppRoute.BOTTOM_TABS]: undefined;
  [AppRoute.DETAILS]: { id: string };
};
