import React, { Component } from 'react';
import Header from './Header'

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: props.counterValue
        };
    }

    increment = () => {
        this.setState((prevState, props) => ({ counter: prevState.counter + 1 }));
    }

    render() {
        console.log(this.props)
        return (
            <div className="counter">
                <Header>Counter</Header>
                <div className="counter__value">{this.state.counter}</div>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.counter !== nextState.counter;
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            counter: nextProps.counterValue
        });
    }
    

    componentDidUpdate(prevProps, prevState) {
        if (this.state.counter === 3) {
            this.props.onThirdClick.call(this);
        }
    }
}