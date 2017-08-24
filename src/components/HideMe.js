import React, { Component } from 'react';
import Counter from './Counter';

export default class HideMe extends Component {

    constructor() {
        super();

        this.state = {
            visible: true
        };
    }

    hide = () => {
        this.setState((prevState) => ({ visible: !prevState.visible }));
    }

    getContent = ({ visible }) => {
        return (
            <div className="hide-me__content">
                {visible ? "I'm visible" : null}
                <Counter />
            </div>
        )
    }

    render() {
        return (
            <div className="hide-me">
                {this.getContent(this.state)}
                <button onClick={this.hide}>Hide</button>
            </div>
        )
    }
}