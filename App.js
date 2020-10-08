/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
const items = [{ id: '0', text: 'View' },
{ id: '1', text: 'Text' },
{ id: '2', text: 'Image' },
{ id: '3', text: 'ScrollView' },
{ id: '4', text: 'ListView' },]


const App = () => {
  return (

    // <FlatList style={styles.container}
    //   data={items}
    //   renderItem={(item ) => { <Text style={styles.row}>"asghar"</Text> }}
    //   keyExtractor={( fff ) => {
    //     console.log(fff)
    //     return(fff.id)} }/>
    <FlatList
      style={styles.container}
      data={items}
      //   renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
      renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}

      //keyExtractor={(item) => item.id}
      // keyExtractor={(item) => item.id}
        
     
    />

  )
  // return (
  //   <FlatList
  //     style={styles.container}
  //     data={items}
  //     renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
  //     keyExtractor={(item) => item.id}
  //   />
  // )

}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1
    },
    flatList: {
      flex: 1
    },
    row: {

    },
  }
)

export default App;