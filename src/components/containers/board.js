import { Board } from '../ui/board'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
	boardSize: state.board.length
})

export const Container = connect(mapStateToProps)(Board)
