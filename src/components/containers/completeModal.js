import CompleteModal from '../ui/completeModal'
import { connect } from 'react-redux'

const 	mapStateToProps = ({complete,score,time}) => ({complete,score,time}),
		Container = connect(mapStateToProps)(CompleteModal)
		
export { Container }		