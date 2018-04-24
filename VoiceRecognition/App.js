import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

// Import des classes et du style
import HomeView from './Views/HomeView'
import TranslateView from './Views/TranslateView'
import Styles from './Styles/Styles'

const AppNavigator = StackNavigator({
  HomeView: { screen: HomeView },
  TranslateView: { screen: TranslateView }

});



export default class App extends React.Component {
  
  
  render() { // Fonction obligatoire pour chaque classe
    
    return ( // Retourne des éléments enveloppés dans un élément parent. Ici, View.
      <View style={Styles.container}>

        <AppNavigator/>
        <HomeView />

      </View>
    );
  }
}





