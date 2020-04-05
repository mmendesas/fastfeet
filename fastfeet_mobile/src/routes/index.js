import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import AuthedRoutes from '~/routes/Main.routes';

const Stack = createStackNavigator();

export default (signedIn = false) => {
  return (
    <Stack.Navigator headerMode="none">
      {signedIn ? (
        <Stack.Screen name="Authed" component={AuthedRoutes} />
      ) : (
        <Stack.Screen name="SignIn" component={SignIn} />
      )}
    </Stack.Navigator>
  );
};
