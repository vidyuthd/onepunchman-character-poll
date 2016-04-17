import React from 'react'
import ReactDOM from 'react-dom'
import { Router,Route,hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducer'
import App from './components/App.react'
import {BattleContainer} from './components/Battle.react'
import { makeStore } from './utils/util'

const store = createStore(reducer)
store.dispatch({
  type: 'SET_STATE',
  state: makeStore()
})


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App} >
          <Route path="/battle" component={BattleContainer} />
        </Route>
     </Router>
  </Provider> ,
   document.getElementById('app')
 )
