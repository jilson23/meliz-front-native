import React from 'react';
import styles from '../style';
import { SafeAreaView } from 'react-native-safe-area-context';

import LoginForm from '../components/Forms/Login';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerdark}>
      <LoginForm navigation={navigation} />
    </SafeAreaView>
  );
}

export default Login;
