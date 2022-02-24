import { useState } from 'react';
import { Text, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, View, Button, TextInput, StyleSheet } from 'react-native';
// import AddFecha from '../Date';
import SelectTask from '../SelectTask';
import {addProfit} from '../../services/profit'
import { useDispatch, useSelector} from 'react-redux';
import { dataRefresh } from '../../store/actions';
import styles from '../../style';
  
  function Register() {
    const dispatch = useDispatch()
    const datarefresh = useSelector(state => state.dataRefresh);
    const user = useSelector(state => state.user);

    const [idTask, setIdTask] = useState()
    const [ form, setForm] = useState(null)

    async function handleSubmit(){
      const payload = {
        activityId:idTask,
        value:form
      }

      try {
        const response = await addProfit(user._id, payload);
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
          <Text style={styles.title1}>Me gané</Text>
        <TextInput
          style={styles.input}
          placeholder="Cantidad ganada"
          keyboardType="numeric"
          onChangeText={(num) =>  setForm(num)}
          
        />
        <Text style={styles.title1}> Por: </Text>
        <SelectTask setIdTask={setIdTask} />
        {/* <AddFecha /> */}
        <Text> {'\n'} </Text>
          <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
            <Text style={styles.buttontext}>Enviar</Text>
          </TouchableOpacity>

      </View>




    );
  }


  export default Register