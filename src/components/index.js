import React from 'react'
import '../css/index.css'
import { Container as Board } from './containers/board'
import LeftPane from './ui/leftPane'
import RightPane from './ui/rightPane'

const App = () => (

		<div className="app">
			<LeftPane />
			<Board />
			<RightPane />
		</div>
		
)


export default App