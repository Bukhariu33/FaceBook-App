import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';

export default function Status({ storyImgSource, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.storyContainer}>
        <Image source={storyImgSource} style={styles.storyImage} />
      </View>
    </Pressable> 
  );
}

const styles = StyleSheet.create({
  storyContainer: {
    flexDirection: 'row',
  },
  storyImage: {
    width: 100,
    height: 200,
    borderRadius: 20,
    marginRight: 10, // Add margin between images
  },
});
