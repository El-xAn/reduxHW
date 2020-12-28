import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: 'gray'
    },
    headerContainer: {
      height: 100,
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
      backgroundColor: "white",
      borderRadius: 10,
      borderStartColor: "blue",
      fontSize: 20,
      margin: 2
    },
    searchBar: {
      flexDirection: "column",
      margin: 2,

    },
    searchButton: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue",
      borderRadius: 10,
      margin: 2
    },
    text: {
      color: "white",
      fontSize: 20,
    },  
    listStyle: {
      flex: 1,
      backgroundColor: '#fff'
    },
    listText: {
      color: "#000",
      fontSize: 20,  
    }
})

