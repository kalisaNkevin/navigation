import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ImageBackground,Button,Alert,StyleSheet, Text, View } from 'react-native'




function HomePage({navigation}) {
    return (
    <View>
        <ImageBackground source={require('../../../../assets/pexels-cátia-matos-1072179.jpg')} style={{width: '100%', height: '100%'}}>
         
            <View style={styles.container}>
            <Text style={styles.first}>Hello 👋</Text>
               <View style={styles.mode}>
               <Button
                    title="Tap Get Started"
                    color="white"
                    onPress={() => navigation.navigate('RegisterPage')} /> 
               </View>
            </View>
        </ImageBackground>

    
    </View>     
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 315,
    },
    first: {
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
    },
    mode: {
        top: 10,
    }
})
export default HomePage;