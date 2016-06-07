import React           from 'react'
//import js_beautify     from 'js-beautify'
import ReactDOM        from 'react-dom'
//import ReactDOMServer  from 'react-dom/server'
import { createStore } from 'redux'
import root            from '../reducers/rootReducer'
import App             from '../components/App.js'

const store = createStore(root);

store.subscribe(() => {
  ReactDOM.render( <App store={store}/>, document.getElementById("app") );
  //console.log( js_beautify.html( ReactDOMServer.renderToStaticMarkup( <App store={store}/> ) ) );
})
ReactDOM.render( <App store={store}/>, document.getElementById("app") );