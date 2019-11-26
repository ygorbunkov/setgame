import { Board } from '../ui/board'
import { connect } from 'react-redux'

const 	mapStateToProps = ({board}) => ({boardSize: board.length}),
		Container = connect(mapStateToProps)(Board)
		
export { Container }		
