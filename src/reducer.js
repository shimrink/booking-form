import { initialState } from './initialState'

export const reducer = (prevState, action) => {
	switch (action.type) {
		case 'TOWER_CHANGE':
			return {
				...prevState,
				tower: action.value,
			}
		case 'FLOOR_CHANGE':
			return {
				...prevState,
				floor: action.value,
			}
		case 'MEETING_ROOM_CHANGE':
			return {
				...prevState,
				meetingRoom: action.value,
			}
		case 'DATE_CHANGE':
			return {
				...prevState,
				date: action.value,
			}
		case 'START_TIME_CHANGE':
			return {
				...prevState,
				startTime: action.value,
			}
		case 'END_TIME_CHANGE':
			return {
				...prevState,
				endTime: action.value,
			}
		case 'COMMENT_CHANGE':
			return {
				...prevState,
				comment: action.value,
			}
		case 'CLEAR_FORM':
			return {
				...initialState,
			}
		case 'DATE_BLUR':
			return {
				...prevState,
				isDateValid: prevState.date !== '',
			}
		case 'TIME_BLUR':
			if (prevState.startTime === '' || prevState.endTime === '') {
				return {
					...prevState,
					isTimeValid: undefined,
				}
			}
			return {
				...prevState,
				isTimeValid: prevState.startTime < prevState.endTime,
			}
		default:
			throw Error('Unknown action: ' + action.type)
	}
}
