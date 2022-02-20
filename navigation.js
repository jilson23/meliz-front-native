import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import iconsName from './utils/icons';
import { FontAwesome } from '@expo/vector-icons';
import Home from './screens/Home';
import Tasks from './screens/Tasks';
import Goal from './screens/Goal';
import Settings from './screens/Settings'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = iconsName(route.name);

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
    >
        <Tab.Screen name="Inicio" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Tareas" component={Tasks} />
        <Tab.Screen name="Meta" component={Goal} />
        <Tab.Screen name="Configuracion" component={Settings} />
      </Tab.Navigator>
  );
}