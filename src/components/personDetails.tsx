import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import { fetchTimeState } from '../atoms/main'
import Person from './person'
import Chart from './chart'

export interface Props {
  route: any
}

export default function PersonDetails(props: Props) {
  return (
    <View style={styles.details}>
      <Person name={props.route.params.name} isDisabled={props.route.params.isDisabled}/>
      <Text style={styles.chartTitle}>Timeseries chart for the last hour</Text>
      <Chart name={props.route.params.name} />
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20
  },
  chartTitle: {
    textAlign: 'center'
  }
})

