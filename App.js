import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

import auth from '@react-native-firebase/auth';
import AuthNavigator from './app/Navigation/AuthNavigator';
import AppNavigator from './app/Navigation/AppNavigator';
import AuthsContext from './app/auths/AuthsContext';
import {NavigationContainer} from '@react-navigation/native';

function App(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = () => {
    if (auth().currentUser !== null && auth().currentUser !== undefined) {
      console.log('user not null');
      // console.log('l o g ', auth().currentUser);
      setUser(auth().currentUser);
    } else {
      setUser(null);
    }
  };
  return (
    <>
      <AuthsContext.Provider value={{user, setUser}}>
        <NavigationContainer>
          {user !== null ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthsContext.Provider>
    </>
  );
}
export default App;
