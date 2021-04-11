import React, { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { fetchTimeState } from '../atoms/main'
import commonStyles from '../styles/common'
import Person from './person'

interface WhosHome {
  [key: string]: number,
}

export default function Home() {
  const [whosHome, setWhosHome] = useState<WhosHome>({})
  const [showAll, setShowAll] = useState(false)
  const seconds = useRecoilValue(fetchTimeState)

  useEffect(() => {
    loadData()
    setInterval(loadData, 5000)
  }, [])

  async function loadData() {
    try {
       const res = await fetch(`http://192.168.1.7:5000/whoshome?seconds=${seconds}`)
       const result = await res.json()
       setWhosHome(result)
   } catch (e) {
       console.log(e)
   }
  }

  return (
    <>
      <View style={commonStyles.flexCenterItems}>
        <Text style={styles.title}>Who's home?</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={showAll ? "#2476ff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setShowAll(!showAll)}
          value={showAll}
        />
        <Text>Show all people</Text>
      </View>
      <View style={commonStyles.flexCenter}>
        <View style={styles.profiles}>
          {Object.entries(whosHome).map(([name, timesHome]) => 
            showAll ? <Person key={name} name={name} isDisabled={timesHome < 1}/> : 
            timesHome > 0 && <Person key={name} name={name} isDisabled={timesHome < 1}/>)
          }
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center'
  },
  profiles: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
