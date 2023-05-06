import React, { useContext } from 'react'
import { StateContext } from '../../App'
import styled from 'styled-components'

const ValidInput = styled.input`
	border: ${({ valid }) =>
		valid === false ? '2px solid red' : '0px solid #222'};
	transition: border-color 50ms, border-width 50ms;
`
const DateAndTime = () => {
	const { state, dispatch } = useContext(StateContext)

	const handleDateChange = (e) => {
		dispatch({
			type: 'DATE_CHANGE',
			value: e.target.value,
		})
	}

	const handleStartTimeChange = (e) => {
		dispatch({
			type: 'START_TIME_CHANGE',
			value: e.target.value,
		})
	}

	const handleEndTimeChange = (e) => {
		dispatch({
			type: 'END_TIME_CHANGE',
			value: e.target.value,
		})
	}

	const validateDateHandler = () => {
		dispatch({ type: 'DATE_BLUR' })
	}

	const validateTimeHandler = () => {
		dispatch({ type: 'TIME_BLUR' })
	}

	return (
		<div className='row'>
			<label>
				Дата
				<ValidInput
					type='date'
					value={state.date}
					onChange={handleDateChange}
					onBlur={validateDateHandler}
					valid={state.isDateValid}
				/>
			</label>
			<label>
				Время начала
				<ValidInput
					type='time'
					value={state.startTime}
					onChange={handleStartTimeChange}
					onBlur={validateTimeHandler}
					valid={state.isTimeValid}
				/>
			</label>
			<label>
				Время окончания
				<ValidInput
					type='time'
					value={state.endTime}
					onChange={handleEndTimeChange}
					onBlur={validateTimeHandler}
					valid={state.isTimeValid}
				/>
			</label>
		</div>
	)
}

export default DateAndTime
