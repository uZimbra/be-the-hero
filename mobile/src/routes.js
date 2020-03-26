import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      
      <AppStack.Navigator ScreenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Incidents" options={{ headerShown: false }} component={Incidents}/>
        <AppStack.Screen name="Detail" options={{ headerShown: false }} component={Detail}/>
      </AppStack.Navigator>
      
    </NavigationContainer>
  );
}