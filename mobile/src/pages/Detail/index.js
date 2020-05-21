import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import logo from '../../assets/logo2.png';

export default function Detail() {
    return (
        <View style = {styles.container}>
             <View style={styles.header}>
                <Image source={logo} />

               <TouchableOpacity>
                   <Feather name= "arrow-left" size={28} color="#E82041"/>
               </TouchableOpacity>
            </View>
        </View>
    )
}

//52