import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

function Sign({navigation}) {
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <View>
        <Text
          style={{
            textAlign: 'left',
            marginTop: 60,
            marginBottom: 10,
            marginLeft: 25,
            fontSize: 30,
            fontWeight: 'bold',
            color: '#1E90FF',
          }}>
          Sign In
        </Text>
        <TextInput placeholder={'Email '} style={styles.sign1} />

        <View>
          <TextInput
            style={styles.sign1}
            secureTextEntry={true}
            keyboardType="numeric"
            placeholder={'Password'}
          />
          <TouchableOpacity onPress={() => navigation.navigate('ResetScreen')}>
            <Text
              style={{
                textAlign: 'right',
                marginRight: 30,
                color: '#1E90FF',
                fontWeight: 'bold',
              }}>
              Forget Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#1E90FF',
              height: 45,
              marginTop: 35,
              margin: 50,
              borderRadius: 50,
            }}>
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
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>OR</Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#6A5ACD',
              height: 40,
              marginTop: 35,
              margin: 50,
              borderRadius: 50,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
                marginTop: 7,
              }}>
              Login With Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#000000',
              marginHorizontal: 50,
              height: 40,
              marginTop: -35,
              borderRadius: 50,
            }}>
            <Image
              style={styles.pic}
              source={require('../../android/apple.png')}
            />
            <Text
              style={{
                marginTop: -17,
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
              }}>
              Sign in With Apple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: '#1E90FF',
                marginTop: 20,
                fontWeight: 'bold',
                fontSize: 15,
                textAlign: 'center',
              }}>
              Login with phone number
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  sign1: {
    borderWidth: 1,
    marginHorizontal: 30,
    borderRadius: 30,
    padding: 8,
    paddingLeft: 20,
    margin: 10,
    borderColor: '#F5F5F5',
  },
  pic: {
    width: 15,
    height: 15,
    marginLeft: 65,
    marginTop: 10,
  },
});
export default Sign;
