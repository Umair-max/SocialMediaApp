import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Post from '../components/Post';
import Screen from '../components/Screen';
import colors from '../config/colors';

function PostDetailsScreen({route, navigation}) {
  const post = route.params.item;
  const user = route.params;

  return (
    <Screen>
      <View style={{marginHorizontal: 10}}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UserDetails', {
                name: user.name,
                email: user.email,
                profileImage: user.profileImage,
                userId: post.userId,
              })
            }>
            <Text style={styles.text}>User Info...</Text>
          </TouchableOpacity>
        </View>
        <Post
          item={post}
          postUrl={post.postUrl}
          title={post.title}
          description={post.description}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: '30%',
    height: '10%',
    position: 'absolute',
    right: 0,
    marginTop: 17,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.yellow,
  },
});

export default PostDetailsScreen;
