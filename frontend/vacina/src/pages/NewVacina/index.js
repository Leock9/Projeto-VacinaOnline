import React, { useState } from 'react';
import './styles.css'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import Logo from '../../assets/logo2.png';
import api from '../../services/api'


export default function NewVacina() {

    const [nomeVacina, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [idadeRecomendada, setIdadeRecomendada] = useState('');
    const [numeroDoses, setNumeroDoeses] = useState('');

    const postoId = localStorage.getItem('postoId');
    const history = useHistory();

    async function handleNewVacina(event) {
        event.preventDefault();

        const data = ({
            nomeVacina,
            valor,
            idadeRecomendada,
            numeroDoses
        });

        try {

            await api.post('vacinas', data, {

                headers: {
                    token: postoId
                }
            });

            history.push('/profile')

        } catch (err) {

            alert(`Erro no cadastro, tente novamente.`)
        }
    }

    return (
        <div className="new-vacina-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Vacina Online" />
                    <h1>Cadastrar nova vácina</h1>
                    <p>Registre as vacinas disponíveis em seu posto de saúde para a população</p>
                    <Link className="backLink" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar para tela de login
                    </Link>
                </section>
                <form onSubmit={handleNewVacina}>
                    <input
                        placeholder="Nome da vacina"
                        value={nomeVacina}
                        onChange={event => setNome(event.target.value)}
                    />

                    <input
                        type="Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(vacina.valor)"
                        placeholder="Valor da dose"
                        value={valor}
                        onChange={event => setValor(event.target.value)}
                    />

                    <input
                        placeholder="Idade recomendada"
                        value={idadeRecomendada}
                        onChange={event => setIdadeRecomendada(event.target.value)}
                    />

                    <input
                        placeholder="Numero de doses"
                        value={numeroDoses}
                        onChange={event => setNumeroDoeses(event.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
