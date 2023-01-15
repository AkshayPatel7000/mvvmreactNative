import {useState} from 'react';
import {Alert} from 'react-native';
import IconModule from '../../../IconModule';
import {getlogin, login} from '../../repositories/auth.repository';
import {setToken} from 'LocalStorage';

const useLoginViewModel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [Toggle, setToggle] = useState(false);

  const onSubmit = async () => {
    // console.log({email, password});
    try {
      setIsLoading(true);
      const response = await getlogin({id: email});
      setSubmit(response);
      //TODO: navigate to home
    } catch (e) {
      console.log('error-> useLoginViewModel', e);
      Alert.alert('Oops!', 'Something went wrong');
    } finally {
      setIsLoading(false);
      console.log('finally');
    }
  };
  const setSubmit = async response => {
    // await IconModule.setIconOne(!Toggle);
    await setToken(response);
    setToggle(!Toggle);
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
