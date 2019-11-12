import React from 'react'
import { Card, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Shape from './shape'

const PlayCard = ({position,qty,onCardPick,...shapeColorFill}) => {
	
	const 	useStyles = makeStyles({
				card: {
					width: 150,
					height: 200
				}
			}),
			classes = useStyles()
	
	return (
		<Card onClick={() => onCardPick(position)}>
			<CardActionArea className={classes.card} position={position}>
				{
					Array.from({length: qty}, (_,key) => <Shape {...shapeColorFill} key={key} />)
				}
			</CardActionArea>
		</Card>
	)
}				
					
export default PlayCard					
