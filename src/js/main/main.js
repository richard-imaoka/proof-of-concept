import React           from 'react'
import ReactDOM        from 'react-dom'
import { createStore } from 'redux'
import root            from '../reducers/rootReducer'
import App             from '../components/App.jsx'

const store = createStore(root);

ReactDOM.render( <App store={store}/>, document.getElementById("app") );
