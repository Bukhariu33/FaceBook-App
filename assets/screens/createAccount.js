import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { setDoc, doc } from "firebase/firestore"; 
import * as ImagePicker from 'expo-image-picker';
import { UriToBlob } from '../components/uriToBlob';
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage, db } from '../services/firebaseConfig';

export default function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('');

  const onSubmit = async () => {
    try {
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        throw new Error('Please fill out all fields');
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      const blobResponse = await UriToBlob(image);
      const filename = `profile_${Date.now()}.jpg`;
      const fileRef = ref(storage, filename);
      await uploadBytes(fileRef, blobResponse);
      const fileResponse = await getDownloadURL(fileRef);
      
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        imageUrl: fileResponse
      };

      await setDoc(doc(db, 'users', email), userData);
      alert('Registration successful');
    } catch (error) {
      alert(error.message || 'An error occurred');
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignItems: "center" }} onPress={pickImage}>
        <Image source={image ? { uri: image } : require('../../assets/icon.png')} style={styles.imageStyle} />
      </TouchableOpacity>
      <TextInput placeholder='Email' style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder='First Name' style={styles.input} onChangeText={setFirstName} />
      <TextInput placeholder='Last Name' style={styles.input} onChangeText={setLastName} />
      <TextInput placeholder='Password' style={styles.input} onChangeText={setPassword} />
      <TextInput placeholder='Confirm Password' style={styles.input} onChangeText={setConfirmPassword} />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});
