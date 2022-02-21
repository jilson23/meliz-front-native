import { useState } from 'react';
import { Text, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, View, Button, TextInput, StyleSheet } from 'react-native';
// import AddFecha from '../Date';
import SelectTask from '../SelectTask';
import {addProfit} from '../../services/profit'
import { useDispatch, useSelector} from 'react-redux';
import { dataRefresh } from '../../store/actions';

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    header: {
      fontSize: 36,
      marginBottom: 48
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    }
  });
  
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Me gané</Text>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          keyboardType="numeric"
          onChangeText={(num) =>  setForm(num)}
          
        />
        <Text> Por: </Text>
        <SelectTask setIdTask={setIdTask} />
        {/* <AddFecha /> */}
        <Text> {'\n'} </Text>
          <Button title="Enviar" style={styles.btnContainer} onPress={() => handleSubmit()} />

      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>



    );
  }


  export default Register