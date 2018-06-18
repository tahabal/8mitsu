import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import LeftMenu from './components/LeftMenu';
import Content from './components/Content';
import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

moragaTheme.headerColor = '#ff6c6c';
 
const typography = new Typography(moragaTheme)

typography.injectStyles();

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftMenu />
        <Content />
      </div>
    );
  }
}

export default App;
