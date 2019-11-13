import React from 'react'
import { Typography } from '@material-ui/core'

const ScoreCard = ({score}) => (
	<Typography variant="h1" style={{width:'50%', margin:'auto', textAlign: 'center'}}> {score} </Typography>
)

export default ScoreCard