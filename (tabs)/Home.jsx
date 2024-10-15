import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Home = () => {
  return (
    <View>
      <Text style={styles.txt}>Home</Text>
    </View>
  )
}
export default Home;
const styles = StyleSheet.create({
    txt:{
        backgroundColor:"#000",
        color:"#fff"
    }
})
