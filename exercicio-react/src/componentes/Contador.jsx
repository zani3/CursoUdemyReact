import React, {Component} from 'react'

export default class Contador extends Component{

    state = {
        numero: 0
    }

    //solução 1
    // constructor(props){
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }




    // maisUm(){

        //     this.state.numero++
    // // }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
        // this.state.numero++
    }



    render(){
        return (
            <div>

                    <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                {/* <button onClick = {() => this.maisUm()}>Inc</button> */}
                <button>Dec</button>
            </div>
        )
    }
}