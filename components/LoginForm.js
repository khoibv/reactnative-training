import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useAppContext} from '../AppContext';

const LoginForm = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMessage] = useState('');
  const {actions: appActions} = useAppContext();

  const login = () => {
    // TODO: Check auth here
    if (name === 'admin' && password === 'admin') {
      // if success, navigate to Home screen
      appActions.login();
    } else {
      const message = 'Your username or password are incorrect';
      setMessage(message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text>Login account</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        defaultValue={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        defaultValue={password}
        onChangeText={(text) => setPassword(text)}
      />

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={login} style={{...styles.button}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.errMessage}>{msg}</Text>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#E93E43',
    marginVertical: 4,
    fontSize: 16,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#4EBC7A',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 16,
  },
  errMessage: {
    color: '#E93E43',
    paddingVertical: 16,
  },
});
