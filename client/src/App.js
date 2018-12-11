import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from  './components/navbar/NavBar';
import ShoppingList from  './components/shopping-list/ShoppingList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ShoppingList/>
      </div>
    );
  }
}

export default App;
