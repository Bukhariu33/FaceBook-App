import React from 'react';
import { View, TextInput, StyleSheet, ScrollView, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Posts from '../components/Posts';
import Status from '../components/Status';
import { StatusBar } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Ionicons name='person-circle-outline' size={40} color={'red'} style={styles.icon} />
        </Pressable>
        <TextInput style={styles.textInputStyles} placeholder="What's on your mind" onFocus={() => navigation.navigate('CreatePost')} />
        <Pressable onPress={() => navigation.navigate('Messenger')}>
          <Ionicons name='images-outline' size={40} color={'red'} style={styles.icon} />
        </Pressable>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView horizontal>
          <Status storyImgSource={require('../../assets/moose.jpg')} onPress={() => navigation.navigate('CreateStatus')} />
          <Status storyImgSource={require('../../assets/hannah.jpg')} onPress={() => navigation.navigate('CreateStatus')} />
          <Status storyImgSource={require('../../assets/italo.jpg')} onPress={() => navigation.navigate('CreateStatus')} />
          <Status storyImgSource={require('../../assets/woman.jpg')} onPress={() => navigation.navigate('CreateStatus')} />
          <Status storyImgSource={require('../../assets/smile.jpg')} onPress={() => navigation.navigate('CreateStatus')} />
        </ScrollView>
      </View>
      <Posts
        imgSource={require('../../assets/woman.jpg')}
        labelOne={'Sarrah Hadaya'}
        labelTwo={'8h'}
        description={'Hello there i am Sarrah Hadaya and i need your support'}
        onPress={()=>navigation.navigate('Profile')}
      />
      <Posts
        imgSource={require('../../assets/italo.jpg')}
        labelOne={'Italo'}
        labelTwo={'10h'}
        description={'Hello there i am Sarrah Hadaya and i need your support'}
        onPress={()=>navigation.navigate('Profile')}
      />
      <Posts
        imgSource={require('../../assets/moose.jpg')}
        labelOne={'Moose'}
        labelTwo={'10h'}
        description={'Hello there i am Sarrah Hadaya and i need your support'}
        onPress={()=>navigation.navigate('Profile')}
      />
      <StatusBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d7e0',
  },
  textInputStyles: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    flex: 5,
  },
  header: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "white",
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  contentContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});
