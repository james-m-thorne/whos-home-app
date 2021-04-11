import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Person from './person'
import Chart from './chart'

export interface Props {
  route: any
}

export default function PersonDetails(props: Props) {
  return (
    <View style={styles.details}>
      <Person key={props.route.params.name} name={props.route.params.name} isDisabled={false}/>
      <Chart />
      <Text>This person was home in the last 20 mins</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20
  }
})

