import React, { Component } from 'react';
import Form from './Form.js';
import Todo from './Todo.js';
import Links from './Links.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { text: 'learn angular', done: false, id: 1 },
        { text: 'write the content for the next module', done: false, id: 2 },
        { text: 'buy cheese', done: true, id: 3 },
        { text: 'buy milk', done: true, id: 4 }
      ],
      disableButton: false
    }
    this.newToDo = this.newToDo.bind(this);
    this.clearComplete = this.clearComplete.bind(this);
    this.toggleDoneClass = this.toggleDoneClass.bind(this);
  }

  toggleDoneClass(id) {
    this.setState({
      todos: this.state.todos.map((todo, i) => {
        if (id === todo.id) {
          return { text: todo.text, done: !todo.done, id: todo.id }
        } else {
          return todo
        }
      }),
    })
  }

  //Adds new to-do item to array/list
  newToDo(tdItem) {
    let todoArray = this.state.todos;
    let idExp = todoArray[todoArray.length - 1].id + 1;
    let addedTodo = { text: tdItem, done: false, id: idExp };
    this.setState({
      todos: todoArray.concat([addedTodo]),
    });
  }

  //Clear Completed Tasks from To Do List
  clearComplete(e) {
    this.setState({
      todos: this.state.todos.filter(elem => {
        if (elem.done === false) {
          return elem
        }
      }),
      disableButton: true
    });
  }

  //When component updates, check whether to disable Clear Complete button
  componentDidUpdate() {
    let disabled = true;
    let todoArray = this.state.todos;
    for (let i = 0; i < todoArray.length; i++) {
      if (todoArray[i].done === true) {
        disabled = false;
        break;
      }
    };
    if (disabled === false && this.state.disableButton === true) {
      this.setState({
        disableButton: disabled
      })
    } else if (disabled === true && this.state.disableButton === false) {
      this.setState({
        disableButton: disabled
      })
    }
  }

  render() {
    let todosListJSX = this.state.todos.map((todo, i) => {
      return <Todo done={todo.done} text={todo.text} id={todo.id} toggleDoneClass={this.toggleDoneClass} />
    })
    return (
      <div className="container">
        <Links />
        <div className="media">
          <h2 className="text-center pageTitle">Main To Do Page</h2>
          <div>
            <ul className="list-group">
              {todosListJSX}
            </ul>
          </div>
          <br />
          <div>
            <Form submitToDo={this.newToDo} />
            <button onClick={this.clearComplete} disabled={this.state.disableButton ? true : false} >Clear Completed Tasks</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
