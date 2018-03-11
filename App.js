import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import CustomStatusBar from './components/CustomStatusBar'
import MainNavigator from './components/Navigation'
import COLORS from './styles/colors'
import configureStore from './utils/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

// TODO: Store everything in Redux
// TODO: Persist Redux store to AsyncStorage
// TODO: Add daily push notification reminder

const { store, persistor } = configureStore()

// const store = createStore(
// 	rootReducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// )

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
					<AppContainer>
						<CustomStatusBar
							backgroundColor={COLORS.accent}
							barStyle="light-content"
						/>
						<MainNavigator style={{ flex: 1 }} />
					</AppContainer>
				</PersistGate>
			</Provider>
		)
	}
}

const AppContainer = styled(View)`
	flex: 1;
`
