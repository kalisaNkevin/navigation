import React from 'react';
import { ImageBackground,Button,Alert,  View } from 'react-native'


function WelcomePage() {
    return (
        <View>
                          <ImageBackground source={require('../../assets/pexels-cátia-matos-1072179.jpg')} style={{width: '100%', height: '100%'}}>

                          <Button
        title="Clik to Register"
        color="white"
        onPress={() => Alert.alert('You already have an account')}
      />
     
     </ImageBackground>

        </View>
    );
}


export default WelcomePage;