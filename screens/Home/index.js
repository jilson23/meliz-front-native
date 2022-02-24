import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../../components/Register';
import Resume from '../../components/Resume';

const Stack = createNativeStackNavigator();

function Home() {
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
          <Stack.Screen name="Resume" component={Resume} options={{title:'Inicio'}} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>
      </Stack.Navigator>
    );
  }

export default Home