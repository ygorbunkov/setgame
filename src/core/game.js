const COLORS = ['red','green','purple'];
const SHAPES = ['diamond','squiggle','oval'];
const FILLS = ['solid','striped','open'];

export const 	genDeck = () => 
					Array
						.from({length:81}, (_,i) => ({
							color: COLORS[i%3],
							shape: SHAPES[0|(i/3)%3],
							fill: FILLS[0|(i/9)%3],
							qty: 0|(i/27)%3+1
						}))
						.reduceRight((r,_,__,s) => (r.push(s.splice(0|Math.random()*s.length,1)[0]), r),[]),
		
				isSet = pick => 
					['color','shape','fill','qty'].every(attr => new Set(pick.map(card => card[attr])).size != 2),
	
				hasSet = board => {
					const pairs = Array
							.from({length: board.length-1}, (_,i) => 
								Array
									.from({length: board.length-1-i}, (_,j) => 
										[i,i+j+1]))
							.flat()
					return board.some((card,posA) => 
						pairs.some(([posB,posC]) => 
							posA != posB && 
							posA != posC && 
							isSet([board[posA],board[posB],board[posC]])))
				}	

