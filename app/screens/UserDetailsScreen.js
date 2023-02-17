import React, {useEffect} from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import List from '../components/List';

import colors from '../config/colors';
import ProfileImageOnly from '../components/ProfileImageOnly';

function UserDetailsScreen({route, navigation}) {
  const user = route.params;
  const userId = route.params.userId;

  const userPosts = () => {
    try {
      firestore()
        .collection('Posts')
        .where('userId', '==', userId)
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
          navigation.navigate('UserPosts', {
            posts: postsdata,
          });
        });
    } catch (error) {
      console.log('error occured in userPosts in UserDetailsScreen', error);
    }
  };

  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <View style={styles.container}>
          <View style={styles.image}>
            <ProfileImageOnly size={180} imageUri={user.profileImage} />
          </View>
          <View style={styles.profile}>
            <View style={styles.bottomContainer}>
              <Text style={styles.text}>{user.name}</Text>
              <Text style={styles.email}>{user.email}</Text>
              <View style={styles.buttons}>
                <List
                  title={`See ${user.name}'s Posts`}
                  iconSource={require('../assets/post.png')}
                  onPress={() => userPosts()}
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
export default UserDetailsScreen;
