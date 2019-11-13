import React from 'react'
import scoreTitle from '../../img/score.svg'
import { Container as ScoreCard } from '../containers/scoreCard'

const RightPane = ({score}) => (
		<div>
			<img src={scoreTitle} style={{width:100,margin:'100px 50px 20px 50px'}}/>
			<ScoreCard />
		</div>
)


export default RightPane