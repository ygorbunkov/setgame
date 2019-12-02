import React from 'react'
import scoreTitle from '../../img/score.svg'
import deckSize from '../../img/deck.svg'
import stopWatch from '../../img/time.svg'
import '../../css/rightPane.css'
import { Container as ScoreCard } from '../containers/scoreCard'
import { Container as DeckSize } from '../containers/deckSize'
import { Container as RestartButton } from '../containers/restartButton'
import { Container as Stopwatch } from '../containers/stopwatch'

const RightPane = ({score}) => (
		<div>
			<img alt="score" src={scoreTitle} className="rightpaneimg" />
			<ScoreCard />
			<img alt="deck" src={deckSize} className="rightpaneimg" />
			<DeckSize />
			<img alt="deck" src={stopWatch} className="rightpaneimg" />
			<Stopwatch />
			<RestartButton style={{marginTop:'20%',marginLeft:'25%'}}/>
		</div>
)


export default RightPane