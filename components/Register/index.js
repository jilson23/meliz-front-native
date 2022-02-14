import { Text, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, View, Button, TextInput, StyleSheet } from 'react-native';
// import AddFecha from '../Date';
import SelectTask from '../SelectTask';



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
        />
        <Text> Por: </Text>
        <SelectTask />
        {/* <AddFecha /> */}
        <Text> {'\n'} </Text>
          <Button title="Enviar" style={styles.btnContainer} onPress={() => alert('Se envio')} />

      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>



    );
  }


  export default Register