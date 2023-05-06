import React, { useContext } from 'react'
import { StateContext } from '../../App'

const Location = () => {
	const { state, dispatch } = useContext(StateContext)

	const handleTowerChange = (e) => {
		dispatch({
			type: 'TOWER_CHANGE',
			value: e.target.value,
		})
	}

	const handleFloorChange = (e) => {
		dispatch({
			type: 'FLOOR_CHANGE',
			value: e.target.value,
		})
	}

	const handleMeetingRoomChange = (e) => {
		dispatch({
			type: 'MEETING_ROOM_CHANGE',
			value: e.target.value,
		})
	}

	return (
		<div className='row'>
			<label>
				Башня
				<select value={state.tower} onChange={handleTowerChange}>
					<option value='A'>A</option>
					<option value='B'>B</option>
				</select>
			</label>
			<label>
				Этаж
				<select value={state.floor} onChange={handleFloorChange}>
					{[...Array(25)].map((v, i) => (
						<option key={`floor${i + 3}`} value={i + 3}>
							{i + 3}
						</option>
					))}
				</select>
			</label>
			<label>
				Переговорная
				<select value={state.meetingRoom} onChange={handleMeetingRoomChange}>
					{[...Array(10)].map((v, i) => (
						<option key={`meetingRoom${i + 1}`} value={i + 1}>
							{i + 1}
						</option>
					))}
				</select>
			</label>
		</div>
	)
}

export default Location
