import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import CustomStatusBar from './components/CustomStatusBar'
import MainNavigator from './components/Navigation'
import COLORS from './styles/colors'
import configureStore from './utils/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

// TODO: Add daily push notification reminder

class App extends React.Component {
	render() {
		return (
			<Provider store={configureStore().store}>
				<PersistGate
					loading={<Text>Loading...</Text>}
					persistor={configureStore().persistor}
				>
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
export default App
