import React from 'react';
import { useSelector } from 'react-redux'
import { Container, Paper, Grid } from '@material-ui/core';


const App = () => {
	
	const board = useSelector(({board}) => board)
	
	return (
		<Grid container spacing={3} alignContent="center">
			{board.map((card,key) => (
				<Grid item key={key} md={4}>
					<Paper { ...card }>
						{ JSON.stringify(card) }
					</Paper>
				</Grid>
			))}
		</Grid>
)};

export default App;
