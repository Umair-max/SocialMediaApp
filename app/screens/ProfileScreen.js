import React, {useContext, useEffect, useState} from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';

import List from '../components/List';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import colors from '../config/colors';
import AuthsContext from '../auths/AuthsContext';
import ProfileImageOnly from '../components/ProfileImageOnly';

function ProfileScreen({navigation}) {
  const {user, setUser} = useContext(AuthsContext);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    currentUserInfo();
  }, []);
  const currentUserInfo = () => {
    var currentUserUid = auth().currentUser.uid;
    firestore()
      .collection('Users')
      .doc(currentUserUid)
      .get()
      .then(snap => {
        setCurrentUser(snap.data());
      });
  };

  const curentUserPosts = () => {
    try {
      firestore()
        .collection('Posts')
        .where('userId', '==', auth().currentUser.uid)
        .get()
        .then(snapshot => {
          const postsdata = [];
          var posts = snapshot.docs;
          posts.forEach(snap => {
            var eachPost = snap.data();
            postsdata.push({
              title: eachPost.title,
              description: eachPost.description,
              postUrl: eachPost.postImage,
              userId: eachPost.userId,
            });
          });
          navigation.navigate('CurrentUserPosts', {
            posts: postsdata,
          });
        });
    } catch (error) {
      console.log('error occured in currentUserPosts in ProfileScreen', error);
    }
  };

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        setUser(null);
        console.log('User signed out!');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <View style={styles.container}>
          <View style={styles.image}>
            <ProfileImageOnly size={180} imageUri={currentUser.profileImage} />
          </View>
          <View style={styles.profile}>
            <View style={styles.bottomContainer}>
              <Text style={styles.text}>{currentUser.name}</Text>
              <Text style={styles.email}>{currentUser.email}</Text>
              <View style={styles.buttons}>
                <List
                  title="My Posts"
                  iconSource={require('../assets/post.png')}
                  onPress={() => curentUserPosts()}
                />
                <List
                  title="Logout"
                  iconSource={require('../assets/exit.png')}
                  onPress={() => handleLogout()}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    zIndex: 1,
    top: '20%',
    alignSelf: 'center',
  },
  profile: {
    backgroundColor: colors.white,
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  bottomContainer: {
    top: '15%',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: '600',
    paddingBottom: 10,
  },
  email: {
    fontSize: 22,
    fontWeight: '600',
    paddingBottom: 12,
    color: colors.grey,
  },
  buttons: {
    paddingTop: '40%',
    width: '100%',
    paddingHorizontal: 20,
  },
});
export default ProfileScreen;
