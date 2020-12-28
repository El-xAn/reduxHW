import React, {Component} from 'react'
import { View, TextInput, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles/Styles'
import { connect } from 'react-redux'

class List extends Component {
    constructor(props){
        super(props)
      
    }
  
    render() {
      return (
        <View style={styles.listStyle}>
          <Text style={styles.listText}>{this.props.name1}{this.props.number1}</Text>
        </View>
      );
    }
  }

 const mapStateToProps = state => {
   return {
    name1: state.name,
    number1: state.number
   }
  }
 

export default connect(mapStateToProps)(List)
