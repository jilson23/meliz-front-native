import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import iconsName from './utils/icons';
import { FontAwesome } from '@expo/vector-icons';
import Home from './screens/Home';
import Tasks from './screens/Tasks';
import Goal from './screens/Goal';
import Settings from './screens/Settings'
import { getAllDataUser } from './services/user';
import { useDispatch, useSelector } from 'react-redux';
import { dataUser } from './store/actions';

const Tab = createBottomTabNavigator();

export default function Navigation({ navigation }) {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const datarefresh = useSelector(state => state.dataRefresh);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  React.useEffect(async()=>{
    const response = await getAllDataUser(user._id)
    const data = await response.json()
    dispatch(dataUser(data));
  },[datarefresh])

  React.useEffect(() => {
    if(!isAuthenticated){
      navigation.navigate('Login');
    }
  }, [isAuthenticated]);
  
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
        <Tab.Screen name="Actividades" component={Tasks} />
        <Tab.Screen name="Meta" component={Goal} />
        <Tab.Screen name="Configuracion" component={Settings} />
      </Tab.Navigator>
  );
}