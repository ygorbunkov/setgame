import * as coreFunctions from '../core/game'
import * as actions from './actions'
import initialState from './initialState.json'

const 	{DEAL, PICK, RESTART, COMPLETE, TIMETICK} = actions,
		{genDeck, isSet, hasSet} = coreFunctions


const appReducer = (state = initialState, action) => {
	
	switch(action.type){
		
		case DEAL : {
			
			let deck = [...state.deck],
			    board = [...state.board],
			    pool = [...state.pool]

			if(!board.length){
				deck = genDeck()
				board = []
				pool.length = 0
			}
			
			else if(board.includes(null)) {
				const noNullBoard = board.filter(card => card)
				board = noNullBoard.length > 11 && 
				hasSet(noNullBoard) ? 
				noNullBoard : 
				board.map(card => !card ? deck.pop() : card)
			}

			while ((board.length < 12 || !hasSet(board)) && deck.length) board.push(...deck.splice(0,3))
				
			return {...state, deck, board}
			
		}
		
		case PICK : {
			let 	{pool, board, score, deck} = state,
					pos = action.payload
	
			if(pool.includes(pos)) pool = pool.filter(e => e != pos)
			
			else if(pool.length == 2) {
				const	tripletIndexes = [...pool,pos],
						triplet = tripletIndexes.map(p => board[p])						
				if(isSet(triplet)) {
					score++
					if(!deck.length && (board.length < 13 || !hasSet(board.filter((card,i) => !tripletIndexes.includes(i))))) state = appReducer(state, {type: COMPLETE})
					else {
						board = board.map((card,i) => tripletIndexes.includes(i) ? null : card)
						state = appReducer({...state, board}, {type: DEAL})
						board = state.board
					}
				}
				pool.length = 0
			}
			
			else pool.push(pos)
			
			return {...state, pool, board, score}
		}
		
		case RESTART : {
			return appReducer(initialState, {type: DEAL})
		}
		
		case TIMETICK : {
			let {time} = state
			return {...state, time:time+1}
		}
		
		case COMPLETE : {
			return {...state, complete: true}
		}
		
		default : return state
	}
}

export default appReducer
