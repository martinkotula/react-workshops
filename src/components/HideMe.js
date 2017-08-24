import React, { Component } from 'react';
import Counter from './Counter';

export default class HideMe extends Component {

    constructor() {
        super();

        this.state = {
            visible: true,
            counterValue: 0
        };

    }

    hide = () => {
        this.setState((prevState) => ({ visible: !prevState.visible, counterValue: 1 }));
    }

    getContent = ({ visible }) => {
        return (
            <div className="hide-me__content">
                {visible ? "I'm visible" : null}
                <Counter onThirdClick={this.hide} counterValue={this.state.counterValue} />
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