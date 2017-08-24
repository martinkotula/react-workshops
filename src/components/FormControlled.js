import React, {Component} from 'react';
import RedHOC from './RedHOC';

class FormControlled extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            values: props.initialValues
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit.apply(this, [this.state.values])
    }

    handleChange(event, type){
        const {target} = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const newState = { values: {...this.state.values, [type]: value }};

        this.setState(newState);
    }

    render() {
        const {input, checkbox, select} = this.state.values;

        return(
            <form className={this.props.className} onSubmit={this.handleSubmit}>
                <input type="text" value={input} onChange={event => this.handleChange(event, 'input')} />
                <br />
                <input type="checkbox" checked={checkbox} onChange={event => this.handleChange(event, 'checkbox')}  />
                <br />
                <select value={select} onChange={event => this.handleChange(event, 'select')} >
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                </select>
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default RedHOC(FormControlled);