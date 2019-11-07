import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Card, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { PlayCard } from './playCard'

export const App = () => {
	
	const 	board = useSelector(({board}) => board),
			useStyles = makeStyles({
				grid: {
					width: 500,
					margin: 'auto'
				}
			}),
			classes = useStyles()

	
	return (
		<Grid container spacing={3} alignContent="center" className={classes.grid}>
			{board.map((card,key) => (
				<Grid item key={key} md={4}>
					<PlayCard { ...card } />
				</Grid>
			))}
		</Grid>
)}
