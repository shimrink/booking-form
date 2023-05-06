import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html {
	height: 100%;
	margin: 0;
	user-select: none;
	-webkit-user-drag: none;
}

*, *:before, *:after {
	box-sizing: border-box;
	-webkit-tap-highlight-color: transparent;
}

body {
	margin: 0;
	height: 100%;
	background-color: #222;
	color: #FFF;
	font-family: sans-serif;
	overflow-x: hidden;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#root {
	height: 100%;
}

p {
	margin: 0;
}

label {
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-right: 20px;
	font-size: 14px;
	&:last-child {
		margin-right: 0;
	}
	@media screen and (max-width: 768px) {
		margin-bottom: 20px;
	}
}

input, textarea, select {
	font-size: 16px;
	padding: 5px;
	margin-top: 5px;
	height: 40px;
	border: none;
	transition: background-color 0.3s;
	&:focus {
		outline: none;
		background-color: #CCC;
	}
}

textarea {
	height: auto;
	resize: none;
}

option {
	background-color: #FFF;
}

.row {
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
}
`
