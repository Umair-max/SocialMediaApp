import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Post from '../components/Post';
import Screen from '../components/Screen';
import colors from '../config/colors';
import firestore from '@react-native-firebase/firestore';

function FeedScreen(props) {
  const [data, setData] = useState('');
  useEffect(() => {
    fetching();
  }, []);

  const fetching = () => {
    try {
      firestore()
        .collection('Posts')
        .onSnapshot(snapshot => {
          var post = [];
          var data = snapshot.docs;
          data.forEach(snap => {
            var eachPost = snap.data();
            post.push({
              title: eachPost.title,
              description: eachPost.description,
              postUrl: eachPost.postImage,
              userId: eachPost.userId,
            });
          });
          setData(post);
        });
    } catch (error) {
      console.log('fetching data giving an error', error);
    }
  };
  return (
    <Screen
      style={{backgroundColor: colors.white, flex: 1, paddingHorizontal: 10}}>
      <FlatList data={data} renderItem={({item}) => <Post item={item} />} />
    </Screen>
  );
}

export default FeedScreen;
