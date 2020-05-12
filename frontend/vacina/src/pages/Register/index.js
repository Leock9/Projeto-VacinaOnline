import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'
import Logo from '../../assets/logo2.png';
import api from '../../services/api'


export default function Register() {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [CEP, setCEP] = useState(''); 

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data = ({
            nome,
            email,
            whatsapp,
            logradouro,
            CEP
        });

        try{

            const response = await api.post('postos', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/')

        } catch(err) {
            
            alert(`Erro no cadastro, tente novamente.`)
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Vacina Online"/>
                    <h1>Cadastro</h1>
                    <p>Registre seu posto de saúde, e informe a população as vacinas disponíveis em seu local</p>
                    <Link className="backLink" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para tela de login
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                    placeholder= "Nome do Posto de Saúde " 
                    value= {nome} 
                    onChange={event => setNome(event.target.value)}
                    />

                    <input 
                    type="email" placeholder="E-mail"  
                    value= {email} 
                    onChange={event => setEmail(event.target.value)}
                    />

                    <input 
                    placeholder= "WhatsApp"  
                    value= {whatsapp} 
                    onChange={event => setWhatsapp(event.target.value)}
                    />

                    <input 
                    placeholder= "Logradouro"  
                    value= {logradouro} 
                    onChange={event => setLogradouro(event.target.value)}
                    />

                    <input 
                    placeholder= "CEP"   
                    value= {CEP} 
                    onChange={event => setCEP(event.target.value)}
                    />
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
