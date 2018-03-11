import { ADD_DECK, ADD_FLASHCARD } from '../actions'
import { combineReducers } from 'redux'
import { initialDecks } from '../utils/helpers'
import uuid from 'react-native-uuid'

const decks = (state = initialDecks, action) => {
	switch (action.type) {
	case ADD_DECK:
		const { title } = action
		const uniqueID = uuid.v4()
		return {
			[uniqueID]: {
				id: uniqueID,
				title,
				cards: [],
			},
			...state,
		}
	default:
		return state
	}
}

const rootReducer = combineReducers({
	decks,
})

export default rootReducer
