import React from 'react'
import { Grid } from '@material-ui/core'
import { Container as PlayCard } from '../containers/playCard'

export const Board = ({boardSize}) => (

		<Grid container spacing={3} alignContent="center" style={{marginTop:75}}>
			{
				Array.from({length: boardSize}, (_,key) => (
					<Grid item key={key}  md={4}>
						<PlayCard position={key} />
					</Grid>
				))
			}
		</Grid>
)
