import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import logo from '../../assets/logo2.png';

export default function Detail() {
    const navigation = useNavigation();

    function navigationToVacinas() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />

                <TouchableOpacity onPress={navigationToVacinas}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.vacina}>
                <Text style={[styles.vacinaProperty, {marginTop : 0}]}>Posto:</Text>
                <Text style={styles.vacinaValue}>Posto Teste</Text>

                <Text style={styles.vacinaProperty}>Vacina Teste:</Text>
                <Text style={styles.vacinaValue}>Vacina Teste descricao</Text>

                <Text style={styles.vacinaProperty}>Valor por dose:</Text>
                <Text style={styles.vacinaValue}>R$60,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.vacinaTitle}>Encontrou a vacina que procurava ?</Text>
                <Text style={styles.vacinaDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => { }}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={() => { }}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

//1:00