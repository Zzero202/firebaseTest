import React from 'react';
import {Text, View} from 'react-native';
import {NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationScreen from './src/screens/NotificationScreen';
const Stack = createStackNavigator();
NativeModules.ImmersiveMode.enterImmersiveMode();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'NotificationScreen'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="LoginScreen"
          component={NotificationScreen}
          screenOptions={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
