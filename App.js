import * as React from 'react';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './store';
import Login from './screens/Login'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>

      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
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

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(254, 47, 115)', //color de los iconos
    background: 'rgb(255, 255, 255)',
    card: 'rgb(33, 0, 73)', //color del tab
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};