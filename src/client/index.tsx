import React from 'react'
import { render } from 'react-dom'

import { createStore, Store } from 'redux'
import { Provider } from 'react-redux'

import { reducer as baseReducer, AppState } from './store/reducer'

import App from './components'

const rootNode = document.getElementById('root')

const store = createStore<AppState>(baseReducer)

render(
    <Provider {...{store}}>
        <App />
    </Provider>,
    rootNode
)
