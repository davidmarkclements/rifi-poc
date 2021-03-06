import './lib/mock-process'
import React from ':react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import RemoteComponent from ':cmp'
import reducer from ':cmp/reducer'

const initialState = { msgs: ['Hello World!'] }
const store = createStore(reducer, initialState)

const App = () => <RemoteComponent />

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
