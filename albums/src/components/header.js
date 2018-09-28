// Import libraries for making a components
import React from 'react';
import {Text,View} from 'react-native';


// make a component
const Header = (props)=>{
    const {textStyles , viewStyles }= styles;
    return (
        <View style = {viewStyles}>
            <Text style={textStyles}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyles :{
        backgroundColor:'#f8f8f8',
        justifyContent:'center',
        alignItems:'center',
        height: 60,
        padding: 15,
        shadowColor: '#000',
        shadowOffset:{ width: 0, height: 5},
        shadowOpacity:0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyles :{
        fontSize : 20
    }
};

//make the component to other parts
export default Header;