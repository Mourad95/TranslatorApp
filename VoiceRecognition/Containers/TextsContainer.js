import React from 'react';
import {View} from 'react-native';
import TextOriginal from '../Components/TextOriginal'
import TextTranslate from '../Components/TranslateText'
export default class TextsContainer extends React.Component{
    render(){
        return(
            <View>
                <TextOriginal/>
                <TextTranslate/>
            </View>
            
        )
    }

}
