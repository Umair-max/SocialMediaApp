import React from 'react';
import {FlatList} from 'react-native';

import Post from '../components/Post';
import Screen from '../components/Screen';
import colors from '../config/colors';

function UserPostsScreen({route}) {
  const data = route.params.posts;

  return (
    <Screen
      style={{backgroundColor: colors.white, flex: 1, paddingHorizontal: 10}}>
      <FlatList data={data} renderItem={({item}) => <Post item={item} />} />
    </Screen>
  );
}

export default UserPostsScreen;
