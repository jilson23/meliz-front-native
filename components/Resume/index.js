import { Text, View, Button } from 'react-native';

function Resume ({ navigation }){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Te faltan xxx cantidad para lograr la meta de xxxxx  {"\n"} {"\n"}</Text>
      <Text>Actividades que más te generan ingreso  {"\n"} {"\n"}</Text>
      <Text>
      <Text>Actividades 1  {"\n"} 
          </Text>
      <Text>Actividades 2</Text>
      </Text>
      <Button title="Añadir un Registro" onPress={() => navigation.navigate('Register')} />
  
    </View>
    )
  }

  export default Resume