import React, { Component } from 'react';
import Header from './components/Header';
import SearchSeaction from './components/SearchSection';
import Places from './components/placeComponent/Places';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <SearchSeaction/>
          <Places/>
          <Footer/>
        </div>
    ); 
  }
}

export default App;
