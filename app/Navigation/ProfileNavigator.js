import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import CurrentUserPostsScreen from '../screens/CurrentUserPostsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Profil" component={ProfileScreen} />
    <Stack.Screen name="CurrentUserPosts" component={CurrentUserPostsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
