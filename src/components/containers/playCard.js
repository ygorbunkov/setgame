import PlayCard from '../ui/playCard'
import * as actions from '../../store/actions'
import { connect } from 'react-redux'

const 	{ PICK } = actions,
		mapStateToProps = ({board, pool}, {position}) => ({...board[position], inpool: pool.includes(position)}),
		mapDispatchToProps = dispatch => ({onCardPick: position => dispatch({type:PICK, payload:position})}),
		Container = connect(mapStateToProps, mapDispatchToProps)(PlayCard)
		
export { Container }		
