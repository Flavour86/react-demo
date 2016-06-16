import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'store'
import Route from 'route'
import 'style'

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('app'))
