import React from 'react'
import { Card, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Diamond } from './diamond'
import { Squiggle } from './squiggle'
import { Oval } from './oval'

export const PlayCard = (props) => {
	
	const 	useStyles = makeStyles({
				card: {
					width: 150,
					height: 200
				}
			}),
			classes = useStyles(),
			{qty, shape, ...colorFill} = props,
			getShape = (shape, key) => {
				const shapeMap = {
					diamond: <Diamond {...colorFill} key={key}/>,
					squiggle: <Squiggle {...colorFill} key={key}/>,
					oval: <Oval {...colorFill} key={key}/>,
				}
				return shapeMap[shape]
			}
	
	return (
		<Card>
			<CardActionArea className={classes.card}>
				{
					Array.from({length: qty}, (_,key) => getShape(shape,key))
				}
				{`${shape},${props.fill},${props.color},${props.qty}`}
			</CardActionArea>
		</Card>
	)
}				
					
					
