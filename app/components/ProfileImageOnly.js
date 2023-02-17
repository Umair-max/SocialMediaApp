import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Icon from './Icon';
import colors from '../config/colors';
import FastImage from 'react-native-fast-image';

function ProfileImageOnly({imageUri, size = 120}) {
  return (
    <View style={styles.imageContainer}>
      <View
        style={[
          styles.profileImageContainer,
          {height: size, width: size, borderRadius: size / 2},
        ]}>
        <FastImage style={styles.profileImage} source={{uri: imageUri}} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imageContainer: {paddingBottom: 100},
  profileImageContainer: {
    backgroundColor: colors.lightPurple,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderColor: colors.lightPurple,
  },
  profileImage: {
    height: '100%',
    width: '100%',
  },
});
export default ProfileImageOnly;
