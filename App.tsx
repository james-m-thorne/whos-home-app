import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { StyleSheet, Text, View } from 'react-native'
import Person from './src/components/person'
import profiles from './src/utils/profiles'

export default function App() {
  return (
    <RecoilRoot>
      <Text style={styles.title}>Who's home?</Text>
      <View style={styles.container}>
        <View style={styles.profiles}>
          {Object.keys(profiles).map(name => <Person key={name} name={name} />)}
        </View>
        <StatusBar style="auto" />
      </View>
    </RecoilRoot>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 100,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profiles: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
