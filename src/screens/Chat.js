import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function Chat() {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            backgroundColor: '#1E90FF',
            height: 70,
            marginTop: 10,
            marginHorizontal: 30,
            fontSize: 15,
            color: '#ffffff',
            borderRadius: 10,
            marginLeft: 90,
            width: 250,
            paddingLeft: 10,
            paddingTop: 10,
          }}>
          just did a drive test today with this beauty
        </Text>
        <Image
          source={require('../../android/p10.jpg')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 30,
            marginLeft: -24,
            marginTop: 45,
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}} />
      <Image
        source={require('../../android/c1.jpeg')}
        style={{
          width: 250,
          height: 200,
          borderRadius: 10,
          marginLeft: 90,
          marginTop: 10,
        }}
      />
      <Image
        source={require('../../android/p10.jpg')}
        style={{
          width: 40,
          height: 40,
          borderRadius: 30,
          marginLeft: 345,
          marginTop: -29,
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../android/p9.jpg')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 30,
            marginRight: -24,
            marginTop: 30,
            marginLeft: 8,
          }}
        />
        <Text
          style={{
            backgroundColor: '#DCDCDC',
            height: 40,
            marginTop: 10,
            marginHorizontal: 28,
            fontSize: 15,
            color: 'black',
            borderRadius: 10,
            marginRight: 50,
            width: 170,
            paddingLeft: 10,
            paddingTop: 8,
          }}>
          Wow,that's gorgeous
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            backgroundColor: '#1E90FF',
            height: 70,
            width: 30,
            marginTop: -1,
            marginHorizontal: 30,
            fontSize: 15,
            color: '#ffffff',
            borderRadius: 10,
            marginLeft: 90,
            width: 250,
            paddingLeft: 10,
            paddingTop: 10,
          }}>
          Wow,is that how the fake engine sounds like?
        </Text>
        <Image
          source={require('../../android/p10.jpg')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 30,
            marginLeft: -24,
            marginTop: 55,
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../android/p9.jpg')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 30,
            marginRight: -24,
            marginTop: 15,
            marginLeft: 8,
          }}
        />
        <Text
          style={{
            backgroundColor: '#DCDCDC',
            height: 40,
            marginTop: -5,
            marginHorizontal: 28,
            fontSize: 15,
            color: 'black',
            borderRadius: 10,
            marginRight: 50,
            width: 110,
            paddingLeft: 15,
            paddingTop: 8,
          }}>
          that sound
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            backgroundColor: '#1E90FF',
            height: 40,

            marginTop: -10,
            marginHorizontal: 30,
            fontSize: 15,
            color: '#ffffff',
            borderRadius: 10,
            marginLeft: 190,
            width: 150,
            paddingLeft: 10,
            paddingTop: 10,
          }}>
          yesh,what is car!
        </Text>
        <Image
          source={require('../../android/p10.jpg')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 30,
            marginLeft: -25,
            marginTop: 20,
          }}
        />
      </View>

      <TouchableOpacity>
        <Image
          source={require('../../android/c.png')}
          style={{
            width: 25,
            height: 25,

            marginTop: -5,
            top: 31,
            marginLeft: 5,
          }}
        />
      </TouchableOpacity>
      <TextInput placeholder={'Start typing..... '} style={styles.serach} />

      <TouchableOpacity>
        <Image
          source={require('../../android/c4.png')}
          style={{
            top: -35,
            width: 29,
            height: 29,
            marginLeft: 360,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  serach: {
    backgroundColor: '#F5F5F5',
    marginHorizontal: 33,
    borderRadius: 10,
    padding: 7,
    backgroundColor: '#DCDCDC',
  },
});
export default Chat;
