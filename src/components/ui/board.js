import React from 'react'
import { Grid, Card, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Container as PlayCard } from '../containers/playCard'

export const Board = props => {
	
	const 	useStyles = makeStyles({
				grid: {
					width: 500,
					margin: 'auto'
				}
			}),
			styles = useStyles()

	
	return (
		<Grid container spacing={3} alignContent="center" className={styles.grid}>
			{
				Array.from({length: props.boardSize}, (_,key) => (
					<Grid item key={key}  md={4}>
						<PlayCard position={key} />
					</Grid>
				))
			}
		</Grid>
)}
