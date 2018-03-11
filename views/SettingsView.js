import React, { Component } from 'react'
import { Switch, Platform } from 'react-native'
import { TableView, Section, Cell } from 'react-native-tableview-simple'
import COLORS from '../styles/colors'

// TODO: Option to toggle on/off notifications

class SettingsView extends Component {
	state = {
		notificationSwitch: true,
	}
	render() {
		return (
			<TableView>
				<Section
					header="NOTIFICATIONS"
					footer="Turn this on to receive a friendly reminder at 9am daily."
				>
					<Cell
						title="Remind me to revise"
						cellAccessoryView={
							(Platform.OS === 'android' && (
								<Switch
									value={this.state.notificationSwitch}
									tintColor={COLORS.background}
									onTintColor={COLORS.accentFaded}
									thumbTintColor={COLORS.accent}
								/>
							)) ||
							(Platform.OS === 'ios' && (
								<Switch
									value={this.state.notificationSwitch}
									onTintColor={COLORS.accent}
								/>
							))
						}
						contentContainerStyle={{ paddingVertical: 4 }} // Adjust height
					/>
				</Section>
			</TableView>
		)
	}
}

export default SettingsView
