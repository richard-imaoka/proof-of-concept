import React           from 'react'
import ReactDOM        from 'react-dom'
//import ReactDOMServer  from 'react-dom/server'
import { createStore } from 'redux'
import root            from '../reducers/rootReducer'
import App             from '../components/App.js'

const store = createStore(root);


store.subscribe(() => {
  ReactDOM.render( <App store={store}/>, document.getElementById("app") );
  //console.log( ReactDOMServer.renderToStaticMarkup( <App store={store}/> ) );
})
ReactDOM.render( <App store={store}/>, document.getElementById("app") );