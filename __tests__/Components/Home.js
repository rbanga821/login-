import React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} ></Stack.Screen>
        

      </Stack.Navigator>

    </NavigationContainer>
  )
}
function HomeScreen({navigation}) {
    return (
      <View>
        <Text style={{fontSize:100}}>
          loginScreen
        </Text>
        
      </View>
  )
}


export default Home;