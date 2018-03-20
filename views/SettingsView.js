import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Platform, View, Alert, Linking, AppState } from 'react-native'
import { Section, Cell } from 'react-native-tableview-simple'
import COLORS from '../styles/colors'
import { Permissions, Notifications } from 'expo'
import {
	askNotificationPermissions,
	setNotificationPreference,
} from '../actions'
import moment from 'moment'

class SettingsView extends Component {
	state = {
		notificationSwitch: null,
	}

	_checkNotificationPermissions = async () => {
		const { notifications, askNotificationPermissions } = this.props
		// On iOS, we need to ask the user for permissions
		const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
		if (!notifications.isPermissionsAsked) {
			askNotificationPermissions() // Fire off an action to Redux to say that we have asked for permissions
		}
		if (status === 'granted') {
			return 'granted'
		} else {
			return 'denied'
		}
	}

	_onLoad = () => {
		// This is a function to initialize the notification toggle state, based on a combination of the user’s device notification preferences and previously stored preferences.
		const { notifications } = this.props
		// Only trigger this if we have already asked for permissions, so that we don’t ask the user for notification permissions outright, but wait until they expressedly interact with the toggle
		if (notifications.isPermissionsAsked) {
			this._checkNotificationPermissions().then(response => {
				// Whether our user has granted or denied permission, make sure to update our switch to reflect that
				if (response === 'denied') {
					this.setState({ notificationSwitch: false })
				} else if (response === 'granted') {
					// Set state to whatever is user’s preference
					const { areNotificationsEnabled } = this.props.notifications
					this.setState({ notificationSwitch: areNotificationsEnabled })
				}
			})
		}
	}

	componentWillMount() {
		this.props.navigation.addListener('willFocus', this._onLoad) // Trigger onLoad when tab comes into focus
		AppState.addEventListener('change', this._onLoad) // Trigger onLoad when app comes into focus
	}
	componentDidMount() {
		this._onLoad()
	}

	_scheduleNotifications() {
		const localNotification = {
			title: 'Time to revise!',
			body: '🕛 🧠 ⚡️',
			data: { type: 'delayed' },
		}

		const tomorrow = moment()
			.add(1, 'days')
			.hours(12)
			.startOf('hour')
			.valueOf()

		const schedulingOptions = {
			time: tomorrow, // Schedule a notification that starts tomorrow
			repeat: 'day', // Repeat daily
		}

		console.log('Scheduling delayed notification:', {
			localNotification,
			schedulingOptions,
		})

		Notifications.scheduleLocalNotificationAsync(
			localNotification,
			schedulingOptions,
		)
			.then(() => console.info('Delayed notification scheduled'))
			.catch(err => console.error(err))
	}

	switchToggle = value => {
		const { setNotificationPreference } = this.props
		if (value === true) {
			this.setState({ notificationSwitch: true })
			this._checkNotificationPermissions().then(response => {
				if (response === 'granted') {
					// First case: User has already granted permission, and is asking to enable notifications
					this._scheduleNotifications()
					setNotificationPreference(true)
				} else if (response === 'denied') {
					// Second case: User has not granted permission, and is asking to enable notifications
					this.setState({ notificationSwitch: false })
					Alert.alert(
						'Notifications could not be turned on',
						'It looks like you disabled notifications for this app. To enable notifications, first go to Settings to allow access.',
						[
							{
								text: 'Cancel',
							},
							{
								text: 'Go to Settings',
								onPress: () =>
									Linking.openURL('app-settings://notification/Expo'), // TODO: Change to standalone app name if this app is not running in Expo
							},
						],
					)
				}
			})
		} else if (value === false) {
			this.setState({ notificationSwitch: false })

			// Third case: Disable notifications

			setNotificationPreference(false)

			console.log('Cancelling scheduled notifications')

			Notifications.cancelAllScheduledNotificationsAsync() // Cancel all scheduled notifications
				.then(() => console.info('Cancelled scheduled notifications'))
				.catch(err => console.error(err))
		}
	}
	render() {
		return (
			<View
				style={{ paddingTop: 16, flex: 1, backgroundColor: COLORS.background }}
			>
				<Section
					header="NOTIFICATIONS"
					footer="Turn this on to receive a friendly reminder at 12pm daily."
					sectionTintColor={COLORS.background}
					headerTextColor={COLORS.primary}
					footerTextColor={COLORS.subtle}
				>
					<Cell
						title="Remind me to revise"
						titleTextColor={COLORS.primary}
						cellAccessoryView={
							(Platform.OS === 'android' && (
								<Switch
									value={this.state.notificationSwitch}
									tintColor={COLORS.background}
									onTintColor={COLORS.accentFaded}
									thumbTintColor={COLORS.accent}
									onValueChange={this.switchToggle}
								/>
							)) ||
							(Platform.OS === 'ios' && (
								<Switch
									value={this.state.notificationSwitch}
									onTintColor={COLORS.accent}
									onValueChange={this.switchToggle}
								/>
							))
						}
						contentContainerStyle={{ paddingVertical: 4 }} // Adjust height
					/>
				</Section>
			</View>
		)
	}
}

const mapStateToProps = ({ notifications }) => {
	return {
		notifications,
	}
}

export default connect(mapStateToProps, {
	askNotificationPermissions,
	setNotificationPreference,
})(SettingsView)
