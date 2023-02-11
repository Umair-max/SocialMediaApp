import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

import Screen from './Screen';
import colors from '../config/colors';

function PostInputText({
  title = 'Title',
  textColor,
  titleColor,
  placeholder = 'Write something',
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: colors[titleColor]}]}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.dimWhite}
        multiline={true}
        numberOfLines={2}
        autoCorrect={false}
        autoCapitalize={'none'}
        autoFocus
        style={[styles.text, {color: colors[textColor]}]}
      />
      <View style={styles.line}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    width: '100%',
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    bottom: 15,
  },
  text: {
    fontSize: 22,
    alignSelf: 'flex-start',
    width: '100%',
    height: 40,
    padding: 10,
    borderBottomWidth: 1,
  },
});
export default PostInputText;
