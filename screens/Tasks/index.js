import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskList from '../../components/tasklist'
import Taskshome from '../../components/taskhome';

const Stack = createNativeStackNavigator();

function Tasks() {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{ 
          headerStyle: {
            backgroundColor: '#210049',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Taskhome" component={ Taskshome } options={{title:'Actividades'}} />
        <Stack.Screen name="TaskList" component={ TaskList } options={{title:'Actividades actuales'}} />
      </Stack.Group>
    </Stack.Navigator>
  );
  }

  
  export default Tasks