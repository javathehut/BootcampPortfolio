import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import { Router, Route, browserHistory } from 'react-router';


class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Your To-Do App</h1>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="app" component={App} />
      <Route path="about" component={About} />
    </Route>
  </Router>),
  document.getElementById('root')
);
