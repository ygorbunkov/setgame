import React from 'react'
import '../css/index.css'
import { Container as Board } from './containers/board'
import { Container as CompleteModal } from './containers/completeModal'
import LeftPane from './ui/leftPane'
import RightPane from './ui/rightPane'

const App = () => (

		<div className="app">
			<LeftPane />
			<Board />
			<RightPane />
			<CompleteModal />
		</div>
		
)


export default App