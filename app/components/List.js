import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import colors from '../config/colors';
import Icon from './Icon';

function List({
  title = 'Title',
  iconBackground = 'yellow',
  iconColor = 'black',
  iconSize = 50,
  iconSource,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          iconSize={iconSize}
          iconSource={iconSource}
          backgroundColor={colors[iconBackground]}
          iconColor={colors[iconColor]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: colors.lightPurple,
    width: '100%',
    height: 70,
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
});
export default List;
