import { connect } from 'react-redux'
import DeckSize from '../ui/deckSize'

const 	mapStateToProps = ({deck}) => ({deckSize: deck.length}),
		Container = connect(mapStateToProps) (DeckSize)
		
export { Container }		