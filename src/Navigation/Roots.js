import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../Screens/Home';
import Data from '../Screens/Data';
import Details from '../Screens/Details';

const Roots = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Screen">
        <Stack.Screen component={Home} name="Home Screen" />
        <Stack.Screen component={Data} name="Data Screen" />
        <Stack.Screen component={Details} name="Detail Screen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Roots;
