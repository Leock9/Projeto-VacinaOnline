import React, { useState } from 'react';
import './styles.css'
import fiqueEmCasa from '../../assets/fiqueCasa.jpeg';
import Logo from '../../assets/logo2.png';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'

export default function Login() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {

      const response = await api.post('session', {id})
      console.log(response.data.nome)

      localStorage.setItem('postoId', id);
      localStorage.setItem('postoNome', response.data.nome);

      history.push('/profile')

    } catch (err) {
      alert(`Falha ao realizar login, tente novamente.`)
    } 
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={Logo} alt="Logo" />
        <form onSubmit={handleLogin}>
          <h1> Seu login</h1>
          <input
            placeholder="Seu ID"
            value={id}
            onChange={event => setId(event.target.value)}
          />
          <button className='button' type="submit">Entrar</button>

          <Link className="backLink" to="/register">
            <FiLogIn size={16} color="#E02041" />
                Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={fiqueEmCasa} alt="Heroes" />
    </div>
  );
}