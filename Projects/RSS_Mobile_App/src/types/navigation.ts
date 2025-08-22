import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  ServiceRequest: { type: string };
  EmergencyService: undefined;
  ServiceHistory: undefined;
  BookService: undefined;
  Profile: undefined;
  Login: undefined;
  Register: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Requests: undefined;
  Bookings: undefined;
  Messages: undefined;
  Profile: undefined;
};

export type ServiceRequestParamList = {
  ServiceRequest: { type: string };
};

export type EmergencyServiceParamList = {
  EmergencyService: undefined;
};
