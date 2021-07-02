import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

function Home2({navigation}) {
  const [data, setState] = useState([
    {
      Title: 'Raman',
      Image: require('../../android/p7.jpg'),
      Text: ' I love this great App',
    },
    {
      Title: 'frient',
      Image: require('../../android/p8.jpg'),
      Text: ' I love this great App',
    },
    {
      Title: 'Aarti',
      Image: require('../../android/p9.jpg'),
      Text: ' I love this great App',
    },
    {
      Title: 'Bhola',
      Image: require('../../android/p10.jpg'),
      Text: ' I love this great App',
    },
    {
      Title: 'Saroj',
      Image: require('../../android/p1.jpg'),
      Text: ' I love this great App',
    },
    {
      Title: 'Vishal',
      Image: require('../../android/p2.jpg'),
      Text: ' I love this great App',
    },
    {
      Title: 'Shubham',
      Image: require('../../android/p3.jpg'),
      Text: ' I love this great App',
    },
    {
      Title: 'Muskan',
      Image: require('../../android/p4.jpg'),
      Text: ' I love this great App',
    },
    {
      Title: 'shiva',
      Image: require('../../android/p5.jpg'),
      Text: ' I love this great App',
    },
    {
      Title: 'shivani',
      Image: require('../../android/p6.jpg'),
      Text: ' I love this great App',
    },
    {
      Title: 'Harman',
      Image: require('../../android/p10.jpg'),
      Text: ' I love this great App',
    },
    {
      Title: 'Anmol',
      Image: require('../../android/p7.jpg'),
      Text: ' I love this great App',
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
        horizontal={true}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'column',
              backgroundColor: '#ffffff',
              marginVertical: 15,
            }}>
            <Image source={item.Image} style={styles.Image1} />
            <TouchableOpacity>
              <Text style={styles.Text1}>{item.Title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', backgroundColor: '#ffffff'}}>
            <Image source={item.Image} style={styles.Image} />

            <View style={{flexDirection: 'column'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 10,
                    fontWeight: 'bold',
                    marginTop: 18,
                  }}>
                  {item.Title}
                </Text>

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
    marginTop: 6,
  },
  Image1: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginTop: -1,
    marginLeft: 5,

    marginVertical: 12,
  },
  Text: {
    marginLeft: 8,
  },
  Text1: {
    marginBottom: 5,
    marginTop: -12,
    marginLeft: 15,
  },
});

export default Home2;
