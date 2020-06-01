import React, { useState, useEffect } from 'react';
import './styles.css'
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import Logo from '../../assets/logo2.png';
import api from '../../services/api'

export default function Profile() {
    const [vacinas, setVacinas] = useState([]);
    const postoNome = localStorage.getItem('postoNome')
    const postoId = localStorage.getItem('postoId')
    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                token: postoId
            }
        }).then(response => {
            setVacinas(response.data);
        })
    }, [postoId]);

    async function handleDeleteVacina(id) {
        try {
            await api.delete(`vacinas/${id}`, {
                headers: {
                    token: postoId
                }
            });

            setVacinas(vacinas.filter(vacina => vacina.id !== id));

        } catch (err) {
            alert('Erro ao deletar a vacina solicitada, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Vacina Online" />
                <span>Bem vindo, {postoNome}</span>
                <Link className="button" to="/vacinas/new">Cadastrar nova vacina</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Vacinas Cadastradas</h1>
            <ul>
                {vacinas.map(vacina => (
                    <li key={vacina.id}>
                        <strong>Nome</strong>
                        <p>{vacina.nomeVacina}</p>
                        <strong>Valor por dose</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(vacina.valor)}</p>
                        <strong>Idade Recomendada</strong>
                        <p>{vacina.idadeRecomendada}</p>
                        <strong>Número de doses</strong>
                        <p>{vacina.numeroDoses}</p>
                        <button onClick={() => handleDeleteVacina(vacina.id)} type="button">
                            <FiTrash2 size={20} color="#E02041" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

