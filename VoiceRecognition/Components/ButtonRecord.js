import React from 'react';

import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


import Styles from '../Styles/Styles';


export default class ButtonRecord extends React.Component{
    
    
    recordAudio(){
        console.log("Bouton record ok")
    }


    render(){

        return(
            <Button
            onPress={() => this.props.redirect.navigate('Translate')}
            title="Enregistrer"
            color='#841584'
            accessibilityLabel="Learn more about this purple button"
            
            />
        )


    }
  


}


