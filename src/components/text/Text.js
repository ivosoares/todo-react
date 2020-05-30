import React from "react";
import { Component } from "react";
import './Text.css';


class Text extends Component {
    render() {
        return(
            <span>{this.props.Text}</span>
        )
    }
}

export default Text;