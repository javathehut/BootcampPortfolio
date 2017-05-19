import React, { Component } from 'react';
import Form from './Form.js';
import Todo from './Todo.js';
import Links from './Links.js';
import Axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      disableButton: false
    }
    this.newToDo = this.newToDo.bind(this);
    this.clearComplete = this.clearComplete.bind(this);
    this.toggleDoneClass = this.toggleDoneClass.bind(this);
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

  //Adds new to-do item to array/list
  newToDo(tdItem) {
    let todoArray = this.state.todos;
    let idExp = 0;
     if (todoArray.length){
      idExp = todoArray[todoArray.length - 1].id + 1;
    }
    let addedTodo = { text: tdItem, done: false, id: idExp };
    this.setState({
      todos: todoArray.concat([addedTodo]),
    });
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

  //**REACT COMPONENT LIFECYCLES**
  //Check for data from server on loading page
  componentWillMount() {
    const url = 'http://localhost:8080/todos';
    Axios.get(url).then((result) => {
        this.setState({
        todos: result.data
      })
    }).catch((error) => {
      console.log(error);
    })

  }
  //When component updates, check whether to disable Clear Complete button & Update the storage before leaving page
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

    const url = 'http://localhost:8080/todos';
    Axios.post(url, this.state.todos).then((result) => {
      console.log(result.data);
    }).catch((error) => {
      console.log(error);
    });
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
