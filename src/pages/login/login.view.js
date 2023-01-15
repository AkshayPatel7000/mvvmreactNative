import React from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {styles} from './login.style';
import useLoginViewModel from './login.model';
const LoginView = () => {
  const {email, password, setEmail, setPassword, isLoading, onSubmit} =
    useLoginViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>E-mail</Text>
        <TextInput
          placeholder="email@fleye..."
          value={email}
          onChangeText={setEmail}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="********"
          value={password}
          onChangeText={setPassword}
        />
        {!isLoading ? (
          <Button title="Login" disabled={isLoading} onPress={onSubmit} />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </SafeAreaView>
  );
};

export default LoginView;
