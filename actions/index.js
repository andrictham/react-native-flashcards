export const ADD_DECK = 'ADD_DECK'
export const ADD_FLASHCARD = 'ADD_FLASHCARD'

export const addDeck = ({ id, title }) => {
	return {
		type: ADD_DECK,
		deckID: id,
		title,
	}
}

export const addFlashcard = ({ id, question, answer }) => {
	return {
		type: ADD_FLASHCARD,
		id,
		question,
		answer,
	}
}
