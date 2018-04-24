import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../Styles/Styles' 
import ButtonRecord from '../Components/ButtonRecord'

export default class HomeView extends React.Component {
    render() {
      return (
          <View>
                <Text>t'es dans HomeView</Text>
                <ButtonRecord redirect={this.props.navigation}/>
          </View>
         
     
      );
    }
  }