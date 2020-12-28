import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import  Header from './components/Header'
import  List from './components/List'
import { styles } from './styles/Styles';

class App extends Component {
  render() {
    return (
      <>
      <ScrollView style={ styles.container}>
        <Header />
        <List />
      </ScrollView>    
    </>
    );
  }
}



export default App;
