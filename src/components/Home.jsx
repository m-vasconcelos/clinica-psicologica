import React from "react"
import "./Home.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default () =>
    <section id="home" className="home">
        <h1>Psicologia Clínica</h1>
        <a href="#"><button>SAIBA MAIS</button></a>
        <div><p><FontAwesomeIcon className="whatsappIcon" icon={faWhatsapp}/></p></div>
    </section>