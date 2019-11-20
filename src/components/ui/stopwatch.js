import React from 'react'
import { Typography } from '@material-ui/core'

const Stopwatch = ({count}) => (
	<Typography variant="h3" style={{width:'50%', margin:'auto', textAlign: 'center'}}>{count}s</Typography>
)

export default Stopwatch