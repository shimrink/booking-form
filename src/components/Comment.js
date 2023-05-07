import React, { useContext } from 'react'
import { StateContext } from '../App'

const Comment = () => {
	const { state, dispatch } = useContext(StateContext)

	const handleCommentChange = (e) => {
		dispatch({
			type: 'COMMENT_CHANGE',
			value: e.target.value,
		})
	}

	return (
		<div className='row'>
			<label>
				Комментарий
				<textarea
					rows='3'
					value={state.comment}
					onChange={handleCommentChange}
				/>
			</label>
		</div>
	)
}

export default Comment
