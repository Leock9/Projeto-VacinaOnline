import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';
import logo from '../../assets/logo2.png';
import styles from './styles';


export default function Vacinas() {
    const navigation = useNavigation();
    const [vacinas, setVacinas] = useState([]);
    const [total, setTotal] = useState(0);

    function navigationToDetail(vacina) {
        navigation.navigate('Detail', { vacina });
    }

    async function loadVacinas() {
        const response = await api.get('vacinas');

        setVacinas(response.data);
        setTotal(response.headers['Total-Vacinas']);
    }

    useEffect(() => {
        loadVacinas();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} vacinas</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description}>
                Procure pela vacina desejada, e contate o posto de saúde
            </Text>

            <FlatList
                data={vacinas}
                style={styles.vacinaList}
                keyExtractor={vacina => String(vacina.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: vacina }) => (
                    <View style={styles.vacina}>
                        <Text style={styles.vacinaProperty}>Posto:</Text>
                        <Text style={styles.vacinaValue}>{vacina.nomePosto}</Text>

                        <Text style={styles.vacinaProperty}>Vacina:</Text>
                        <Text style={styles.vacinaValue}>{vacina.nomeVacina}</Text>

                        <Text style={styles.vacinaProperty}>Valor por dose:</Text>
                        <Text style={styles.vacinaValue}>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(vacina.valor)}
                        </Text>

                        <TouchableOpacity
                            style={styles.detailButton}
                            onPress={() => navigationToDetail(vacina)}
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