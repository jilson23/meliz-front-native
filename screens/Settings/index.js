import { useState, useEffect } from 'react';
import { Text, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, View, TouchableOpacity, TextInput, Pressable } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { authenticated, dataRefresh } from '../../store/actions';
import { updateUser } from '../../services/user'
import styles from '../../style';

function Settings() {
  const { deleteData } = useAuth();
  const dispatch = useDispatch()

  const dataUser = useSelector(state => state.dataUser);
  const user = useSelector(state => state.user);
  const datarefresh = useSelector(state => state.dataRefresh);

  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    setForm({
      name: dataUser.name,
      email: dataUser.email
    })
  }, [])

  useEffect(() => {
    reviewForm()
  }, [form])

  function reviewForm() {
    if (form.name === '' || form.email === '') {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
    if (form.name === dataUser.name && form.email === dataUser.email) {
      setDisabled(true)
    }
  }

  function handleChangeText(field, text) {
    setForm({
      ...form,
      [field]: text,
    });
  };

  function Logout() {
    deleteData()
    dispatch(authenticated(false));
  }

  async function handleSubmit() {
    try {
      const response = await updateUser(user._id, form);
      if (response.ok) {
        dispatch(dataRefresh(!datarefresh));

      } else {
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


          <Text style={styles.title1}>Actualizar Nombre de Usuario</Text>
          <TextInput
            style={styles.input}
            placeholder={dataUser.name}
            value={form.name}
            onChangeText={(text) => handleChangeText('name', text)}
          />
          <Text style={styles.title1}>Actualizar Email</Text>
          <TextInput
            style={styles.input}
            placeholder={dataUser.email}
            value={form.email}
            onChangeText={(text) => handleChangeText('email', text)}
          />

          <Pressable onPress={() => handleSubmit()} style={styles.button} disabled={disabled} >
            <Text style={styles.buttontext}>Actualizar</Text>
          </Pressable>

          <TouchableOpacity style={styles.button2} onPress={() => Logout()}>
            <Text style={styles.buttontext2}>Salir</Text>
          </TouchableOpacity>


        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
  );
}
export default Settings