import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import Logo from '../../assets/logo2.png';

export default function Profile() {
    return(
        <div className= "profile-container">
            <header>
                <img src={Logo} alt="Vacina Online"/>
                <span>Bem vindo posto xxx</span>
                <Link className="button" to="/vacinas/new">Cadastrar nova vacina</Link>
                <button type="button">
                    <FiPower size = {18} color="#E02041"/>
                </button>
            </header>
            <h1>Vacinas Cadastradas</h1>
            <ul>
                <li>
                    <strong>Nome</strong>
                    <p>Vacina Tétano</p>
                    <strong>Valor</strong>
                    <p>160,00</p>
                    <strong>Idade Recomendada</strong>
                    <p>+ 7 anos até adulto</p>
                    <strong>Número de doses</strong>
                    <p>3 doses em não vacinados</p>
                    <button type="button">
                        <FiTrash2 size= {20} color="#E02041"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}

