import {useState} from 'react';
import {Alert} from 'react-native';
import {getlogin, login} from '../../repositories/auth.repository';

const useLoginViewModel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    console.log({email, password});
    try {
      setIsLoading(true);
      const response = await getlogin({id: 1});

      setSubmit(response);
      //TODO: navigate to home
    } catch (e) {
      console.log(e);
      Alert.alert('Oops!', 'Something went wrong');
    } finally {
      setIsLoading(false);
      console.log('finally');
    }
  };
  const setSubmit = response => {
    console.log('->', response);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    onSubmit,
  };
};

export default useLoginViewModel;
