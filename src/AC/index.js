import {REQUEST_SUCCESS, GET_ANSWER, LOAD_START, OPEN_GREETING, OPEN_RULES, OPEN_GAME_SCREEN, OPEN_INTRO} from '../constans'

export function request() {
	
	return (dispatch) => {
		dispatch({
			type: LOAD_START
		})
		
		
		fetch('https://es.dump.academy/pixel-hunter/questions')
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				dispatch({
					type: REQUEST_SUCCESS, 
					payload: data})				
			})
		
	}
}

export function onAnswerGiven(answer, task, startTime, finishTime) {
	return {
		type: GET_ANSWER,
		payload: {answer, task, startTime, finishTime}
	}
}

export function openGreeting() {
	return {
		type: OPEN_GREETING
	}
}

export function openRules() {
	return {
		type: OPEN_RULES
	}
}

export function openGameScreen() {
	return {
		type: OPEN_GAME_SCREEN
	}
}

export function returnToIntroPage() {
	return (dispatch, getState) => {
		const state = getState()
		const level = state.stateGame.level
		const confirmationPage = state.pages.confirmationPage
		dispatch({
			type: OPEN_INTRO,
			payload: {level, confirmationPage}
		})
	}
}
