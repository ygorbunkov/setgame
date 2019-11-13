import ScoreCard from '../ui/scoreCard'
import { connect } from 'react-redux'

const mapStateToProps = ({score}) => ({score})

export const Container = connect(mapStateToProps)(ScoreCard)
