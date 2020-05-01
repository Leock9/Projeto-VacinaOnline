import React from 'react';
import './styles.css'
import fiqueEmCasa from '../../assets/fiqueCasa.jpeg';
import logo from '../../assets/logo2.png';
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
    return(
       <div className= "login-container">
           <section className= "form">
             <img src= {logo} alt= "Logo"/>
             <form>
              <h1> Seu login</h1>
              <input placeholder= "Seu ID"/>
              <button className= 'button'type="submit">Entrar</button> 

              <a href="/register">
                <FiLogIn size={16} color="#E02041"/>
                Não tenho cadastro
              </a>  
             </form>
           </section>
           <img src={fiqueEmCasa} alt= "Heroes"/>
       </div>
    );
}
//43