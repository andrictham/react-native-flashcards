export const ADD_DECK = 'ADD_DECK'
export const ADD_FLASHCARD = 'ADD_FLASHCARD'

export const addDeck = title => {
	return {
		type: ADD_DECK,
		title,
	}
}
