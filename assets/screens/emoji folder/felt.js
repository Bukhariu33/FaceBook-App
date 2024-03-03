import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Search from './search';

const emojis = [
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🙏', description: 'Blessed' }
  // Add more emojis and descriptions as needed
];

export default function Felt({ navigation }) {
  
  const EmojiList = ({ item }) => (
    <Pressable style={styles.itemContainer}>
      <Text style={styles.emoji}>{item.emoji}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Search />
      <FlatList
        data={emojis}
        renderItem={EmojiList}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    borderWidth: 1,
    padding: 3,
    backgroundColor: 'white'
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    height: 80 // Adjust height as needed
  },
  emoji: {
    fontSize: 32 // Adjust font size as needed
  }
});
