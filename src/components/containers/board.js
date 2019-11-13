import { Board } from '../ui/board'
import { connect } from 'react-redux'

const mapStateToProps = ({board}) => ({
	boardSize: board.length
})

export const Container = connect(mapStateToProps)(Board)
