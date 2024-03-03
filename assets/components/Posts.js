import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function Posts({ imgSource, labelOne, labelTwo, description, onPress }) {
  const [like, setLike] = useState(true);
  const [showPost, setShowPost] = useState(true); // Initially show the post

  const handleLikePress = () => {
    setLike(!like); // Toggle the like state
  };

  const sharePost = () => {
    alert('Due to server error you can not share post right now')
  };

  const goToWhatsApp = () => {
    alert('Network Error')
  };

  const togglePostVisibility = () => {
    setShowPost(!showPost); // Toggle the post visibility
  };

  return (
    <View style={styles.feedsContainer}>
      {showPost ? ( // Render the post content only if showPost is true
        <>
          <View style={styles.postHeader}>
            <View style={styles.postUser}>
              <Pressable onPress={onPress}>
                <Image source={imgSource} style={styles.profileImage} />
              </Pressable>
              <View style={{ marginLeft: 10 }}>
                <Pressable onPress={onPress}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>{labelOne}</Text>
                  <Text>{labelTwo}</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.postActions}>
              <Entypo name="dots-three-horizontal" size={24} color="black" />
              <TouchableOpacity onPress={togglePostVisibility}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ marginVertical: 5, padding: 5 }}>{description}</Text>
          <Image source={imgSource} style={[styles.postImage, { width: screenWidth}]} />
          <View style={styles.bottomContainer}>
            <Pressable style={styles.iconContainer} onPress={handleLikePress}>
              <AntDesign name={!like ? "like2" : "like1"} size={25} color= {!like ? "black" : "blue"}/>
              <Text style={styles.iconText}>Like</Text>
            </Pressable>
            <Pressable style={styles.iconContainer}>
              <EvilIcons name="comment" size={25} color="black" />
              <Text style={styles.iconText}>Comment</Text>
            </Pressable>
            <Pressable style={styles.iconContainer} onPress={goToWhatsApp}>
              <AntDesign name="message1" size={24} color="black" />
              <Text style={styles.iconText}>Send</Text>
            </Pressable>
            <Pressable style={styles.iconContainer} onPress={sharePost}>
              <Entypo name="share" size={24} color="black" />
              <Text style={styles.iconText}>Share</Text>
            </Pressable>
          </View>
        </>
        
      ) 
      : 
      (<View>
        <TouchableOpacity style={styles.hideContainer} onPress={()=>setShowPost(true)}>
          <Text style={styles.unhideText}> UN-HIDE</Text>
        </TouchableOpacity>
      </View>)}  
    </View>
  );
}

const styles = StyleSheet.create({
  feedsContainer: {
    backgroundColor: "white",
    marginVertical: 5,
    padding: 10
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  postUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  postActions: {
    flexDirection: 'row',
  },
  postImage: {
    height: 200,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  bottomContainer: {
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 15,
    marginLeft: 5,
  },
  unhideText:{
    borderWidth:1,
    width:'25%',
    fontSize:20,
    fontWeight:'bold',
  },
  hideContainer:{
    alignItems:'flex-end',
    justifyContent:"center"
  }
});
