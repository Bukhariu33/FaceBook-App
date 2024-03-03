import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './assets/screens/Home';
import Videos from './assets/screens/Videos';
import Marketplace from './assets/screens/Marketplace';
import Notifications from './assets/screens/Notifications';
import CreatePost from './assets/components/CreatePost';
import Messenger from './assets/components/Messenger';
import Profile from './assets/components/Profile';
import CreateStatus from './assets/components/CreateStatus';
import Feeling from './assets/screens/emoji folder/feeling';

import Login from './assets/screens/Login';
import CreateAccount from './assets/screens/createAccount';
import Felt from './assets/screens/emoji folder/felt';

const Tab = createMaterialTopTabNavigator();
const emojiTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={Videos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="videocam" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Marketplace}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="basket" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notify"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
          <Stack.Screen name='MainTabs' component={MainTabs}/>
          <Stack.Screen name="CreatePost" component={CreatePost} options={{headerRight:()=>(<Button title='POST' color={'#365df7'} onPress={()=>alert('create your post ASAP')}/>)}} />
          <Stack.Screen name="Messenger" component={Messenger} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="CreateStatus" component={CreateStatus} />
          <Stack.Screen name='feelings' component={Feeling} options={{title:'How are you feeling?'}}/>
          <Stack.Screen name='CreateAccount' component={CreateAccount}/>
          <Stack.Screen name='Felt' component={Felt}/>
        
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
