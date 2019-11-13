import { genDeck, isSet, hasSet } from '../core/game'

const 	initialState = {
			deck: [],
			board: [],
			pool: [],
			score: 0
		},
		DEAL = 'DEAL',
		PICK = 'PICK'

export const appReducer = (state = initialState, action) => {
	
	switch(action.type){
		
		case DEAL : {
			
			let {deck, board} = state
	
			if(!state.deck.length){
				deck = genDeck()
				board = []
			}
			
			else if(state.board.includes(null)) {
				board = state.board.map(card => !card ? deck.pop() : card)
			}

			while (board.length < 12 || !hasSet(board)) board.push(...deck.splice(0,3))
				
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
		default : return state
	}
}
