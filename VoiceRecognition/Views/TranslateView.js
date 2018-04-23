import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../Styles/Styles' 
import ButtonListen from '../Components/ButtonListen'
import TextsContainer from '../Containers/TextsContainer'

export default class TranslateView extends React.Component {
    render() {
      return (
          <View>
                <Text>t'es dans TranslateView</Text>
                <ButtonListen/>
                <TextsContainer/>
          </View>
         
     
      );
    }
  }