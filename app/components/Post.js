import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FastImage from 'react-native-fast-image';
import colors from '../config/colors';
import {useNavigation} from '@react-navigation/native';

function Post({item}) {
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const postUrl = item.postUrl;
  const title = item.title;
  const description = item.description;

  useEffect(() => {
    fetchingUsers();
  }, []);
  const fetchingUsers = () => {
    try {
      if (item != null) {
        firestore()
          .collection('Users')
          .doc(item.userId)
          .get()
          .then(snap => {
            var name = snap.data().name;
            var profileImage = snap.data().profileImage;
            var email = snap.data().email;
            setName(name);
            setProfileImage(profileImage);
            setEmail(email);
          });
      }
    } catch (error) {
      console.log('fetchingUsers giving an error in Posts', error);
    }
  };

  return (
    <>
      {item !== null && name !== null && profileImage !== null ? (
        <View style={{height: 520}}>
          <View style={styles.container}>
            <FastImage
              style={styles.profileImage}
              source={{uri: profileImage}}
            />
            <Text style={styles.name}>{name}</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('PostDetails', {
                item: item,
                name: name,
                profileImage: profileImage,
                email: email,
              })
            }>
            <FastImage style={styles.post} source={{uri: postUrl}} />
          </TouchableWithoutFeedback>
          <Image source={require('../assets/heart.png')} style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.breakLine}></View>
        </View>
      ) : (
        <View style={styles.indicator}>
          <ActivityIndicator size={'large'} color={colors.yellow} />
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginVertical: 15,
  },
  name: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: '600',
  },
  post: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    fontSize: 22,
  },
  icon: {
    width: 35,
    height: 35,
    marginTop: 15,
    marginBottom: 4,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    marginHorizontal: 10,
  },
  breakLine: {
    backgroundColor: colors.light,
    width: '100%',
    height: 3,
    marginHorizontal: 10,
    marginTop: 15,
  },
  indicator: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    paddingTop: '50%',
  },
});
export default Post;
