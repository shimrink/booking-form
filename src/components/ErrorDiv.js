import React, { useContext } from 'react'
import { StateContext } from '../App'
import styled from 'styled-components'

const Wrap = styled.div`
	padding: 10px 20px;
	margin-bottom: 40px;
	border: 2px solid red;
	font-size: 18px;
`
const ErrorDiv = () => {
	const { state } = useContext(StateContext)

	if (state.isDateValid === false) {
		return (
			<Wrap>
				<p>Введите дату</p>
			</Wrap>
		)
	}
	if (state.isTimeValid === false) {
		return (
			<Wrap>
				<p>Время окончания должно быть больше времени начала</p>
			</Wrap>
		)
	}
	return null
}

export default ErrorDiv
