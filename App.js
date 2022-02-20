import * as React from 'react';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store';

import Loguin from './screens/Login'

const Stack = createNativeStackNavigator();



export default function App() {

  return (
    <Provider store={store}>
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Loguin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Navigation"
            component={Navigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}