import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'
import Logo from '../../assets/logo2.png';

export default function NewVacina() {
    return (
        <div className="new-vacina-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Vacina Online"/>
                    <h1>Cadastrar nova vácina</h1>
                    <p>Registre as vacinas disponíveis em seu posto de saúde para a população</p>
                    <Link className="backLink" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para tela de login
                    </Link>
                </section>
                <form>
                    <input placeholder= "Nome da vacina"/>
                    <input type="" placeholder="Valor da dose"/>
                    <input placeholder= "Idade recomendada"/>
                    <input placeholder = "Numero de doses" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

