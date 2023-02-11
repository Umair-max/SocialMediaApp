import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignupScreen from './app/screens/SignupScreen';
import CreatePostScreen from './app/screens/CreatePostScreen';

function App(props) {
  const Stack = createStackNavigator();
  return (
    // <SignupScreen />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="createPost" component={CreatePostScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
