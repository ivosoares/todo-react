import React from "react";
import { Component } from "react";
import Text from "../text/Text";


class Demo extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Text Text="Meu Exemplo de texto novo!"></Text>
            </div>
        );
    }
}

export default Demo;