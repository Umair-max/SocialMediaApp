import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthsContext from '../auths/AuthsContext';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {user, setUser} = useContext(AuthsContext);

  const handleLogin = () => {
    try {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(snapshot => {
          var user = snapshot.user;
          console.log(user);
          setUser(auth().currentUser);
        })
        .catch(error => {
          alert(error);
        });
    } catch (error) {
      console.log('Login giving an error', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground // background image
        source={require('../assets/background.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.signup}>
          <AppTextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <AppTextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <AppButton
            title="Login"
            color="yellow"
            onPress={() => handleLogin()}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={styles.signupText}>New User Signup?</Text>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  signup: {
    alignItems: 'center',
    marginHorizontal: 20,
    top: 128,
  },
  signupText: {
    alignItems: 'center',
    color: colors.white,
    fontSize: 20,
    paddingTop: 10,
  },
});
export default LoginScreen;
