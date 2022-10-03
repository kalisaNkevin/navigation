import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View ,ImageBackground , Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator()
const DrawerStack = createDrawerNavigator()
const BottomStack = createBottomTabNavigator()



// Drawer code
function AppDrawerStack() {
    return (
        <DrawerStack.Navigator >
            <DrawerStack.Screen name='Home' component={AppBottomStack} />
            <DrawerStack.Screen name='Profile' component={AppBottomStackOne} />
            <DrawerStack.Screen name='Donate' component={AppBottomStackTwo} />
            <DrawerStack.Screen name='Help' component={AppBottomStackThree} />
         
        </DrawerStack.Navigator>
    )


}




// Bottom Stack Part

function AppBottomStack() {
    return (
        <BottomStack.Navigator>
            <BottomStack.Screen
                name='Home'
                component={BottomScreenOne}

            />
            <BottomStack.Screen
                name='Settings'
                component={BottomScreenTwo}
            />
        </BottomStack.Navigator>
    )
}

function AppBottomStackOne() {
  return (
      <BottomStack.Navigator>
          <BottomStack.Screen
              name='Profile'
              component={BottomScreenOne}

          />
          <BottomStack.Screen
              name='Settings'
              component={BottomScreenTwo}
          />
      </BottomStack.Navigator>
  )
}

function AppBottomStackTwo() {
  return (
      <BottomStack.Navigator>
          <BottomStack.Screen
              name='Donate'
              component={BottomScreenOne}

          />
          <BottomStack.Screen
              name='Settings'
              component={BottomScreenTwo}
          />
      </BottomStack.Navigator>
  )
}

function AppBottomStackThree() {
  return (
      <BottomStack.Navigator>
          <BottomStack.Screen
              name='Help'
              component={BottomScreenOne}

          />
          <BottomStack.Screen
              name='Settings'
              component={BottomScreenTwo}
          />
      </BottomStack.Navigator>
  )
}

function BottomScreenOne() {
    return (
        <View>
              <ImageBackground source={require('./assets/ibirori.png')} style={{width: '100%', height: '100%'}}>
     
     </ImageBackground>

        </View>
    )
}

function BottomScreenTwo() {
    return (
        <View>

     <ImageBackground source={require('./assets/pexels-pixabay-531321.png')} style={{width: '100%', height: '100%'}}>
     
     </ImageBackground>

        </View>
    )
}



export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Mobile Applicatiom development" component={AppDrawerStack} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}``
