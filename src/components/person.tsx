import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import profiles from '../utils/profiles'

const SIZE = 120

export interface Props {
  key: string,
  name: string,
  isDisabled: boolean
}

export default function Person(props: Props) {
  const navigation = useNavigation()
  const imageStyle = props.isDisabled ? [styles.image, styles.imageOpaque] : styles.image

  return (
    <View style={styles.person}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Person', { name: props.name })}>
        <Image style={imageStyle} source={profiles[props.name]} />
      </TouchableOpacity>
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
  },
  image: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: '#666'
  },
  imageOpaque: {
    opacity: 0.3
  }
})
