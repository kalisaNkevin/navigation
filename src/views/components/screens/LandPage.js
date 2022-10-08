import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ImageBackground,StyleSheet, Text, View } from 'react-native'


function LandPage (){

    return (
      <View>
                <ImageBackground source={require('../../../../assets/pexels-cátia-matos-1072179.jpg')} style={{width: '100%', height: '100%'}}>
         
         <View style={styles.container}>
         <Text style={styles.first}>Hello 👋</Text>
         </View>
     </ImageBackground>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 335,
    },
    first: {
        color: 'white',
        textAlign: 'center',
        fontSize: 32,

    } 
})
export default LandPage;