import React from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import ProfileImage from '../components/ProfileImage';
import colors from '../config/colors';
import List from '../components/List';

function ProfileScreen(props) {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <View style={styles.container}>
          <View style={styles.image}>
            <ProfileImage size={180} />
          </View>
          <View style={styles.profile}>
            <View style={styles.bottomContainer}>
              <Text style={styles.text}>Umair</Text>
              <Text style={styles.email}>Umair@gmail.com</Text>
              <View style={styles.buttons}>
                <List
                  title="My Posts"
                  iconSource={require('../assets/post.png')}
                />
                <List
                  title="Logout"
                  iconSource={require('../assets/exit.png')}
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
    borderRadius: 25,
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
