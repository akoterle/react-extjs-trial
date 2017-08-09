import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducers from '../reducers/index'
import Layout from './Layout'
import { fetchPosts } from '../actions'


const middleware = [ thunk ]

const store = createStore(
  rootReducers,
  applyMiddleware(...middleware)
)

store.dispatch(fetchPosts('reactjs'))

const  App = () => (
    <Provider store={store}>
        <Layout />
    </Provider>
)

export default App