import React, {Component} from 'react';

class FormUncontrolled extends React.Component{

    handleSubmit = (event) => {
        event.preventDefault();

        const values = {
            inputValue: this.input.value,
            checkboxValue: this.checkbox.checked,
            selectValue: this.select.options[this.select.selectedIndex].value
        }

        this.props.onSubmit.apply(this, [values])
    }

    render() {
        const initialValues = this.props.initialValues;

        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" defaultValue={initialValues.input} ref={input => this.input = input} />
               
                <br />
                <input type="checkbox" defaultChecked={initialValues.checkbox} ref={checkbox => this.checkbox = checkbox} />
                <br />
                <select defaultValue={initialValues.select} ref={select => this.select = select} >
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

export default FormUncontrolled;