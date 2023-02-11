import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import defaultStyles from '../config/styles';

import Icon from './Icon';

function AppTextInput({iconSource, ...otherProps}) {
  return (
    <View style={[styles.container]}>
      {iconSource && (
        <Icon
          style={styles.icon}
          iconSource={iconSource}
          backgroundColor={defaultStyles.colors.light}
          iconColor={defaultStyles.colors.grey}
          iconSize={40}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.grey}
        style={defaultStyles.Text}
        {...otherProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 30,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    height: 60,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
