import PlayCard from '../ui/playCard'
import { connect } from 'react-redux'

const mapStateToProps = (state, {position}) => state.board[position]

const mapDispatchToProps = dispatch => ({
	onCardPick: position => dispatch({type:'PICK',payload:position})
})


export const Container = connect(mapStateToProps, mapDispatchToProps)(PlayCard)
