import { connect } from 'react-redux'
import RestartButton from '../ui/restartButton'

const mapDispatchToProps = dispatch => ({
	onHitRestart: () => dispatch({type: 'RESTART'})
})

export const Container = connect(null, mapDispatchToProps)(RestartButton)