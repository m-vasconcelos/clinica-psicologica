import React from "react"
import "./Header.css"

import Logo from "../img/logo1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default () =>
    <header className="header">
        <img src={Logo} alt="Logo"/>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutMe">Sobre mim</a></li>
                <li><a href="#treatments">Tratamentos</a></li>
                <li><a href="#contactUs">Fale conosco</a></li>
            </ul>
        </nav>
        <FontAwesomeIcon className="barsIcon" icon={faBars}/>
        <FontAwesomeIcon className="xMarkIcon" icon={faXmark}/>
    </header>