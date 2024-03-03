import React from 'react'
import {ScrollView } from 'react-native'
import Posts from '../components/Posts'

  export default function Videos({navigation}) {
  return(
    <ScrollView>
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
      <Posts
        imgSource={require('../../assets/woman.jpg')}
        labelOne={'Sarrah Hadaya'}
        labelTwo={'8h'}
        description={'Hello there i am Sarrah Hadaya and i need your support'}
        onPress={()=>navigation.navigate('Profile')}
      />
    </ScrollView>
  )
}
