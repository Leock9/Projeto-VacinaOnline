import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'
import Logo from '../../assets/logo2.png';


export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Vacina Online"/>
                    <h1>Cadastro</h1>
                    <p>Registre seu posto de saúde, e informe a população as vacinas disponíveis em seu local</p>
                    <Link className="backLink" to="/home">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para tela de login
                    </Link>
                </section>
                <form>
                    <input placeholder= "Nome do Posto de Saúde "/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder= "WhatsApp"/>

                    <div className= "input-group">
                        <input placeholder= "Logradouro"/>
                        <input placeholder= "UF" style= {{ width: 80 }}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
