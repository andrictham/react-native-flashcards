export const ADD_DECK = 'ADD_DECK'
export const ADD_FLASHCARD = 'ADD_FLASHCARD'

export const addDeck = title => {
	return {
		type: ADD_DECK,
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
