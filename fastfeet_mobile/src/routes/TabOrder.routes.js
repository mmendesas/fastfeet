import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Orders from '~/pages/TabOrders/Orders';
import Details from '~/pages/TabOrders/Details';
import ReportProblem from '~/pages/TabOrders/ReportProblem';
import ShowProblem from '~/pages/TabOrders/ShowProblem';
import ConfirmDelivery from '~/pages/TabOrders/ConfirmDelivery';

const Stack = createStackNavigator();

export default () => (
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
      name="Details"
      component={Details}
      options={{ title: 'Detalhes da encomenda' }}
    />
    <Stack.Screen
      name="ReportProblem"
      component={ReportProblem}
      options={{ title: 'Informar problema' }}
    />
    <Stack.Screen
      name="ShowProblem"
      component={ShowProblem}
      options={{ title: 'Visualizar Problemas' }}
    />
    <Stack.Screen
      name="ConfirmDelivery"
      component={ConfirmDelivery}
      options={{ title: 'Confirmar entrega' }}
    />
  </Stack.Navigator>
);
