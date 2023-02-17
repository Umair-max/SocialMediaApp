import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import FeedNavigator from './FeedNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import FeedScreen from '../screens/FeedScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import ProfileNavigator from '../Navigation/ProfileNavigator';

import colors from '../config/colors';
import IconOnly from '../components/IconOnly';
import NewListingButton from '../components/NewListingButton';

function AppNavigator(props) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.yellow,
        tabBarInactiveTintColor: colors.lightPurple,
        tabBarStyle: {position: 'absolute'},
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({focused, color}) => (
            <IconOnly
              iconSource={require('../assets/home.png')}
              backgroundColor={colors.white}
              iconColor={(color = focused ? colors.yellow : colors.lightPurple)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={({navigation}) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate('CreatePost')}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({focused, color}) => (
            <IconOnly
              iconSource={require('../assets/user.png')}
              backgroundColor={colors.white}
              iconColor={(color = focused ? colors.yellow : colors.lightPurple)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
