import {
	ADD_DECK,
	ADD_FLASHCARD,
	ASK_NOTIFICATION_PERMISSIONS,
	SET_NOTIFICATION_PREFERENCE,
} from '../actions'
import { combineReducers } from 'redux'
import { initialDecks } from '../utils/helpers'

const decks = (state = initialDecks, action) => {
	switch (action.type) {
	case ADD_DECK:
		const { deckID, title } = action
		return {
			[deckID]: {
				title,
				cards: [],
			},
			...state,
		}
	case ADD_FLASHCARD:
		const { id, question, answer } = action
		return {
			...state,
			[id]: {
				...state[id],
				cards: [
					...state[id].cards,
					{
						question,
						answer,
					},
				],
			},
		}
	default:
		return state
	}
}

const notifications = (
	state = {
		isPermissionsAsked: false,
		areNotificationsEnabled: false,
	},
	action,
) => {
	switch (action.type) {
	case ASK_NOTIFICATION_PERMISSIONS:
		return {
			...state,
			isPermissionsAsked: true,
		}
	case SET_NOTIFICATION_PREFERENCE:
		const { option } = action
		return {
			...state,
			areNotificationsEnabled: option,
		}
	default:
		return state
	}
}

const rootReducer = combineReducers({
	decks,
	notifications,
})

export default rootReducer
