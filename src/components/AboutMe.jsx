import React from "react"
import "./AboutMe.css"

import Psicologa from "../img/psicologa.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default () =>
    <section id="aboutMe" className="aboutMe"> 
        <img src={Psicologa} alt="Psicologa" />
        <div>
            <h1>Ana Beatriz</h1>
            <h2>Psicóloga Clínica</h2>
            <p><FontAwesomeIcon className="checkIcon" icon={faCheck}/> Graduada em Psicologia pela UFRJ</p>
            <p><FontAwesomeIcon className="checkIcon" icon={faCheck}/> Pós-graduada em Psicoterapia</p>
        </div>
    </section>