import React from 'react';
import {View, Text} from 'react-native';
const Logout = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff00',
      }}>
      <Text style={{fontSize: 90}}>Logout</Text>
    </View>
  );
};

export default Logout;
