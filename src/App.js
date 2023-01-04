import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchSeaction from './components/SearchSection';
import Places from './components/placeComponent/Places';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <SearchSeaction/>
          <Places/>
        </div>
    );
  }
}

export default App;
