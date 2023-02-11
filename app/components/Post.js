import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import colors from '../config/colors';
import Screen from './Screen';

function Post({
  profileImage = require('../assets/background.jpg'),
  userName = 'UserName',
  postImage = require('../assets/background.jpg'),
  title = 'Title',
  description = 'Description',
}) {
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.profileImage} source={profileImage} />
        <Text style={styles.name}>{userName}</Text>
      </View>
      <Image style={styles.post} source={postImage} />
      <Image source={require('../assets/heart.png')} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View
        style={{
          backgroundColor: colors.light,
          width: '100%',
          height: 3,
          marginVertical: 20,
        }}></View>
    </View>
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
  },
  name: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: '600',
  },
  post: {
    width: '100%',
    height: 300,
    marginVertical: 10,
    borderRadius: 20,
  },
  icon: {
    width: 35,
    height: 35,
    marginVertical: 10,
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
});
export default Post;
