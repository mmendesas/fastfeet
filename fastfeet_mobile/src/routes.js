import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Details from './pages/TabOrders/Details';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screens = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);

const orderFlowScreens = () => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    initialRouteName="Order"
  >
    <Stack.Screen name="Order" component={Orders} />
    <Stack.Screen
      options={{ title: 'Detalhes da encomenda' }}
      name="Details"
      component={Details}
    />
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
        fontSize: 16,
      },
      style: {
        height: 100,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      },
    }}
  >
    <Tab.Screen
      name="orders"
      component={orderFlowScreens}
      options={{
        title: 'Entregas',
        tabBarIcon: ({ color }) => (
          <Icon name="dehaze" size={40} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="profile"
      component={Profile}
      options={{
        title: 'Meu Perfil',
        tabBarIcon: ({ color }) => (
          <Icon name="person" size={40} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default (signedIn = false) => {
  return signedIn ? authedScreens() : screens();
};
