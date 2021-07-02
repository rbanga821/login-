import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Create from './src/screens/Create.js';
import Camera from './src/screens/Camera.js';
import Sign from './src/screens/Sign.js';
import Reset from './src/screens/Reset.js';
import Salider from './src/screens/Salider.js';
import Customdrawer from './src/screens/Customdrawer.js';
import Home2 from './src/screens/Home2.js';
import Profile2 from './src/screens/Profile2.js';
import Friends2 from './src/screens/Friends2.js';
import Search from './src/screens/Search';
import Chat from './src/screens/Chat.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App({navigation}) {
  return (
    <Stack.Navigator initialRouteName="SaliderScreen">
      <Stack.Screen
        name="CreateAccount"
        component={Create}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CameraScreen"
        component={Camera}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignScreen"
        component={Sign}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResetScreen"
        component={Reset}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SaliderScreen"
        component={Salider}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen
        name="Home"
        component={Home2}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require('./android/shiva3.png')}
                style={{
                  width: 30,
                  height: 30,
                  margin: 5,
                  marginTop: 7,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Friends"
        component={Friends2}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require('./android/shiva3.png')}
                style={{
                  width: 30,
                  height: 30,
                  margin: 5,
                  marginTop: 7,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require('./android/shiva3.png')}
                style={{
                  width: 30,
                  height: 30,
                  margin: 5,
                  marginTop: 7,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile2}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require('./android/shiva3.png')}
                style={{
                  width: 30,
                  height: 30,
                  margin: 5,
                  marginTop: 7,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function AppDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <Customdrawer {...props} />}>
        <Drawer.Screen name="App" component={App} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppDrawer;
