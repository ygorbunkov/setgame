import React from 'react'
import { Card, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Shape } from './shape'

export const PlayCard = props => {
	
	const 	useStyles = makeStyles({
				card: {
					width: 150,
					height: 200
				}
			}),
			classes = useStyles(),
			{position, qty, ...shapeColorFill} = props
	
	return (
		<Card position={position}>
			<CardActionArea className={classes.card}>
				{
					Array.from({length: qty}, (_,key) => <Shape {...shapeColorFill} key={key} />)
				}
			</CardActionArea>
		</Card>
	)
}				
					
					
