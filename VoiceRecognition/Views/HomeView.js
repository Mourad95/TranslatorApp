import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator} from 'react-navigation'

import styles from '../Styles/Styles' 
import ButtonRecord from '../Components/ButtonRecord'

export default class HomeView extends React.Component{

  static navigationOptions = {
    title:'HomeView'
  }
      render() {
        const navigate = this.props.navigation;
      return (
          <View>
                <Text>t'es dans HomeView</Text>
                
         
            <Button
            onPress={() => navigate('TranslateView')}
            title="Enregistrer"
            color='#841584'
            accessibilityLabel="Learn more about this purple button"
            />
        
          </View>
         
     
      );
    }
  }