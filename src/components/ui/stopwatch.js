import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'

const Stopwatch = ({time,timeTick}) => {
	
	useEffect(() => {window.stopwatch = setInterval(timeTick, 1000)},[])
	
	const formatTime = seconds => {
		const splitUnits = [
			{unit: 'd', multiplier: 864E2},
			{unit: 'h', multiplier: 36E2},
			{unit: 'm', multiplier: 60},
			{unit: 's', multiplier: 1}
		]
		return splitUnits
			.reduce((r,{unit,multiplier},i,s) => 
				r.length < 2 && seconds > multiplier ?
				(r.push({unit, val: 0|seconds/multiplier}), seconds = seconds%multiplier, r) :
				r, [])
			.map(({unit,val}) => val+unit)
			.join('')
	}
	
	return (
		<Typography variant="h3" style={{width:'50%', margin:'auto', textAlign: 'center'}}>{formatTime(time)}</Typography>
	)
}

export default Stopwatch