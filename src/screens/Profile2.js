import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

function Profile2() {
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <Image
        source={require('../../android/p10.jpg')}
        style={{
          width: 110,
          height: 110,
          borderRadius: 60,
          marginLeft: 140,
          marginTop: 20,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          marginTop: 20,
        }}>
        Shiva Gangar
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../android/p12.png')}
          style={{
            width: 30,
            height: 30,
            marginLeft: 20,
            marginTop: 42,
          }}
        />
        <TouchableOpacity>
          <Text style={{fontSize: 16, marginTop: 43, marginLeft: 15}}>
            Account Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../android/p13.png')}
            style={{
              width: 18,
              height: 18,
              marginLeft: 160,
              marginTop: 44,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../android/shiva2.png')}
          style={{
            width: 30,
            height: 30,
            marginLeft: 20,
            marginTop: 20,
          }}
        />
        <TouchableOpacity>
          <Text style={{fontSize: 16, marginTop: 21, marginLeft: 15}}>
            Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../android/p13.png')}
            style={{
              width: 18,
              height: 18,
              marginLeft: 215,
              marginTop: 23,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../android/p11.png')}
          style={{
            width: 30,
            height: 30,
            marginLeft: 22,
            marginTop: 20,
          }}
        />
        <TouchableOpacity>
          <Text style={{fontSize: 16, marginTop: 21, marginLeft: 15}}>
            Contact Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../android/p13.png')}
            style={{
              width: 18,
              height: 18,
              marginLeft: 192,
              marginTop: 25,
            }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          width: 330,
          padding: 9,
          marginLeft: 30,
          marginTop: 100,
          borderColor: '#DCDCDC',
        }}>
        <Text style={{fontSize: 15, textAlign: 'center'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Profile2;
