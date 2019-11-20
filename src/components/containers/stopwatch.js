import React, { useEffect, useRef } from 'react'
import Stopwatch from '../ui/stopwatch'

export const Container = () => {
	
	const count = useRef(0)
	
	let currentCount = count.current
	
	useEffect(() => count.current = currentCount)
	
	currentCount += 1
	
	return  <Stopwatch count={currentCount} />
}

