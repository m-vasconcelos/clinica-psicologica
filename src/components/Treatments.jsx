import React from "react"
import "./Treatments.css"

import Ansiedade from "../img/ansiedade.png"
import Depressão from "../img/depressão.png"
import Traumas from "../img/trauma.png"
import IdeaçãoSuicida from "../img/ideacao-suicida.png"

export default () =>
    <section id="treatments" className="treatments">
        <h1>Tratamentos</h1>
        <div className="treatment">
            <div className="ansiedade">
                <h2>Ansiedade</h2>
            </div>
            <div className="depressao">
                <h2>Depressão</h2>
            </div>
            <div className="traumas">
                <h2>Traumas</h2>
            </div>
            <div className="ideacaoSuicida">
                <h2>Ideação</h2>
                <h2>Suicida</h2>
            </div>
        </div>
    </section>