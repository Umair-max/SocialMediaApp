import React, {useState} from 'react';
import {View, FlatList, ImageBackground, Text} from 'react-native';
import Post from '../components/Post';
import Screen from '../components/Screen';
import colors from '../config/colors';

const InitialData = [
  {
    userName: 'Umair',
    title: 'new post',
    description: 'the description for this image',
    profileImage: require('../assets/samplePost.jpg'),
    postImage: require('../assets/samplePost.jpg'),
  },
];
function FeedScreen(props) {
  const [data, setData] = useState(InitialData);
  return (
    <Screen
      style={{backgroundColor: colors.white, flex: 1, paddingHorizontal: 10}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Post
            userName={item.userName}
            title={item.title}
            description={item.description}
            profileImage={item.profileImage}
            postImage={item.postImage}
          />
        )}
      />
    </Screen>
  );
}

export default FeedScreen;
