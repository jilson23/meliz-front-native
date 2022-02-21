import { Text, View, TextInput, StyleSheet, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { dataRefresh } from '../../store/actions';

    

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

function Tasks() {
  const dispatch = useDispatch()
  const dataUser = useSelector(state => state.dataUser);
  const user = useSelector(state => state.user);
  const datarefresh = useSelector(state => state.dataRefresh);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.name} />;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Añade todas las actividades con las que te gustaria ganarte la vida, Trata de que las actividades terminen en infinitivo (cocinar, cantar, legislar etc....)</Text>
        <TextInput
          style={styles.input}
          placeholder="Añade una nueva actividad"
        />
        <Button title="Enviar" onPress={() => alert('Se envio')} />
        <Text>Actividades Actuales</Text>
        <FlatList
          data={dataUser?.activities}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    );
  }

  
  export default Tasks