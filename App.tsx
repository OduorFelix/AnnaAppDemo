import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from './src/components/Header';
import Welcome from './src/components/Welcome';
import Page from './src/components/Page';
import Home from './src/Home/Home';
import Applications from './src/Home/Applications';
import Details from './src/Home/Details';

const Stack = createStackNavigator();


const App: () => JSX.Element = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Applications" component={Applications} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
