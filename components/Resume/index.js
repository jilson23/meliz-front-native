import { Text, View, Button } from 'react-native';

function Resume ({ navigation }){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Te quedan tantos dias y te faltan xxx para lograr la meta de xxxxx  {"\n"} {"\n"}</Text>
      <Text>Actividades que más te han generado ingreso {"\n"} {"\n"}</Text>
      <Text>
      <Text>Caminar - 5000,000 {"\n"} 
          </Text>
      <Text>Cocinar  - 100,000</Text>
      </Text>
      <Button title="Añadir un Registro" onPress={() => navigation.navigate('Register')} />
  
    </View>
    )
  }

  export default Resume