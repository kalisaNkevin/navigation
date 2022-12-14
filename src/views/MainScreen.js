import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../views/components/screens/HomeScreen'
import RegisterPage from '../views/components/screens/RegisterPage'
import LoginPage from '../views/components/screens/LoginPage'
import LandPage from '../views/components/screens/LandPage'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name='HomePage' component={HomePage} />
                <Stack.Screen name='RegisterPage' component={RegisterPage} />
                <Stack.Screen name='LoginPage' component={LoginPage} />
                <Stack.Screen name='LandPage' component={LandPage} />


</Stack.Navigator>


        </NavigationContainer>


    );
};