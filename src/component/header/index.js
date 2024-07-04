import React, { useState, useEffect } from 'react';
import {Text,TouchableOpacity,Dimensions,SafeAreaView} from 'react-native';
import {  Image } from 'react-native-elements';
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient';
export default function Header(props) {
    const {
        title,
        style,
        onPressLeft,
        onPressRight,
        renderLeft=null,
        renderRight=null,
    } = props;
    return (
        <LinearGradient colors={['#2B6EF2', '#8DB3FF',]} style={[styles.contain, style]}>
            <SafeAreaView style={{ flexDirection: 'row',justifyContent: 'space-between',margin: '3%'}}>
                <TouchableOpacity onPress={onPressLeft}  style={{paddingRight:10,paddingBottom:10}}>
                    {renderLeft
                    ?renderLeft()
                    : <Image style={styles.image2}
                      source={require('../../images/home.png')}
                     />
                    }
                    {/* <Image style={styles.image2}
                        source={require('../../images/home.png')}
                    /> */}
                </TouchableOpacity>
                <Text style={{color: 'white', fontSize: 16, fontFamily: 'Roboto',
                textAlign: 'center',justifyContent:'center'}}> {title}</Text>
                <TouchableOpacity onPress={onPressRight}  style={{paddingLeft:10,paddingBottom:10}}>
                    {renderRight
                     ?renderRight()
                     :<Image style={styles.image2}
                       source={require('../../images/Notifications.png')}
                     />
                    }
                    {/* <Image style={styles.image2}
                        source={require('../../images/Notifications.png')}
                    /> */}
                </TouchableOpacity>
                </SafeAreaView>
        </LinearGradient>
    );
}