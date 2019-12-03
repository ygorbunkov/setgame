import React from 'react'
import { render } from 'react-dom'
import App from './components'
import appReducer from './store'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const 	rootNode = document.getElementById('root'),
		store = createStore(appReducer)
		
store.dispatch({type: 'DEAL'})		

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	rootNode
)