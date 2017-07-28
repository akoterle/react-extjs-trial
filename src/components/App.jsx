import React from 'react'
import DragApp from '../containers/DragApp'
import logo from '../logo.svg';
import '../App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to ExtReact</h2>
    </div>
    <DragApp />
  </div>
)

export default App
