import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container as Board } from './containers/board'
import LeftPane from './ui/leftPane'
import RightPane from './ui/rightPane'

const App = () => {
	
	const 	useStyles = makeStyles({
				container: {
					width: 920,
					margin: 'auto',
					display: 'grid',
					gridTemplateColumns: '200px 500px 200px',
					gridGap: 10
				}
			}),
			styles = useStyles()
	
	return (
		<div className={styles.container}>
			<LeftPane />
			<Board />
			<RightPane />
		</div>
	)
}


export default App