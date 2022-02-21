import { Text, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { useDispatch, useSelector } from 'react-redux';
import { dataRefresh } from '../../store/actions';
import dayjs from 'dayjs';
import { updateUser } from '../../services/user';
import { addGoal } from '../../services/goal';

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:200
    },
    button: { backgroundColor: '#0176ff', padding: 7, marginTop: 10 },
    buttonText: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
    },
  })

function Goal() {
  const dispatch = useDispatch()
  const dataUser = useSelector(state => state.dataUser);
  const user = useSelector(state => state.user);
  const datarefresh = useSelector(state => state.dataRefresh);

  const [ selectedIndex, setSelectedIndex] = useState(0)
  const [ form, setForm] = useState(null)

  const handleChangeText = (field, num) => {
    setForm({
      ...form,
      [field]: num,
    });
  }


  async function handleSubmit(){
    try {
      const response = await addGoal(user._id, form);
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

  async function handleTabPress(index){
    setSelectedIndex(index)
    const actualDay = dayjs()
    let typePeriod
    switch(index){
      case 0:
          typePeriod = "weekly";
      break;
      case 1:
          typePeriod = "biweekly";
      break;
      case 2:
          typePeriod = "monthly";
      break;
    }
    const payload = {
      typePeriod: typePeriod,
      initPeriod: actualDay,
    }
    try {
      const response = await updateUser(user._id, payload);
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
        <Text>Aumenta tu meta si es muy fácil de lograr</Text>
        <Text>disminuye tu meta si es muy dificil de lograr lograr {'\n'} {'\n'}</Text>
        <Text>Me voy a ganar:</Text>
        <TextInput
          style={styles.input}
          placeholder={dataUser?.goals[0].value}
          keyboardType="numeric"
          onChangeText={(num) =>  handleChangeText('value', num)}
        />

        <SegmentedControlTab
          values={["Semanales", "Quincenales", "Mensuales"]}
          selectedIndex={selectedIndex}
          onTabPress={(index) => { handleTabPress(index) }}
        />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
        
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
  }


  export default Goal