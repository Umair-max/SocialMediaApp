import React from 'react';
import {Image} from 'react-native';
import colors from '../config/colors';
import Screen from './Screen';

function Icon({
  iconSize = 50,
  iconSource,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) {
  return (
    <Screen
      style={{
        width: iconSize,
        height: iconSize,
        backgroundColor,
        borderRadius: iconSize / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{
          height: iconSize / 2,
          width: iconSize / 2,
          tintColor: iconColor,
        }}
        source={iconSource}
      />
    </Screen>
  );
}

export default Icon;
