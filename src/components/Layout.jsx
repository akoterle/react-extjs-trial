import React from 'react'
import { Container } from '@extjs/ext-react'
import DragApp from '../containers/DragApp'
import UserGrid from './UserGrid';
import logo from '../logo.svg';
import '../App.css';

const Layout = () => (
  <div className="App">
     <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to ExtReact</h2>
    </div> 
    <Container height={200}>
      <UserGrid  />


    </Container>
       <DragApp /> 

  </div>
)

export default Layout
