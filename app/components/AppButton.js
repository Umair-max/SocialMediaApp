import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Platform} from 'react-native';
import colors from '../config/colors';

function AppButton({title, onPress, color = 'primaryRed'}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 22,
    // fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: colors.black,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
export default AppButton;
