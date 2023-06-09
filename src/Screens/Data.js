import React, {useContext} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../Context/AppContext';

const Data = () => {
  const {Data, count} = useContext(AppContext);
  const navigation = useNavigation();

  const abc = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          height: 80,
          margin: 10,
          padding: 10,
          backgroundColor: '#e05a77',
          borderRadius: 15,
          paddingLeft: 25,
        }}
        onPress={() => {
          navigation.navigate('Detail Screen', {id: item.id});
        }}>
        <Text style={{fontSize: 15, color: '#fff'}}>{item.username}</Text>
        <Text style={{fontSize: 15, color: '#fff'}}>{item.phone}</Text>
        <Text style={{fontSize: 15, color: '#fff'}}>{item.email}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{alignSelf: 'center', fontSize: 20, color: '#846575'}}>
        Your Amount is {count}
      </Text>

      <FlatList data={Data} renderItem={abc} keyExtractor={item => item.id} />
    </View>
  );
};

export default Data;
