import 'react-native-gesture-handler'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import Home from './src/components/home'
import PersonDetails from './src/components/personDetails'

const Stack = createStackNavigator()

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Person" component={PersonDetails} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </RecoilRoot>
  )
}
