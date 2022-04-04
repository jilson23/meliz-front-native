import {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView,
} from 'react-native';

import styles from '../../style';
import { loginRequest } from '../../services/user';
import { useSelector, useDispatch } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import { dataRefresh } from '../../store/actions';


const LoginForm = ({ navigation }) => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const datarefresh = useSelector(state => state.dataRefresh);
  const { storeData, getData } = useAuth();
  const [form, setForm] = useState(null);

  const handleChangeText = (field, text) => {
    setForm({
      ...form,
      [field]: text,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
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
      style={styles.container2}
    >
      <TouchableWithoutFeedback 
        onPress={Keyboard.dismiss}
        disabled={Platform.OS === "web" ? true : false}
      >

        <View style={styles.containerdark}>
          <Text style={styles.title1dark}>Meliz</Text>
          <Text style={styles.title2dark}>Tu Meta Feliz</Text>
          <Text style={styles.textdark}>Email</Text>
          <TextInput
            autoCapitalize="none"
            style={styles.inputdark}
            onChangeText={(text) => handleChangeText('email', text)}
            keyboardType="email-address"
          />
          <Text style={styles.textdark}>Password</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={(text) => handleChangeText('password', text)}
            style={styles.inputdark}
            secureTextEntry
          />
          <TouchableOpacity style={styles.buttondark} onPress={handleSubmit}>
            <Text style={styles.buttontextdark}>Login</Text>
          </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
