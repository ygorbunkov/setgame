import Stopwatch from '../ui/stopwatch'
import { connect } from 'react-redux'

const mapStateToProps = ({time}) => ({time})

const mapDispatchToProps = dispatch => ({
	timeTick: () => dispatch({type: 'TIMETICK'})
})

export const Container = connect(mapStateToProps, mapDispatchToProps)(Stopwatch)

