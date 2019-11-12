import PlayCard from '../ui/playCard'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {	
	const 	{position} = ownProps,
			{shape, color, fill, qty} = state.board[position]		
	return 	{shape, color, fill, qty}
}


export const Container = connect(mapStateToProps)(PlayCard)
