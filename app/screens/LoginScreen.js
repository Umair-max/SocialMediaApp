import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <AppButton title="Login" color="yellow" />
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
  },
  imageContainer: {paddingBottom: 40},
  profileImageContainer: {
    backgroundColor: '#EBC7E6',
    height: 120,
    width: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    height: '100%',
    width: '100%',
  },
});
export default LoginScreen;
