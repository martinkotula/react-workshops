import React, {Component} from 'react';
import Header from './Header'

export default class Counter extends Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0
        };

        // this.increment = this.increment.bind(this);
    }

    increment = () => {
        this.setState((prevState, props) => ({counter: prevState.counter + 1}));
    }
    
    render() {
        console.log('counter')
        return (
            <div className="counter">
                <Header>Counter</Header>
                <div className="counter__value">{this.state.counter}</div>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}