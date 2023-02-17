import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import AuthsContext from '../auths/AuthsContext';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import ProfileImage from '../components/ProfileImage';
import colors from '../config/colors';

function SignupScreen({navigation}) {
  const [email, setEmail] = useState(''); // to be store
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState(''); // to be store
  const [imageUri, setImageUri] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // to be store
  const [userUID, setUserUID] = useState('');
  const {user, setUser} = useContext(AuthsContext);
  // ********************************************** Select image from gellery ***************************************
  const selectImage = async () => {
    try {
      const options = {
        mediaType: 'photo',
        quality: 0.1,
      };
      const result = await launchImageLibrary(options);
      if (!result?.didCancel) {
        result.assets.map(({uri}) => {
          // console.log(uri);
          setImageUri(uri);
        });
      }
    } catch (error) {
      console.log('select image giving an error an error', error);
    }
  };

  // ******************************* store EMAIL and PASSWORD in firebase AUTHENTICATION ************************
  const handleSignup = () => {
    try {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          Alert.alert('Done', 'User Acoount created');
          var userUid = auth().currentUser.uid;
          setUserUID(userUid);
          storeImage(userUid);
          setTimeout(() => {
            setUser(auth().currentUser);
          }, 3000);
        })
        .catch(error => {
          alert(error);
        });
      setImageUri(null);
      setUserName('');
      setPassword('');
      setEmail('');
    } catch (error) {
      console.log('signup giving an error', error);
    }
  };

  // **************************************** store profile IMAGE in firebase STORAGE *********************************
  const storeImage = userUid => {
    try {
      var pathToBe = `users ProfileImage`;
      storage()
        .ref(pathToBe)
        .putFile(imageUri)
        .then(snap => {
          storage()
            .ref(pathToBe)
            .getDownloadURL()
            .then(url => {
              console.log('URL', url);
              setImageUrl(url);
              sendingProfileInfo(userUid, url);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log('storaImage giving an error', error);
    }
  };

  // **************************************** store sign in info in fire base firestore ******************************
  const sendingProfileInfo = (userUid, imageUrl_) => {
    try {
      firestore()
        .collection('Users')
        .doc(userUid)
        .set(
          {
            profileImage: imageUrl_,
            email: email,
            name: userName,
          },
          // {merge: true},
        )
        .then(() => {
          console.log('Profile Info has sent!');
        });
    } catch (error) {
      console.log('sending data giving an error', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground // background image
        source={require('../assets/background.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.signup}>
          <ProfileImage
            size={160}
            onPress={() => selectImage()}
            imageUri={imageUri}
          />
          <AppTextInput
            placeholder="User Name"
            value={userName}
            onChangeText={text => setUserName(text)}
          />
          <AppTextInput
            placeholder="Email"
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <AppTextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <AppButton
            title="Signup"
            color="yellow"
            onPress={() => handleSignup()}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.loginText}>Already have an Account?</Text>
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
    bottom: 40,
    marginHorizontal: 20,
  },
  loginText: {
    alignItems: 'center',
    color: colors.white,
    fontSize: 20,
    paddingTop: 10,
  },
});
export default SignupScreen;
