import Stopwatch from '../ui/stopwatch'
import * as actions from '../../store/actions'
import { connect } from 'react-redux'

const	{ TIMETICK } = actions,
		mapStateToProps = ({time, complete}) => ({time, complete}),
		mapDispatchToProps = dispatch => ({timeTick: () => dispatch({type: TIMETICK})}),
		Container = connect(mapStateToProps, mapDispatchToProps)(Stopwatch)
		
export { Container }		

