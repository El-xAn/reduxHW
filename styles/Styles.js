import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: 'gray'
    },
    headerContainer: {
      height: 80,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center"
    },
    headerText: {
      color: "yellow",
      fontSize: 30,
    },
    input: {
      flex: 1,
      fontSize: 20,
      backgroundColor: 'gray',
      borderRadius: 10,
      borderStartColor: "blue",
      margin: 2
    },
    searchBar: {
      marginTop:10,
      height: 160,
      flexDirection: "column",
      margin: 2,

    },
    searchButton: {  
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue",
      borderRadius: 10,
      margin: 2
    },
    text: {
      color: "white",
      fontSize: 30,
    },  
    listStyle: {
      flex: 1,
      backgroundColor: '#fff'
    },
    listText: {
      flex: 1,
      margin: 5,
      color: "#000",
      fontSize: 25,  
    }
})

