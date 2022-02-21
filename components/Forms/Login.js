import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView,
} from 'react-native';

import { loginRequest } from '../../services/user';
import { useSelector, useDispatch } from 'react-redux';

import useAuth from '../../hooks/useAuth';
import { dataRefresh } from '../../store/actions';


const LoginForm = ({ navigation }) => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const datarefresh = useSelector(state => state.dataRefresh);
  const { storeData, getData } = useAuth();
  const [form, setForm] = React.useState(null);

  const handleChangeText = (field, text) => {
    setForm({
      ...form,
      [field]: text,
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if(isAuthenticated){
      dispatch(dataRefresh(!datarefresh))
      navigation.navigate('Navigation');
    }
  }, [isAuthenticated]);

  const handleSubmit = async () => {
    try {
      const response = await loginRequest(form);
      if(response.ok){
        const token = await response.json();
        await storeData(token);
      }else{
        alert("Usuario o contraseña incorrectos")
      }
      
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text style={styles.title}>Login Meliz</Text>
      </View>
      <Text style={styles.text}>Email</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={(text) => handleChangeText('email', text)}
        keyboardType="email-address"
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        autoCapitalize="none"
        onChangeText={(text) => handleChangeText('password', text)}
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: '#BB86FC',
    fontSize: 30,
    marginBottom: 40,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
  input: {
    height: 40,
    color: 'white',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: 300,
  },
  button: { backgroundColor: '#BB86FC', padding: 7, marginTop: 10 },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default LoginForm;
