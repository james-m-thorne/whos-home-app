import React, { useState, useEffect } from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'

interface Props {
  name: string
}

export default function Chart(props: Props) {
  const [data, setData] = useState([])
  
  useEffect(() => {
    loadTimeseries()
  }, [])

  async function loadTimeseries() {
    try {
       const res = await fetch(`http://192.168.1.7:5000/timeseries/${props.name}`)
       const result = await res.json()
       setData(Object.values(result))
   } catch (e) {
       console.log(e)
   }
  }

  return (
    <BarChart style={{ height: 200 }} data={data} svg={{ fill: 'rgb(134, 65, 244)' }} contentInset={{ top: 30, bottom: 30 }} yMin={0} yMax={1}>
        <Grid />
    </BarChart>
  )
}