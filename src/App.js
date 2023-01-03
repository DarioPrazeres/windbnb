import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchSeaction from './components/SearchSection';
class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <SearchSeaction/>
        </div>
    );
  }
}

export default App;
