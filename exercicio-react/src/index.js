import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './componentes/MeuPrimeiroComponente'
import {CompA, CompB} from './componentes/DoisComponentes'

const elemento = document.getElementById('root')

ReactDOM.render(
    // <div><Primeiro valor="Bom dia !" /></div>, elemento
    <div><CompA valor="teste 1" />
    <CompB valor="teste 2" /></div>, elemento
)

// ReactDOM.render(
//     <h1>Olá React2</h1>, elemento
// )