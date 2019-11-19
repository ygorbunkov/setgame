import * as coreFunctions from '../core/game'
import * as actions from './actions'
import initialState from './initialState.json'

const 	{DEAL, PICK, RESTART, COMPLETE} = actions,
		{genDeck, isSet, hasSet} = coreFunctions


const appReducer = (state = initialState, action) => {
	
	switch(action.type){
		
		case DEAL : {
			
			let {deck, board, pool} = state
	
			if(!board.length){
				deck = genDeck()
				board = []
				pool.length = 0
			}
			
			else if(board.includes(null)) {
				const 	noNullBoard = board.filter(card => card),
						noGapBoard = board.map(card => !card ? deck.pop() : card)
				board = board.length > 11 && hasSet(noNullBoard) ? noNullBoard : noGapBoard
			}

			while ((board.length < 12 || !hasSet(board)) && deck.length) board.push(...deck.splice(0,3))
				
			return {...state, deck, board}
			
		}
		
		case PICK : {
			let 	{pool, board, score} = state,
					pos = action.payload
	
			if(pool.includes(pos)) pool = pool.filter(e => e != pos)
			
			else if(pool.length == 2) {
				const	tripletIndexes = [...pool,pos],
						triplet = tripletIndexes.map(p => board[p])						
				if(isSet(triplet)) {
					board = board.map((card,i) => tripletIndexes.includes(i) ? null : card)
					state = appReducer({...state, board}, {type: DEAL})
					board = state.board
					score++
				}
				pool.length = 0
			}
			
			else pool.push(pos)
			
			return {...state, pool, board, score}
		}
		
		case RESTART : {
			return appReducer(initialState, {type: DEAL})
		}
		
		default : return state
	}
}

export default appReducer
