import React, {Component} from 'react'
import { View, Text, } from 'react-native'
import {styles} from '../styles/Styles'
import { connect } from 'react-redux'

class List extends Component {
    constructor(props){
        super(props)
      
    }
  
    render() {
      return (
        <View style={styles.listStyle}>
          {this.props.list.map( (item, index) => { console.log(item.name, item.number);
            
            return <View key={index}>
              <Text style={styles.listText}>Name: {item.name} Number: {item.number}</Text>
            </View>
          })}
          
        </View>
      );
    }
  }

 const mapStateToProps = state => {
   return {
    list: state.list
   }
  }
 

export default connect(mapStateToProps)(List)
