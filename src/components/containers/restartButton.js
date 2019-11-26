import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import RestartButton from '../ui/restartButton'

const 	{ RESTART } = actions,
		mapDispatchToProps = dispatch => ({onHitRestart: () => dispatch({type: RESTART})}),
		Container = connect(null, mapDispatchToProps)(RestartButton)
		
export { Container }		