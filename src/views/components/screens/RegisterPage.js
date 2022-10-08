import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Keyboard,
    ScrollView,
    Alert,
  } from 'react-native';
import COLORS from '../../../consts/colors';
import Button from '../../components/button';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage'


function RegisterPage({navigation}) {
        const [inputs, setInputs] = React.useState({
          email: '',
          fullname: '',
          phone: '',
          password: '',
        });
        const [errors, setErrors] = React.useState({});
        const [loading, setLoading] = React.useState(false);
      
        const validate = () => {
          Keyboard.dismiss();
          let isValid = true;
      
          if (!inputs.email) {
            handleError('Please input email', 'email');
            isValid = false;
          } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError('Please input a valid email', 'email');
            isValid = false;
          }
      
          if (!inputs.fullname) {
            handleError('Please input fullname', 'fullname');
            isValid = false;
          }
      
          if (!inputs.phone) {
            handleError('Please input phone number', 'phone');
            isValid = false;
          }
      
          if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
          } else if (inputs.password.length < 5) {
            handleError('Min password length of 5', 'password');
            isValid = false;
          }
      
          if (isValid) {
            register();
          }
        };
      
        const register = () => {
          setLoading(true);
          setTimeout(() => {
            try {
              setLoading(false);
              AsyncStorage.setItem('userData', JSON.stringify(inputs));
              navigation.navigate('LoginPage');
            } catch (error) {
              Alert.alert('Error', 'Something went wrong');
            }
          }, 3000);
        };
      
        const handleOnchange = (text, input) => {
          setInputs(prevState => ({...prevState, [input]: text}));
        };
        const handleError = (error, input) => {
          setErrors(prevState => ({...prevState, [input]: error}));
        };
    return (
        <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
        <Loader visible={loading} />
        <ScrollView
          contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
                  <Text
              onPress={() => navigation.navigate('HomePage')}
              style={{
                color: COLORS.black,
                fontWeight: 'bold',
                textAlign: 'left',
                fontSize: 16,
              }}>
              Home
            </Text>
          <Text style={{color: COLORS.black, fontSize: 30, textAlign: 'center' , fontWeight: 'bold'}}>
            Register
          </Text>
          <View style={{marginVertical: 20}}>
            <Input
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="email-outline"
              label="Email"
              placeholder="Enter your email address"
              error={errors.email}
            />
  
            <Input
              onChangeText={text => handleOnchange(text, 'fullname')}
              onFocus={() => handleError(null, 'fullname')}
              iconName="account-outline"
              label="Full Name"
              placeholder="Enter your full name"
              error={errors.fullname}
            />
  
            <Input
              keyboardType="numeric"
              onChangeText={text => handleOnchange(text, 'phone')}
              onFocus={() => handleError(null, 'phone')}
              iconName="phone-outline"
              label="Phone Number"
              placeholder="Enter your phone no"
              error={errors.phone}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              iconName="lock-outline"
              label="Password"
              placeholder="Enter your password"
              error={errors.password}
              password
            />
            <Button title="Register" onPress={validate} />
            <Text
              onPress={() => navigation.navigate('LoginPage')}
              style={{
                color: COLORS.black,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Already have account ?Login
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>

    );
}

export default RegisterPage;