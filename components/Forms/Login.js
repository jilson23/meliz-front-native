import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { loginRequest } from '../../services/api';
import useAuth from '../../hooks/useAuth';

const LoginForm = ({ navigation }) => {
  const { isAuthenticated, storeData } = useAuth();
  
  const [form, setForm] = React.useState(null);

  const handleChangeText = (field, text) => {
    setForm({
      ...form,
      [field]: text,
    });
  };

  React.useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Navigation');
    }
  }, [isAuthenticated]);

  const handleSubmit = async () => {
    try {
      const response = await loginRequest(form);
      if(response.ok){
        const token = await response.json();
        await storeData(token);
        navigation.navigate('Navigation');
      }else{
        alert("Usuario o contraseña incorrectos")
      }
      
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
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
  );
};

const styles = StyleSheet.create({
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
