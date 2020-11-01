import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Restaurant} from '@app/screens';
import {AppStackRoutesAndParams} from '@app/types';
import {AppRoutes} from '@app/routes';

const Stack = createStackNavigator<AppStackRoutesAndParams>();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={AppRoutes.HOME} component={Home} />
        <Stack.Screen name={AppRoutes.RESTAURANT} component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
