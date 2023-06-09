import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import AppContext from '../Context/AppContext';

const Details = props => {
  const {Data} = useContext(AppContext);
  const id = props.route.params.id;

  let match = Data.map(i => {
    if (i.id == id) {
      return i;
    }
  });
  let data;
  match.map(i => {
    if (i != undefined) {
      data = i;
    }
  });

  return (
    <View style={{flex: 1}}>
      <Text style={{color: '#643903', fontSize: 22}}>Name : {data.name}</Text>
      <Text style={{color: '#643903', fontSize: 22}}>
        UserName : {data.username}
      </Text>
      <Text style={{color: '#643903', fontSize: 22}}>
        Address : {data.address.city}
      </Text>
      <Text style={{color: '#643903', fontSize: 22}}>Email : {data.email}</Text>
      <Text style={{color: '#643903', fontSize: 22}}>Phone : {data.phone}</Text>
    </View>
  );
};

export default Details;
