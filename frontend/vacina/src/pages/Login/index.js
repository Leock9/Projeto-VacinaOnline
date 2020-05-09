import React from 'react';
import './styles.css'
import fiqueEmCasa from '../../assets/fiqueCasa.jpeg';
import Logo from '../../assets/logo2.png';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Login() {
    return(
       <div className= "login-container">
           <section className= "form">
             <img src= {Logo} alt= "Logo"/>
             <form>
              <h1> Seu login</h1>
              <input placeholder= "Seu ID"/>
              <button className= 'button'type="submit">Entrar</button> 

              <Link className= "backLink" to="/register">
                <FiLogIn size={16} color="#E02041"/>
                Não tenho cadastro
              </Link>  
             </form>
           </section>
           <img src={fiqueEmCasa} alt= "Heroes"/>
       </div>
    );
}