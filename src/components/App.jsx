import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import dragApp from '../reducers/index'
import Layout from './Layout'


const middleware = [ thunk ]

const store = createStore(
  dragApp,
  applyMiddleware(...middleware)
)

const  App = () => (
    <Provider store={store}>
        <Layout />
    </Provider>
)

export default App