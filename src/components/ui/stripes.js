import React from 'react'

export const Stripes = props => (
	<pattern id={`${props.color}stripes`} patternUnits="userSpaceOnUse" width="4" height="4">
	  <path d="M -1,1 l2,-2 M 0,4 l4,-4 M 3,5 l2,-2" 
			style={{stroke: props.color, strokeWidth: 1}} />
	</pattern>
) 
