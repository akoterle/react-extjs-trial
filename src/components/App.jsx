import React from 'react'
import DragApp from '../containers/DragApp'

const App = () => (
  <div>
    <DragApp />
  </div>
)

export default App



/*
import React, { Component } from 'react';
import DragContainer from './components/DragContainer'
import logo from './logo.svg';
import './App.css';

Ext.require(['Ext.drag.*']);

class App extends Component {
  state = {
        dragText: 'Drag Me!'
    }
      onDragMove(source, info) {
        const pos = info.element.current,
            html = Ext.String.format('X: {0}, Y: {1}', Math.round(pos.x), Math.round(pos.y));

        this.setState({dragText: html});
    }

    onDragEnd(source) {
        this.setState({dragText: 'Drag Me!'});
    }
  render() {
    const {dragText} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ExtReact</h2>
        </div>
        <DragContainer dragText={dragText} />
      </div>
    );
  }

}

export default App;
*/