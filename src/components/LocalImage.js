import React, { Component } from 'react';
import { Image, Dimensions  } from 'react-native';

const LocalImage = ({source, originalWidth, originalHeight, logoType}) => {
    let windowWidth = Dimensions.get("window").width/1.5
    if(logoType==="appLogo"){
        windowWidth = Dimensions.get("window").width/1.2
    } else {
        windowWidth = Dimensions.get("window").width/3
    }
    let widthChange = (windowWidth)/originalWidth
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * widthChange
    return (
       <Image source={source} style={{width: newWidth, height: newHeight}}/>
    )
}

export default LocalImage;
