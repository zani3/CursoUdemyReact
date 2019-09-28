import React, {Component} from 'react'

export default class ComponentClasse extends Component{
    render(){
        return (
            // <h1>Olá Classe</h1>
            <h1>{this.props.valor}</h1>
        )
    }
}