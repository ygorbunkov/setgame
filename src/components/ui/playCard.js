import React from 'react'
import { Card, CardActionArea } from '@material-ui/core'
import '../../css/playCard.css'
import Shape from './shape'

const PlayCard = ({inpool, position, qty, onCardPick, ...shapeColorFill}) => (

		<Card onClick={() => onCardPick(position)} className={inpool ? 'inpool' : null}>
			<CardActionArea className="playcard" position={position}>
				{
					Array.from({length: qty}, (_,key) => <Shape {...shapeColorFill} key={key} />)
				}
			</CardActionArea>
		</Card>
)
					
export default PlayCard					
