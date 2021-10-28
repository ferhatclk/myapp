import React,{Component} from 'react';
import {View,Text} from 'react-native';

const FirstComponent = ({name,text,age}) => {

    return(
        <View>
            <Text style={{textAlign:'center',paddingTop:150}}> {name}    {text}  {age}</Text>
        </View>
    )
}

export default FirstComponent;

/*export default class FirstComponent extends Component{
    render(){
        return(
            <View>
             <Text>First Component</Text>
            </View>
        )
        
    }
}*/