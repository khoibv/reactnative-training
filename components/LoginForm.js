import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMessage] = useState('');

  const login = () => {
    const message = `Your inputs are: { username: ${name}, password: ${password} }`;
    setMessage(message);
  };

  return (
    <View>
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
        <TouchableOpacity onPress={login} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text>{msg}</Text>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
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
});
