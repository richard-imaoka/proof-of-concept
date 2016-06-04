import React           from 'react'
import ReactDOM        from 'react-dom'
import { createStore } from 'redux'
import root            from '../reducers/rootReducer'
import App             from '../components/App.js'

const store = createStore(root);


store.subscribe(() => {
  ReactDOM.render( <App store={store}/>, document.getElementById("app") );
})
ReactDOM.render( <App store={store}/>, document.getElementById("app") );