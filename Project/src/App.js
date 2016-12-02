import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
            <Navbar/>
        </Header>
          {this.props.children}
      </div>
    );
  }
}

export default App;
