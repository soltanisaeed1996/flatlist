/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native'
const items = [{ key: '0', text: 'View' },
{ key: '1', text: 'Text' },
{ key: '2', text: 'Image' },
{ key: '3', text: 'ScrollView' },
{ key: '4', text: 'ListView' },]

const itemSeparator = () => {
  return <View style={styles.separator} />
}
const getItemList = (item) => {
  Alert.alert(item)
}
const headerList = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>header </Text>
    </View>
  )
}
const App = () => {
  return (

    // <FlatList style={styles.container}
    //   data={items}
    //   renderItem={(item ) => { <Text style={styles.row}>"asghar"</Text> }}
    //   keyExtractor={( fff ) => {
    //     console.log(fff)
    //     return(fff.id)} }/>
    <FlatList
      contentContainerStyle={styles.container}
      style={styles.flatList}
      data={items}
      ItemSeparatorComponent={itemSeparator}
      ListHeaderComponent={headerList}

      //   renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
      renderItem={({ item }) => <Text style={styles.row}
      onPress={getItemList.bind(this, item.key)}>{item.text}</Text>}

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
      flex: 1,
      padding: 10,

    },
    flatList: {
      // flex: 1,
    },
    row: {
      marginBottom: 5,
      marginTop: 5,
      backgroundColor: 'skyblue',
      paddingLeft: 5,
      paddingTop: 5,
      paddingBottom: 5,
      flexDirection: 'row',
      fontSize: 12
    },
    separator: {
      height: 1,
      width: '100%',
      backgroundColor: 'gray'
    },
    headerView: {backgroundColor: 'green',padding:5},
    headerText: { fontSize: 18, color: 'red',textAlign:'center'  }
  }
)

export default App;