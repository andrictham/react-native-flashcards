import { ADD_DECK, ADD_FLASHCARD } from '../actions'
import { initialDecks } from '../utils/helpers'

const decks = (state = initialDecks, action) => {
	switch (action.type) {
	case ADD_DECK:
		const { title } = action
		return {
			...state,
			[title]: {
				key: Math.random(),
				title,
				cards: [],
			},
		}
	default:
		return state
	}
}

export default decks
