import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataRefresh } from '../../store/actions';
import { addActivity } from '../../services/activity'
import styles from '../../style';

function Taskshome({ navigation }) {
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

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       

        <Text style={styles.title1}>Quiero ganar dinero por:</Text>
        <Text style={styles.text}>Añade todas las actividades con las que te gustaria ganarte la vida, Trata de que las actividades terminen en infinitivo (cocinar, cantar, legislar etc....)</Text>
        <TextInput
          style={styles.input}
          placeholder="Añade una nueva actividad"
          onChangeText={(name) =>  handleChangeText('name', name)}
        />
         
       
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.buttontext}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('TaskList')}>
          <Text style={styles.buttontext2}>Ver Actividades</Text>
        </TouchableOpacity>
        

      </View>
    );
  }

  
  export default Taskshome