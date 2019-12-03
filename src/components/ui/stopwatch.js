import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'

const Stopwatch = ({time, timeTick, complete}) => {
	
	useEffect(() => {
		if(complete) clearInterval(window.stopwatch)
		else if(!time) window.stopwatch = setInterval(timeTick, 1000)
	})
	
	const formatTime = seconds => {
		if(!seconds) return '0s'
		const splitUnits = [
			{unit: 'd', multiplier: 864E2},
			{unit: 'h', multiplier: 36E2},
			{unit: 'm', multiplier: 60},
			{unit: 's', multiplier: 1}
		]
		return splitUnits
			.reduce((r,{unit,multiplier},i,s) => 
				seconds < multiplier ?
				r :
				(r.push({unit, val: 0|seconds/multiplier}), seconds = seconds%multiplier, r), [])
			.slice(0,2)
			.map(({unit,val}) => val+unit)
			.join('')
	}
	
	return (
		<Typography variant="h3" style={{width:'50%', margin:'auto', textAlign: 'center'}}>{formatTime(time)}</Typography>
	)
}

export default Stopwatch