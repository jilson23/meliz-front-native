import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import data from '../../data'

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

function Tasks() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Añade todas las actividades con las que te gustaria ganarte la vida, Trata de que las actividades terminen en infinitivo (cocinar, cantar, legislar etc....)</Text>
        <TextInput
          style={styles.input}
          placeholder="Añade una nueva actividad"
        />
        <Button title="Enviar" onPress={() => alert('Se envio')} />
        <Text>Actividades Actuales</Text>
        <Text>Cocinar</Text>
        <Text>programar</Text>
        <Text>Diseñar</Text>
      </View>
    );
  }


  
  export default Tasks