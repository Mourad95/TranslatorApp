import React from 'react';
import {Button} from 'react-native';
import Styles from '../Styles/Styles';

export default class ButtonRecord extends React.Component{
    
    recordAudio(){
        return console.log("button record ok")
        
    }


    render(){
        return(
            <Button
            onPress={this.recordAudio}
            title="Enregistrer"
            color='#841584'
            accessibilityLabel="Learn more about this purple button"
            />
        )

    }
  


}


