import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Friends2() {
  const [data, setState] = useState([
    {
      Title: 'Raman',
      Image: require('../../android/p7.jpg'),
      Text: 'Accept',
    },
    {
      Title: 'frientastics',
      Image: require('../../android/p8.jpg'),
      Text: 'Accept',
    },

    {
      Title: 'Aarti Rajput',
      Image: require('../../android/p9.jpg'),
      Text: 'Accept',
    },
    {
      Title: 'Bhola',
      Image: require('../../android/p10.jpg'),
      Text: 'Unfriend',
    },
    {
      Title: 'Saroj khan',
      Image: require('../../android/p1.jpg'),
      Text: 'Unfriend',
    },
    {
      Title: 'Vishal',
      Image: require('../../android/p2.jpg'),
      Text: 'Unfriend',
    },
    {
      Title: 'Shubham Rana',
      Image: require('../../android/p3.jpg'),
      Text: 'Unfriend',
    },
    {
      Title: 'Muskan',
      Image: require('../../android/p4.jpg'),
      Text: 'Unfriend',
    },
    {
      Title: 'shiva',
      Image: require('../../android/p5.jpg'),
      Text: 'Accept',
    },

    {
      Title: 'shivani',
      Image: require('../../android/p6.jpg'),
      Text: 'Accept',
    },
    {
      Title: 'Harman deep',
      Image: require('../../android/p10.jpg'),
      Text: 'Accept',
    },
    {
      Title: 'Anmol',
      Image: require('../../android/p7.jpg'),
      Text: 'Accept',
    },
  ]);
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#f2f2f2',
          marginHorizontal: 10,
          borderRadius: 15,
        }}>
        <Image
          source={require('../../android/s1.png')}
          style={{
            width: 15,
            height: 15,
            marginLeft: 8,
            marginTop: 13,
          }}
        />
        <TextInput
          placeholder={'Search for friends'}
          placeholderTextColor="#A9A9A9"
          style={{
            borderWidth: -1,
            borderColor: '#F5F5F5',
            height: 40,
            width: 1000,
            marginHorizontal: -1,
          }}
        />
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', backgroundColor: '#ffffff'}}>
            <Image source={item.Image} style={styles.Image} />

            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 10,
                  fontWeight: 'bold',
                  marginTop: 18,
                }}>
                {item.Title}
              </Text>
              <TouchableOpacity>
                <Text style={styles.Text}>{item.Text}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Image: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 5,
    marginTop: 10,
  },
  Text: {
    marginLeft: 240,
    backgroundColor: '#f2f2f2',
    width: 80,
    paddingLeft: 14,
    marginTop: -23,
    height: 30,
    paddingTop: 5,
    borderRadius: 15,
    fontWeight: 'bold',
  },
});

export default Friends2;
