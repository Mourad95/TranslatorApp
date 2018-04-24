import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// Import classes and styles
import HomeView from './Views/HomeView'
import TranslateView from './Views/TranslateView'
import Styles from './Styles/Styles'

const Nav = StackNavigator({
  Home: { screen: HomeView },
  Translate: { screen: TranslateView }
}, {
  initialRouteName: 'Home',
})

export default class App extends React.Component {
  render() {
    return ( // Return one parent element only, HomeView and TranslateView must be wrapped in one parent View
      <Nav/>
    ); 
  }
}


