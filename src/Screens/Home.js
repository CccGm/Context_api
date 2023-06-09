import React, {useContext, useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../Context/AppContext';
import axios from 'axios';

const Home = () => {
  const navigation = useNavigation();
  const [text, setText] = useState(null);
  const {SetData, setCount} = useContext(AppContext);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(data => {
        SetData(data.data);
      })
      .catch(error => console.log(error, 'get error'));
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TextInput
        onChangeText={t => setText(t)}
        value={text}
        placeholder="Enter Number"
        keyboardType="number-pad"
        style={{
          margin: 30,
          justifyContent: 'center',
          padding: 12,
          borderWidth: 1,
          borderRadius: 25,
          paddingLeft: 20,
        }}
      />
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#79359990',
          borderRadius: 15,
          margin: 30,
          padding: 15,
        }}
        onPress={() => {
          setCount(text);
        }}>
        <Text> Data Send</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#79359990',
          borderRadius: 15,
          margin: 30,
          padding: 15,
        }}
        onPress={() => navigation.navigate('Data Screen')}>
        <Text> Goto Data Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
