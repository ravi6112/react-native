// import library to help create a component
import React,{ Component } from 'react';
import {View,Text,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = ({album}) => {
    const{title,artist,thumbnail_image,image,url}=album;
    const{
        thumbnailContainerStyle,
        headerContentStyles,
        thumbnailStyles,
        headerTextStyle,
        imageStyle
    }=styles;


    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyles}
                        source={{ uri : thumbnail_image}}
                    />
                </View>
                <View style={headerContentStyles}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{uri:image}}
                />
            </CardSection>

            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
};

const styles = {
    headerContentStyles : {
        flexDirection:'column',
        justifyContent: 'space-around'
    },
    headerTextStyle : {
      fontSize:18
    },
    thumbnailStyles : {
        height :50,
        width : 50
    },
    thumbnailContainerStyle :{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight: 10
    },
    imageStyle:{
        height: 300,
        flex: 1,
        width: null
    }

};

export default AlbumDetail;
