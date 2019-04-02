import React, { Component } from 'react';
// import logo from './logo.svg';
import './new.css';
// import Summary from '../Summary/Summary'
import Main from '../Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2Fa4%2Fa5%2F88%2Fa4a58852928c1eb6f86d12ca33020309.gif&f=1'} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div id="dotpat"></div>
          <div id="hackgif"></div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

            Learn React
          </a> */}
        </header>
        <Main ></Main>


      </div>
    );
  }
}

export default App;
