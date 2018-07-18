import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Railway from './containers/Railway/Railway';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div> 
          <Railway />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
