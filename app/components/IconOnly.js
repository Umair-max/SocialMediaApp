import {View, Image} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function IconOnly({
  iconSize = 50,
  iconSource,
  iconColor = colors.grey,
}) {
  return (
    <View>
      <Image
        style={{
          height: iconSize / 2,
          width: iconSize / 2,
          tintColor: iconColor,
        }}
        source={iconSource}
      />
    </View>
  );
}
