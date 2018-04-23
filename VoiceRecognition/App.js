import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeView from './Views/HomeView'
import Styles from './Styles/Styles'
import TranslateView from './Views/TranslateView'



export default class App extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <HomeView/>
        <TranslateView/>
        
      </View>
    );
  }
}


