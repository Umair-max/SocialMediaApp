import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import AppButton from '../components/AppButton';
import InputPostTitle from '../components/PostInputtext';
import Screen from '../components/Screen';
import colors from '../config/colors';

function CreatePostScreen({route}) {
  const {userUID} = route.params;
  const [imageUri, setImageUri] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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

  // **************************************** store profile IMAGE in firebase STORAGE *********************************
  const storeImage = userUid => {
    try {
      var pathToBe = `Post/${userUid}`;
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
            PostImage: imageUrl,
            title: title,
            description: description,
          },
          // {merge: true},
        )
        .then(() => {
          console.log('User added!');
        });
    } catch (error) {
      console.log('sending data giving an error', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.background}>
        <View style={styles.create}>
          <Text style={styles.Text}>Create Post</Text>
          <TouchableWithoutFeedback onPress={() => selectImage()}>
            <View style={styles.post}>
              {imageUri ? (
                <Image style={styles.postImage} source={{uri: imageUri}} />
              ) : (
                <Image
                  style={styles.add}
                  source={require('../assets/add.png')}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
          <InputPostTitle
            title={'Title:'}
            textColor={'white'}
            titleColor={'white'}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <InputPostTitle
            title={'Description:'}
            textColor={'white'}
            titleColor={'white'}
            value={title}
            onChangeText={text => setDescription(text)}
          />
          <AppButton
            color="yellow"
            title={'post'}
            onPress={() => console.log(userUID)}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  create: {
    alignItems: 'center',
    top: 80,
    paddingHorizontal: 20,
  },
  Text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.yellow,
  },
  post: {
    height: 250,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  postImage: {
    height: 250,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  add: {
    width: 70,
    height: 70,
  },
});
export default CreatePostScreen;
