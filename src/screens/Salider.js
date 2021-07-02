import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const screens = [
  {
    key: 1,
    title: 'Private Messages',
    text: 'Communicate with your friends via private messages.',
    Image: require('../../android/msg.png'),
  },
  {
    key: 2,
    title: 'Send Photos & Videos',
    text: 'Have fun with your friends by sending photos and videos to each other.',
    Image: require('../../android/camera.png'),
  },
  {
    key: 3,
    title: 'Get Notified',
    text: 'Receive notifications when your friends are looking for you',
    Image: require('../../android/bell.png'),
  },
];
function Salider({navigation}) {
  const [home, setHome] = useState(false);

  function renderscrens({item}) {
    return (
      <View style={{flex: 1, backgroundColor: '#1E90FF'}}>
        <Image
          source={item.Image}
          style={{width: 100, height: 100, marginLeft: 145, marginTop: 200}}
        />
        <Text
          style={{
            textAlign: 'center',
            marginTop: 60,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 18,
            marginTop: 20,
          }}>
          {item.text}
        </Text>
      </View>
    );
  }

  if (home) {
    return <Text>Home</Text>;
  } else {
    return (
      <AppIntroSlider
        renderItem={renderscrens}
        data={screens}
        onDone={() => navigation.navigate('CameraScreen')}
      />
    );
  }
}
export default Salider;
