import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screens = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);

const authedScreens = () => (
  <Tab.Navigator
    headerMode="none"
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: '#0aa',
      inactiveTintColor: '#999',
      labelStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Tab.Screen
      name="orders"
      component={Orders}
      options={{
        title: 'Entregas',
        tabBarIcon: ({ color }) => (
          <Icon name="dehaze" size={30} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="profile"
      component={Profile}
      options={{
        title: 'Meu Perfil',
        tabBarIcon: ({ color }) => (
          <Icon name="person" size={30} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default (signedIn = false) => {
  return signedIn ? authedScreens() : screens();
};
