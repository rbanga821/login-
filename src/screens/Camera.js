import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

function Camera({navigation}) {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <Image
        source={require('../../android/c.png')}
        style={{
          width: 150,
          height: 150,
          marginTop: 120,
          marginLeft: 120,
        }}
      />
      <Text style={styles.ram}>Instachatty</Text>
      <Text style={styles.ram1}>
        Send texts,photos,videos and audio messages to your also friends.
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#1E90FF',
          height: 45,
          marginTop: 35,
          margin: 70,
          borderRadius: 50,
        }}
        onPress={() => navigation.navigate('SignScreen')}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            textAlign: 'center',
            marginTop: 6,
          }}>
          Log In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderColor: '#1E90FF',
          borderWidth: 1,
          backgroundColor: 'white',
          height: 45,
          marginTop: -48,
          margin: 70,
          borderRadius: 50,
        }}
        onPress={() => navigation.navigate('CreateAccount')}>
        <Text
          style={{
            fontSize: 20,
            color: '#1E90FF',
            textAlign: 'center',
            marginTop: 4,
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ram: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: 30,
  },
  ram1: {
    fontSize: 17,
    textAlign: 'center',
    margin: 20,
    marginTop: 25,
    fontWeight: 'bold',
  },
});

export default Camera;
