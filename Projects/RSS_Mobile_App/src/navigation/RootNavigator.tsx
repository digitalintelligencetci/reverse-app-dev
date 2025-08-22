import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import ServiceRequestScreen from '../screens/ServiceRequestScreen';
import EmergencyServiceScreen from '../screens/EmergencyServiceScreen';
import ServiceHistoryScreen from '../screens/ServiceHistoryScreen';
import BookServiceScreen from '../screens/BookServiceScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { RootStackParamList } from '../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ServiceRequest"
          component={ServiceRequestScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmergencyService"
          component={EmergencyServiceScreen}
          options={{ title: 'Emergency Service' }}
        />
        <Stack.Screen
          name="ServiceHistory"
          component={ServiceHistoryScreen}
          options={{ title: 'Service History' }}
        />
        <Stack.Screen
          name="BookService"
          component={BookServiceScreen}
          options={{ title: 'Book Service' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
