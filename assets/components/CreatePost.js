import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, Dimensions } from 'react-native';
import Filter from './Filter';
import AddFeatures from './AddFeatures';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes } from "firebase/storage";
import { UriToBlob } from './uriToBlob';
import { storage } from '../services/firebaseConfig';

const windowWidth = Dimensions.get('window').width;

export default function CreatePost({ navigation}) {
  const [image, setImage] = useState(null);
  const [textInputValue, setTextInputValue] = useState('');
 

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    UriToBlob(image).then((blobresponse)=>{
      const filename = 'mypic.jpg'
      const fileRef = ref(storage, filename)
      uploadBytes(fileRef, blobresponse).
      then((uploadResponse)=>{alert('Uploaded')})

    }).catch((blobError)=>{
      alert(blobError.message)
    })
  };
  

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'white', flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
          <Image source={require("../../assets/smile.jpg")} style={{ width: 50, height: 60, borderRadius: 20, marginTop: 10 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Muhammad Uzair</Text> 
            <View style={{ flexDirection: 'row' }}>
              <Filter name='earth-outline' text={'Public'} />
              <Filter name='add-outline' text={'Album'} />
              <Filter name='camera-outline' text={'Off'} />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', borderWidth: 1 }}>
          <TextInput
            placeholder="What's on your mind?"
            value={textInputValue}
            onChangeText={setTextInputValue}
          />
        </View>
        {image && (
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Image source={{ uri: image }} style={{ width: windowWidth, height: 200, resizeMode: 'contain' }} />
          </View>
        )}
      </View>

      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <AddFeatures name={'images-outline'} color={'green'} label={'Photo/Videos'} onPress={pickImage} />
        <AddFeatures name={'person-sharp'} color={'blue'} label={'Send To Firebase'} onPress={uploadImage}/>
        <AddFeatures name={'happy-outline'} color={'orange'} label={'Feeling/Activity'} onPress={() => navigation.navigate('feelings')} />
        <AddFeatures name={'location-sharp'} color={'red'} label={'Check In'} />
        <AddFeatures name={'videocam'} color={'red'} label={'Live Video'} />
        <AddFeatures name={'color-palette-outline'} color={'green'} label={'Background Colors'} />
        <AddFeatures name={'camera'} color={'blue'} label={'Camera'} />
        <AddFeatures name={'gift'} color={'green'} label={'GIF'} />
        <AddFeatures name={'flag'} color={'blue'} label={'Live event'} />
        <AddFeatures name={'musical-notes'} color={'red'} label={'Music'} />
      </ScrollView>
    </View>
  );
}
