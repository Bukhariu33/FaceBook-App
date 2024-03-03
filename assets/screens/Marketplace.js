import React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MarketItem from '../components/MarketItem';


const screenWidth = Dimensions.get('window').width;

export default function Marketplace() {
  return(
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Marketplace</Text>
          <View style={styles.iconsContainer}>
            <AntDesign name="profile" size={24} color="black" style={{marginRight: 10}}/>
            <FontAwesome name="search" size={24} color="black" style={{marginLeft: 10}}/>
          </View>
        </View>
        <View style={styles.bottomIconsContainer}>
          <View style={styles.bottomIcon}>
            <MaterialCommunityIcons name="sale" size={30} color="black" />
            <Text style={styles.bottomIconText}>Sell</Text>
          </View>
          <View style={styles.bottomIcon}>
            <MaterialCommunityIcons name="tag-multiple" size={30} color="black" />
            <Text style={styles.bottomIconText}>Categories</Text>
          </View>      
        </View>
        <ScrollView>
          <MarketItem src={require('../../assets/woman.jpg')} priceOne={'80000 PKR'} priceTwo={'90000 PKR'}/>
          <MarketItem src={require('../../assets/moose.jpg')} priceOne={'80000 PKR'} priceTwo={'90000 PKR'}/>
          <MarketItem src={require('../../assets/woman.jpg')} priceOne={'80000 PKR'} priceTwo={'90000 PKR'}/>
          <MarketItem src={require('../../assets/smile.jpg')} priceOne={'80000 PKR'} priceTwo={'90000 PKR'}/>
        </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerText:{
    fontSize:35,
    fontWeight:'bold'
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    borderBottomWidth: 0.5, // Adjusted border width
    borderColor: '#ccc', // Adjusted border color
  },
  bottomIcon: {
    flexDirection: 'row',
    backgroundColor: '#d1d7e0',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
  bottomIconText: {
    fontSize: 20,
    marginLeft: 10,
  },
  image:{
    width:screenWidth/2,
    height:200
  }
})
