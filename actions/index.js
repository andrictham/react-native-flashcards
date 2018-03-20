export const ADD_DECK = 'ADD_DECK'
export const ADD_FLASHCARD = 'ADD_FLASHCARD'

export const ASK_NOTIFICATION_PERMISSIONS = 'ASK_NOTIFICATION_PERMISSIONS'
export const SET_NOTIFICATION_PREFERENCE = 'SET_NOTIFICATION_PREFERENCE'

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

export const askNotificationPermissions = () => {
	return {
		type: ASK_NOTIFICATION_PERMISSIONS,
	}
}

export const setNotificationPreference = option => {
	return {
		type: SET_NOTIFICATION_PREFERENCE,
		option, // true || false
	}
}
