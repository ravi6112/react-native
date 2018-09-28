// import library to help create a component
import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from  './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a component
const App = () =>{
    return(
        <View>
            <Header headerText={'Android!'}/>
            <AlbumList/>
        </View>
    )
};
// Render it to device
AppRegistry.registerComponent('albums', ()=> App);


