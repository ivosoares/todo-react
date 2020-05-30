import React from "react";
import { Component } from "react";


class Exemplo extends Component {
    state = {
        nome: 'Ivonaldo'
    };

    clickNoBotao = () => {
        console.log('Foi clicado no botão!');
        this.setState({
            nome: "Leonardo",
        })
    };

    render() {
        return(
            <div>
                <h1>{this.state.nome}</h1>
                <button type="button" onClick={this.clickNoBotao}>Click</button>
            </div>
        )
    }
}

export default Exemplo;