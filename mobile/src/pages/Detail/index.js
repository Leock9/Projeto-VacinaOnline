import React from 'react';
import { View, TouchableOpacity, Text, Image, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import styles from './styles';
import logo from '../../assets/logo2.png';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const vacina = route.params.vacina;
    const message = `Olá gostaria de saber mais ${vacina.nomeVacina}`

    function navigationToVacinas() {
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Informacoes sobre: ${vacina.nomeVacina}` ,
            recipients: [vacina.email],
            body: message
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=${message}`);
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
                <Text style={[styles.vacinaProperty, { marginTop: 0 }]}>Posto:</Text>
                <Text style={styles.vacinaValue}>{vacina.nomePosto}</Text>

                <Text style={styles.vacinaProperty}>Informações da vacina:</Text>
                <Text style={styles.vacinaValue}>Número de doses: {vacina.numeroDoses}</Text>
                <Text style={styles.vacinaValue}>Idade recomendada: {vacina.idadeRecomendada}</Text>

                <Text style={styles.vacinaProperty}>Valor por dose:</Text>
                        <Text style={styles.vacinaValue}>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(vacina.valor)}
                </Text>

                <Text style={styles.vacinaProperty}>Endereço:</Text>
                <Text style={styles.vacinaValue}>{vacina.logradouro} CEP: {vacina.CEP} </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.vacinaTitle}>Encontrou a vacina que procurava ?</Text>
                <Text style={styles.vacinaDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

//1:00