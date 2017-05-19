import React, { Component } from 'react';
import './App.css';


class Form extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }


    onFormSubmit(e) {
        e.preventDefault();
        var value = this.state.value;
        this.props.submitToDo(value);
        this.setState({
             value: ''
        })
       
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="submit" name="submit">Add</button>
                        </span>
                        <input type="text" className="form-control" placeholder="Add a to-do" name="typeTodo" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </form>

            </div>
        )
    }
}

export default Form;