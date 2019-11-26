import ScoreCard from '../ui/scoreCard'
import { connect } from 'react-redux'

const 	mapStateToProps = ({score}) => ({score}),
		Container = connect(mapStateToProps)(ScoreCard)
		
export { Container }		
