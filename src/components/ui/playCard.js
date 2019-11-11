import React from 'react'
import { Card, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Diamond, Squiggle, Oval } from './shapes'

export const PlayCard = props => {
	
	const 	useStyles = makeStyles({
				card: {
					width: 150,
					height: 200
				}
			}),
			classes = useStyles(),
			{position, qty, shape, ...colorFill} = props,
			getShape = (shape, key) => {
				const shapeMap = {
					diamond: <Diamond {...colorFill} key={key} />,
					squiggle: <Squiggle {...colorFill} key={key} />,
					oval: <Oval {...colorFill} key={key} />,
				}
				return shapeMap[shape]
			}
	
	return (
		<Card position={position}>
			<CardActionArea className={classes.card}>
				{
					Array.from({length: qty}, (_,key) => getShape(shape,key))
				}
			</CardActionArea>
		</Card>
	)
}				
					
					
