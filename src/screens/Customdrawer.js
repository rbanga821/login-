import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

function DrawerContent({...props}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginTop: 200,
        marginLeft: 40,
      }}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={({focused, color, size}) => (
            <Image
              source={require('../../android/shiva.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#e32F45' : '#738c94',
              }}
            />
          )}
          label="Home"
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          icon={({focused, color, size}) => (
            <Image
              source={require('../../android/hello.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#e32F45' : '#738c94',
              }}
            />
          )}
          label="Profile"
          onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
          icon={({focused, color, size}) => (
            <Image
              source={require('../../android/friend.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#e32F45' : '#738c94',
              }}
            />
          )}
          label="friends"
          onPress={() => props.navigation.navigate('Friends')}
        />
        <DrawerItem
          icon={({focused, color, size}) => (
            <Image
              source={require('../../android/search.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#e32F45' : '#738c94',
              }}
            />
          )}
          label="Search"
          onPress={() => props.navigation.navigate('Search')}
        />
        <DrawerItem
          icon={({focused, color, size}) => (
            <Image
              source={require('../../android/logout.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#e32F45' : '#738c94',
              }}
            />
          )}
          label="Logout"
          onPress={() => props.navigation.navigate('SaliderScreen')}
        />
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});

export default DrawerContent;
