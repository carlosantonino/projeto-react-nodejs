import React, { Component } from 'react';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Isso é meu app</h1>
          <Header />
      </div>
    );
  }
}

export default App;
