import React from 'react'
import ReactDOM from 'react-dom'
import ComponentClasse from './componentes/ComponenteClasse'

// import Pai from './componentes/Pai'
// import Primeiro from './componentes/MeuPrimeiroComponente'
// import {CompA, CompB} from './componentes/DoisComponentes'
// import FamiliaZaniquelli from './componentes/FamiliaZaniquelli'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'

const elemento = document.getElementById('root')

ReactDOM.render(
    // <div><Primeiro valor="Bom dia !" /></div>, elemento
    // <div><CompA valor="teste 1" />
    // <CompB valor="teste 2" /></div>, elemento
    // <div><FamiliaZaniquelli /></div>
    <div>

        <ComponentClasse valor="teste tiago" />

        {/* <Pai /> */}

        {/* <ComponenteComFuncao /> */}

        {/*
        <Familia sobrenome="Zaniquelliiii">
            <Membro nome="Tiago" />
            <Membro nome="Teste" />
             <Membro nome="teste" sobrenome="Zaniquelli" /> 
        </Familia>*/}

        {/* <Familia>
            <Membro nome="Tiago" sobrenome="Zaasdfuelli" />
            <Membro nome="teste" sobrenome="Zanasdfelli" />
        </Familia> */}

    </div>
    , elemento

)

// ReactDOM.render(
//     <h1>Olá React2</h1>, elemento
// )