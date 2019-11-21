import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'

const Stopwatch = ({time,timeTick}) => {
	useEffect(() => {window.stopwatch = setInterval(timeTick, 1000)},[])
	return (
		<Typography variant="h3" style={{width:'50%', margin:'auto', textAlign: 'center'}}>{time}</Typography>
	)
}

export default Stopwatch