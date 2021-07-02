import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Reset() {
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
          Reset Password
        </Text>
        <TextInput style={styles.email} placeholder={'Email '} />
        <TouchableOpacity
          style={{
            backgroundColor: '#1E90FF',
            height: 40,
            marginTop: 20,
            margin: 50,
            borderRadius: 50,
          }}>
          <Text
            style={{
              fontSize: 19,
              color: 'white',
              textAlign: 'center',
              marginTop: 5,
            }}>
            Send Link
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  email: {
    borderColor: '#F5F5F5',
    borderWidth: 1,
    marginHorizontal: 30,
    borderRadius: 30,
    padding: 8,
    paddingLeft: 20,
    margin: 10,
    marginTop: 50,
  },
});
export default Reset;
