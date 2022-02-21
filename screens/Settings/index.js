import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button, Image, TextInput } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { authenticated,  dataRefresh } from '../../store/actions';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import { updateUser } from '../../services/api'

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
        setForm({name:'',email:''})
      }else{
        alert("No se actualizaron los datos")
      }
      
    } catch (error) {
      alert(error.message);
    }
  }



  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <TouchableOpacity
          style={styles.button}
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
          style={styles.icon}
          source={{
            uri: 'https://res.cloudinary.com/dw46hzlfr/image/upload/v1645435195/editar-texto_robpyv.png'
          }}
        />
        </TouchableOpacity>
        <Text>Actualiza tu Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder={dataUser.name}
          value={form?.name}
          onChangeText={(text) => handleChangeText('name', text)}
        />
        <Text>Actualiza tu Email</Text>
        <TextInput
          style={styles.input}
          placeholder={dataUser.email}
          value={form?.email}
          onChangeText={(text) => handleChangeText('email', text)}
        />
        
        
        <Button title="Enviar" style={styles.btnContainer} onPress={() => handleSubmit()} />
        <Text>{"\n"}</Text>
        <Button title="Salir" style={styles.btnContainer} onPress={() => Logout()} />

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    image: {
      height: 100,
      width: 100,
      resizeMode: 'cover',
      borderRadius: 50,
    },
    button: {
      alignItems: "center",
      backgroundColor: "transparent",
      padding: 0
    },
    countContainer: {
      alignItems: "center",
      padding: 0
    },
    icon:{
      height: 25,
      width: 25,
      marginTop:-20,
      left:30,
      marginBottom:30,
      opacity: 0.8
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:200,
    },
  });
  export default Settings