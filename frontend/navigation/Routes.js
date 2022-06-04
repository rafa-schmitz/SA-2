import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages
import Login from '../pages/Login/Login';
import SignUp from '../pages/Sign-up/Sign-up';
import Home from '../pages/Home/Home';
import Game from '../pages/Game/Game';
import Sheet from '../pages/Sheet/Sheet';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Game" component={Game} options={{headerShown: false}}/>
        <Stack.Screen name="Sheet" component={Sheet} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;