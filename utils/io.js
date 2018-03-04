import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = '@RNFlashcards:Decks'

export const getDecks = () => {}

export const getDeck = id => {
	return id
}

export const saveDeckTitle = title => {
	return title
}

export const addCardToDeck = ({ title, card }) => {
	return {
		title,
		card,
	}
}
