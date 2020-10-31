import React from 'react';
import './App.css';

// Shamas Ul din (SP18-BCS-5C)

import KeyPadComponent from './components/keyPadComponent';

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      result: ""
    }
    
  }

  render() {

    return (
      <div className="App">
        <h1>React JS Calculator</h1>
        <KeyPadComponent/>
      </div>
      
    );
  }
}




export default App;
