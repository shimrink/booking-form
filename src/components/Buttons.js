import React, { useContext } from 'react'
import styled from 'styled-components'
import { StateContext } from '../App'

const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
`
const Button = styled.button`
	width: 100%;
	padding: 10px;
	border: none;
	font-size: 16px;
	color: #fff;
	cursor: pointer;
	transition: background-color 0.3s;
`
const Clear = styled(Button)`
	background-color: #80afff;
	margin-right: 10px;
	&:hover {
		background-color: #649bf9;
	}
`
const Submit = styled(Button)`
	background-color: #ee79e1;
	margin-left: 10px;
	&:hover {
		background-color: #ea57d9;
	}
	&:disabled {
		background-color: #808080;
	}
`
const Buttons = () => {
	const { state, dispatch } = useContext(StateContext)

	const clearForm = () => {
		dispatch({ type: 'CLEAR_FORM' })
	}

	return (
		<Wrap>
			<Clear type='button' onClick={clearForm}>
				Очистить
			</Clear>
			<Submit type='submit' disabled={!state.isDateValid || !state.isTimeValid}>
				Отправить
			</Submit>
		</Wrap>
	)
}

export default Buttons
