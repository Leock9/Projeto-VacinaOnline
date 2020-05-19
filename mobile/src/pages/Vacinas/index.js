import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text } from 'react-native';
import logo from '../../assets/logo2.png';
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Vacinas() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> Vacinas</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description}>
                Procure pela vacina desejada, e contate o posto de saúde
            </Text>

            <FlatList
                data={[1, 2, 3, 4, 5]}
                style={styles.vacinaList}
                keyExtractor={vacina => String(vacina)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.vacina}>
                        <Text style={styles.vacinaProperty}>Posto:</Text>
                        <Text style={styles.vacinaValue}>Posto Teste</Text>

                        <Text style={styles.vacinaProperty}>Vacina Teste:</Text>
                        <Text style={styles.vacinaValue}>Vacina Teste descricao</Text>

                        <Text style={styles.vacinaProperty}>Valor por dose:</Text>
                        <Text style={styles.vacinaValue}>R$60,00</Text>

                        <TouchableOpacity
                            style={styles.detailButton}
                            onPress={() => { }}
                        >
                            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color='#E02041' />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

//48