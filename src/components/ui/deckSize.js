import React from 'react'
import { Typography } from '@material-ui/core'

const DeckSize = ({deckSize}) => (
	<Typography variant="h2" style={{width:'50%', margin:'auto', textAlign: 'center'}}> {deckSize} </Typography>
)

export default DeckSize