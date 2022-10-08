import * as React from 'react';
import { Text,Button, SafeAreaView } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to my Mobo App!</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Details')}
      />
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
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>stack navigation experience</Text>
        <Button
          title=" View More... "
          onPress={() => navigation.push('Details')}
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
              <SettingsDrawer.Screen name="Settings" component={DetailsScreen} />
            </SettingsDrawer.Navigator>
          )}
        </Tab.Screen>
  
    </Tab.Navigator>


    
  
  );
}

export default LandPage;