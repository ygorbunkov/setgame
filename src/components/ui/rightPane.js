import React from 'react'
import scoreTitle from '../../img/score.svg'
import deckSize from '../../img/deck.svg'
import stopWatch from '../../img/time.svg'
import { Container as ScoreCard } from '../containers/scoreCard'
import { Container as DeckSize } from '../containers/deckSize'
import { Container as RestartButton} from '../containers/restartButton'
import Stopwatch from './stopwatch'

const RightPane = ({score}) => (
		<div>
			<img alt="score" src={scoreTitle} style={{width:100,margin:'100px 50px 20px 50px'}}/>
			<ScoreCard />
			<img alt="deck" src={deckSize} style={{width:100,margin:'100px 50px 20px 50px'}}/>
			<DeckSize />
			<img alt="deck" src={stopWatch} style={{width:100,margin:'100px 50px 20px 50px'}}/>
			<Stopwatch />
			<RestartButton />
		</div>
)


export default RightPane