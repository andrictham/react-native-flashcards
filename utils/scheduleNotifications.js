import moment from 'moment'
import { Notifications } from 'expo'

export const scheduleNotifications = () => {
	// Schedule a local notification using Expo’s built-in feature
	const localNotification = {
		title: 'Time to revise!',
		body: '🕛 🧠 ⚡️',
		data: { type: 'delayed' },
	}

	// We want to schedule it at a fixed time tomorrow
	const tomorrow = moment()
		.add(1, 'days') // Tomorrow
		.hours(18) // at 6pm
		.startOf('hour')
		.valueOf() // Convert to Unix Epoch (milliseconds)

	// Expo’s `scheduleLocalNotificationAsync()` expects a config object
	const schedulingOptions = {
		time: tomorrow, // Schedule a notification that starts tomorrow
		repeat: 'day', // Repeat daily
	}

	console.log('Scheduling delayed notification:', {
		localNotification,
		schedulingOptions,
	})

	// Go ahead and schedule the actual notification
	Notifications.scheduleLocalNotificationAsync(
		localNotification,
		schedulingOptions,
	)
		.then(() => console.info('Delayed notification scheduled'))
		.catch(err => console.error(err))
}

export const cancelScheduledNotifications = () => {
	Notifications.cancelAllScheduledNotificationsAsync() // Cancel all scheduled notifications
		.then(() => console.info('Cancelled scheduled notifications'))
		.catch(err => console.error(err))
}
