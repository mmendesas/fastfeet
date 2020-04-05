import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Profile from '~/pages/Profile';
import TabOrderRoutes from '~/routes/TabOrder.routes';

const Tab = createBottomTabNavigator();

export default () => (
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
        paddingTop: 5,
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
      component={TabOrderRoutes}
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
