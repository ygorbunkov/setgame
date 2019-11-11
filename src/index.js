import React from 'react'
import { render } from 'react-dom'
import { Container as Board } from './components/containers/board'
import { appReducer } from './store/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const 	rootNode = document.getElementById('root'),
		store = createStore(appReducer)
		
store.dispatch({type: 'DEAL'})		

render(
	<Provider store={store}>
		<Board />
	</Provider>, 
	rootNode
)