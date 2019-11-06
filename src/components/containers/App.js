import React from 'react';
import { useSelector } from 'react-redux'
import { Container, Paper } from '@material-ui/core';


const App = () => {
	
	const board = useSelector(({board}) => board)
	
	return (
		<Container>
			{board.map((card,key) => <Paper key={key}> { JSON.stringify(card) } </Paper>)}
		</Container>
)};

export default App;
