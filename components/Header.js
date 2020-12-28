import React, {Component} from 'react'

import { View, TextInput, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles/Styles'
import {addedInfo} from '../redux/action'
import { connect } from 'react-redux'

class Header extends Component {
    constructor(props){
      super(props)
      
    }
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Welcome</Text>
          </View>
          <View style={styles.searchBar}>
            <TextInput style={styles.input} onChangeText={text => this.changedName = text}></TextInput>
            <TextInput style={styles.input} onChangeText={text => this.changedNumber = text}></TextInput>
           <TouchableOpacity style={styles.searchButton} onPress={() => this.props.addInfo(this.changedName, this.changedNumber)}>
              <Text style={styles.text}>SEARCH</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      addInfo: (name, number) => dispatch(addedInfo(name, number))
    }
  }

  export default connect (null, mapDispatchToProps)(Header)