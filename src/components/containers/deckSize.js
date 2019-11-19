import { connect } from 'react-redux'
import DeckSize from '../ui/deckSize'

const mapStateToProps = ({deck}) => ({deckSize: deck.length})

export const Container = connect(mapStateToProps) (DeckSize)