import React from "react"
import "./ContactUs.css"

import Logo from "../img/logo1.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default () =>
<div>
    <section id="contactUs" className="form">
        <h1>Fale Conosco</h1>
        <form>
            <label htmlFor="Nome">Nome</label>
            <input type="text" placeholder="Digite seu nome..."/>
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder="Digite seu email..."/>
            <label htmlFor="Telefone">Telefone</label>
            <input type="text" placeholder="(DDD) 99999-9999..."/> 
            <label htmlFor="Mensagem">Mensagem</label>
            <textarea name="Mensagem" id="Mensagem" cols="30" rows="5" placeholder="Digite sua mensagem..."></textarea>
            <button type="submit">Enviar</button>         
        </form>
    </section>
    <section className="social">
        <img src={Logo} alt="Logo"/>
        <div>
            <a href="#"><FontAwesomeIcon className="socialIcons" icon={faEnvelope}/> psianabeatriz@email.com</a>
            <a href="#"><FontAwesomeIcon className="socialIcons" icon={faInstagram}/> psianabeatriz_</a>
            <a href="#"><FontAwesomeIcon className="socialIcons" icon={faWhatsapp}/> (99) 99999-9999</a>
        </div>
    </section>
</div>