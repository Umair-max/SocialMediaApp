import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from '../screens/FeedScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import UserPostsScreen from '../screens/UserPostsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Feeed" component={FeedScreen} />
    <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
    <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    <Stack.Screen name="UserPosts" component={UserPostsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
