import React, { Component } from 'react';
import './App.css';


class Todo extends Component {

    render() {


        return (
            <li className="list-group-item">
                <input onChange={() => { this.props.toggleDoneClass(this.props.id) }} type="checkbox" value={this.props.done} checked={this.props.done ? true : false} />
                <label className={this.props.done ? 'done' : null}>{this.props.text}</label>
            </li>
        )
    }
}

export default Todo;