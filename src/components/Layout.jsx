import React from 'react'
import { Container } from '@extjs/ext-react'
import { connect } from 'react-redux'
import DragHost from './DragHost'
import UserGrid from './UserGrid';
import logo from '../logo.svg';
import '../App.css';

class Layout extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ExtReact</h2>
        </div>
        <Container height={200}>
          <UserGrid />
        </Container>
        <DragHost />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ( {...state })
}

export default connect(mapStateToProps)(Layout)
