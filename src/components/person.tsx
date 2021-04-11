import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-paper'
import profiles from '../utils/profiles'

const SIZE = 120

export interface Props {
  name: string
}

export default function Person(props: Props) {
  return (
    <View style={styles.person}>
      <Avatar.Image size={SIZE} source={profiles[props.name]} />
      <Text style={styles.personText}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  person: {
    margin: 10,
    flexBasis: SIZE,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  personText: {
    fontSize: 20
  }
})
