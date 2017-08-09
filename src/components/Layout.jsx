import React from 'react'
import { Container } from '@extjs/ext-react'
import { connect } from 'react-redux'
import DragApp from '../containers/DragApp'
import UserGrid from './UserGrid';
import logo from '../logo.svg';
import '../App.css';

class Layout extends React.Component {

  render() {
    const { dispatch } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ExtReact</h2>
        </div>
        <Container height={200}>
          <UserGrid />


        </Container>
        <DragApp />

      </div>
    )
  }
}


const mapStateToProps = state => {
  return ( {...state })
}

export default connect(mapStateToProps)(Layout)
