import React, { useReducer } from 'react'
import styled from 'styled-components'
import { reducer } from './reducer'
import { initialState } from './initialState'
import Location from './components/Location'
import Date from './components/DateAndTime'
import Comment from './components/Comment'
import Buttons from './components/Buttons'
import ErrorDiv from './components/ErrorDiv'

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding: 40px;
	@media screen and (max-width: 768px) {
		justify-content: flex-end;
		height: auto;
	}
`
const Title = styled.h1`
	position: absolute;
	top: 40px;
	font-weight: normal;
	font-size: 40px;
	text-align: center;
	margin: 0;
	@media screen and (max-width: 768px) {
		font-size: 30px;
	}
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 600px;
	padding-top: 80px;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`
export const StateContext = React.createContext()

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(state)
	}

	return (
		<StateContext.Provider value={{ state: state, dispatch: dispatch }}>
			<Wrap>
				<Title>Бронирование переговорной</Title>
				<Form onSubmit={handleSubmit}>
					<Location />
					<Date />
					<Comment />
					<ErrorDiv />
					<Buttons />
				</Form>
			</Wrap>
		</StateContext.Provider>
	)
}

export default App
