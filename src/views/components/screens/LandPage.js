import * as React from 'react';
import { Text,Button, SafeAreaView, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from "../Card"
import Profile from '../Profile';

import SearchBar from '../Search';
import COLORS from '../../../consts/colors';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1}}>
    <Text style={{ fontSize:26, fontWeight: 'bold', paddingLeft:50, paddingTop:20, color: COLORS.blue, paddingBottom:20 }}>TIGER-SOFT EDUCATION</Text>
    <SearchBar />
      <SafeAreaView style={{ flex: 1, flexDirection: 'row', margin: 5, paddingTop:50}}>
      <Image style={{width:120 , height:140 ,margin: 10, borderRadius:20}} source={require('../../../../assets/way.png') }/>
      <Image style={{width:120 , height:140, margin: 10, borderRadius:20}} source={require('../../../../assets/josh.jpg') }/>
      <Image style={{width:120 , height:140, margin: 10, borderRadius:20}} source={require('../../../../assets/light.jpg') }/>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 1}}>
      <Text style={{  fontSize:26, fontWeight: 'bold', paddingLeft:20, paddingTop:20 }}>What we do ?</Text>
      <Text style={{  fontSize:20, fontWeight: 'medium', paddingLeft:20, paddingTop:20 }}>Help you find information in different companies and Learning is now made is.</Text>
      <Button
        title="See list of Companies"
        onPress={() => navigation.navigate('Details')}
      />
      </SafeAreaView>
      <SafeAreaView >
      <Image style={{width:400 , height:280 ,margin: 15, borderRadius:20}} source={require('../../../../assets/final.jpg') }/>
      </SafeAreaView>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>Drawer Profile!</Text>
    </SafeAreaView>
  );
}
function DetailsScreen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'flex-start', alignItems:'flex-start', marginTop:10}}>
      <Card>
     <Image style={{width:30 , height:30 , margin: 10}} source={require('../../../../assets/bus.png') }/>
      <Button
        title="Irembo Lab"
        onPress={() => navigation.navigate('Irembo')}
      />
      </Card>
      <Card>
      <Image style={{width:30 , height:30 , margin: 10}} source={require('../../../../assets/bus.png') }/>
      <Button
        title="Awesomity Lab "
        onPress={() => navigation.navigate('Awesomity')}
      />
      </Card>
      <Card>
      <Image style={{width:30 , height:30 , margin: 10}} source={require('../../../../assets/bus.png') }/>
      <Button
        title="Coursera Lab"
        onPress={() => navigation.navigate('Coursera')}
      />
      </Card>
    
      </SafeAreaView>
    );
  }
  function IremboScreen() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Profile
        name="John Doe"
        age={30}
        nationalID="123456789"
        dob="01/01/1993"
        education="Bachelor's Degree"
        domain="Computer Science"
        contact="555-555-5555"
        email="john.doe@email.com"
        image="https://picsum.photos/100"
        />
      </SafeAreaView>
    );
  }  
  function AwesomityScreen() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Profile
        name="John Doe"
        age={30}
        nationalID="123456789"
        dob="01/01/1993"
        education="Bachelor's Degree"
        domain="Computer Science"
        contact="555-555-5555"
        email="john.doe@email.com"
        image="https://picsum.photos/100"
        />
      </SafeAreaView>
    );
  }  
  function CourseraScreen() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Profile
        name="John Doe"
        age={30}
        nationalID="123456789"
        dob="01/01/1993"
        education="Bachelor's Degree"
        domain="Computer Science"
        contact="555-555-5555"
        email="john.doe@email.com"
        image="https://picsum.photos/100"
        />
      </SafeAreaView>
    );
  } 

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsDrawer = createDrawerNavigator();


function LandPage() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#4a5463"
    barStyle={{ backgroundColor: '#001A40' }}
  >
        <Tab.Screen name="Second"       options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}>
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
              <HomeStack.Screen name="Irembo" component={IremboScreen} />
              <HomeStack.Screen name="Awesomity" component={AwesomityScreen} />
              <HomeStack.Screen name="Coursera" component={CourseraScreen} />

            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="First" options={{
          tabBarLabel: 'account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}>
          {() => (
            <SettingsDrawer.Navigator>
              <SettingsDrawer.Screen name="Profile" component={SettingsScreen} />
              <SettingsDrawer.Screen name="List of Companies" component={DetailsScreen} />
            </SettingsDrawer.Navigator>
          )}
        </Tab.Screen>
    </Tab.Navigator>


    
  
  );
}

export default LandPage;