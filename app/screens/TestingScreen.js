import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';

function TestingScreen(props) {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    sending();
  }, []);

  const fetching = () => {
    try {
      firestore()
        .collection('testing')
        .doc('G876c8JcQAVwv6M1v0iY')
        .onSnapshot(snapshot => {
          var data = [];
          var name_ = snapshot._data.name;
          var skill_ = snapshot._data.skill;
          // console.log(name_, skill_);
          data.push({
            name: name_,
            skill: skill_,
          });
          console.log(data);
          setGetData(data);
        });
    } catch (error) {
      console.log('fetching data giving an error', error);
    }
  };

  const sending = () => {
    try {
      firestore()
        .collection('testing')
        .doc('G876c8JcQAVwv6M1v0iY')
        .set(
          {
            name: 'Umair',
          },
          {merge: true},
        )
        .then(() => {
          console.log('User added!');
        });
    } catch (error) {
      console.log('sending data giving an error', error);
    }
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', top: '50%'}}>
      {getData.length > 0 ? (
        <Text style={{fontSize: 22}}>{getData[0].name}</Text>
      ) : null}
    </View>
  );
}

export default TestingScreen;
