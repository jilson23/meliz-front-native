import { Text, View, TextInput, StyleSheet, Button, FlatList } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataRefresh } from '../../store/actions';
import { addActivity } from '../../services/activity'
    

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:200,
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

  const [ form, setForm] = useState(null)

  const handleChangeText = (field, name) => {
    setForm({
      ...form,
      [field]: name,
    });
  }

  async function handleSubmit(){
    try {
      const response = await addActivity(user._id, form);
      if(response.ok){
        dispatch(dataRefresh(!datarefresh));
        setForm(null)
      }else{
        alert("No se actualizaron los datos")
      }
      
    } catch (error) {
      alert(error.message);
    }
  }

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
          onChangeText={(name) =>  handleChangeText('name', name)}
        />
        <Button title="Enviar" onPress={() => handleSubmit()} />
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