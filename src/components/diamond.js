import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

export const Diamond = (props) => {
	
	const 	{color, fill} = props,
			useStyles = makeStyles({
				diamond: {
					width: 100,
					height: 50,
					margin: 20
				},
				striped: {
					background: 'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)'
				},
				solid: {
					backgroundColor: color
				},
				open: {
					backgroundColor: 'none'
				}
				
			}),
			classes = useStyles()
	
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={classes.diamond}>
		  <defs>
			<clipPath>
			  <path d="M2.722 3.682h101.665v49.472H2.722z"/>
			</clipPath>
		  </defs>
		  <path 
			d="M5.043 28.258l48.43-23.215 48.43 23.215-48.43 23.215z" 
			fill="none"
			transform="translate(-2.493 -3.591)" 
			stroke={color} 
			strokeWidth="2"
			className={classes[fill]}
			/>
		</svg>

)}
