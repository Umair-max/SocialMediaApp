import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import Icon from './Icon';
import colors from '../config/colors';
import FastImage from 'react-native-fast-image';

function ProfileImage({imageUri, size = 120, onPress}) {
  return (
    <View style={styles.imageContainer}>
      <View
        style={[
          styles.profileImageContainer,
          {height: size, width: size, borderRadius: size / 2},
        ]}>
        <FastImage style={styles.profileImage} source={{uri: imageUri}} />
      </View>
      <TouchableOpacity
        style={{bottom: size / 3, left: size / 1.5}}
        onPress={onPress}>
        <Icon
          iconSource={require('../assets/photo-camera.png')}
          backgroundColor={colors.yellow}
          iconColor={colors.black}
          iconSize={size / 3}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  imageContainer: {paddingBottom: 40},
  profileImageContainer: {
    backgroundColor: colors.lightPurple,
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
export default ProfileImage;
