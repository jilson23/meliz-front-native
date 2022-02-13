import { Text, View, TextInput, StyleSheet } from 'react-native';


  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
  function Register() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Me gané</Text>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Text>Haciendo:</Text>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
        />
      </View>
    );
  }


  export default Register