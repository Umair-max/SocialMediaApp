import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';

import colors from '../config/colors';
import IconOnly from '../components/IconOnly';

export default function NewListingButton({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <IconOnly
          iconSource={require('../assets/plus.png')}
          iconColor={colors.white}
          iconSize={70}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 10,
    bottom: 20,
  },
});
