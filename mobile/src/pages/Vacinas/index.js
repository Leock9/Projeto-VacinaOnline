import React from 'react';
import { View, Image, Text } from 'react-native';
import logo from '../../assets/logo2.png';
import styles from './styles'

export default function Vacinas() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 Vacinas</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description}>
                Procure pela vacina desejada, e contate o posto de saúde
            </Text>
        </View>
    )
}

//35