import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator} from 'react-navigation'

import styles from '../Styles/Styles' 
import ButtonRecord from '../Components/ButtonRecord'

export default class HomeView extends React.Component{

  static navigationOptions = {
    title:'RECORD'
  }
      render() {
        const navigate = this.props.navigation;
      return (
          <View>
                <Text>t'es dans HomeView</Text>
                
                <ButtonRecord redirect={this.props.navigation}/>

          </View>
         
     
      );
    }
  }