import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import rootReducer from '../reducers'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel2,
	whitelist: ['decks', 'notifications'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
	let store = createStore(
		persistedReducer,
		undefined,
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	)
	let persistor = persistStore(store)
	return { store, persistor }
}
