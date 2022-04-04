import React from 'react';
import { Text, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, View, TouchableOpacity, StyleSheet, Button, Image, TextInput } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { authenticated,  dataRefresh } from '../../store/actions';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import { updateUser } from '../../services/user'
import styles from '../../style';

function Settings() {
  const { deleteData } = useAuth();
  const dispatch = useDispatch()

  const dataUser = useSelector(state => state.dataUser);
  const user = useSelector(state => state.user);
  const datarefresh = useSelector(state => state.dataRefresh);

  const [form, setForm] = React.useState(null);

  const handleChangeText = (field, text) => {
    setForm({
      ...form,
      [field]: text,
    });
  };
  
  function Logout(){
    deleteData()
    dispatch(authenticated(false));
  }


  const PickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync();

    const formData = new FormData();

    if (!result.cancelled) {
      formData.append('file', result.file);
      await axios.post(`https://meliz2.herokuapp.com/api/uploads/file/${user._id}`, formData)
      dispatch(dataRefresh(!datarefresh));
    }
  };

  async function handleSubmit(){
    try {
      const response = await updateUser(user._id, form);
      if(response.ok){
        dispatch(dataRefresh(!datarefresh));
        
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} disabled={Platform.OS === "web" ? true : false}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <TouchableOpacity
          style={styles.buttonimage}
          onPress={PickDocument}
        >
          <Image
          style={styles.image}
          source={{
            uri:
            dataUser.profilePhoto === null
                ? 'https://picsum.photos/100/100'
                : dataUser.profilePhoto
          }}
        />
        <Image
          style={styles.iconprofile}
          source={{
            uri: 'https://res.cloudinary.com/dw46hzlfr/image/upload/v1645435195/editar-texto_robpyv.png'
          }}
        />
        </TouchableOpacity>

        <Text style={styles.title1}>Actualiza tu Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder={dataUser.name}
          onChangeText={(text) => handleChangeText('name', text)}
        />
        <Text style={styles.title1}>Actualiza tu Email</Text>
        <TextInput
          style={styles.input}
          placeholder={dataUser.email}
          onChangeText={(text) => handleChangeText('email', text)}
        />
        
        
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.buttontext}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => Logout()}>
          <Text style={styles.buttontext2}>Salir</Text>
        </TouchableOpacity>
        

      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
  }

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: "center",
  //     paddingHorizontal: 10
  //   },
  //   image: {
  //     height: 100,
  //     width: 100,
  //     resizeMode: 'cover',
  //     borderRadius: 50,
  //   },
  //   buttonimage: {
  //     alignItems: "center",
  //     backgroundColor: "transparent",
  //     padding: 0
  //   },
  //   countContainer: {
  //     alignItems: "center",
  //     padding: 0
  //   },
  //   icon:{
  //     height: 25,
  //     width: 25,
  //     marginTop:-20,
  //     left:30,
  //     marginBottom:30,
  //     opacity: 0.8
  //   },
  //   input: {
  //     height: 40,
  //     margin: 12,
  //     borderWidth: 1,
  //     padding: 10,
  //     width:200,
  //   },
  // });
  export default Settings