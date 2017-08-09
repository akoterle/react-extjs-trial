import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import dragApp from '../reducers/index'
import Layout from './Layout'
const store = createStore(dragApp)

const  App = () => (
    <Provider store={store}>
        <Layout />
    </Provider>
)

export default App