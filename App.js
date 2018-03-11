import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import styled from 'styled-components/native'
import { View } from 'react-native'
import CustomStatusBar from './components/CustomStatusBar'
import MainNavigator from './components/Navigation'
import COLORS from './styles/colors'

// TODO: Store everything in Redux
// TODO: Persist Redux store to AsyncStorage
// TODO: Add daily push notification reminder

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppContainer>
					<CustomStatusBar
						backgroundColor={COLORS.accent}
						barStyle="light-content"
					/>
					<MainNavigator style={{ flex: 1 }} />
				</AppContainer>
			</Provider>
		)
	}
}

const AppContainer = styled(View)`
	flex: 1;
`
