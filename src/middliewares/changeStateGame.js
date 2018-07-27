import {REQUEST, ANSWER, TIMER, SCORING, ANSWER_TYPE, TIME_LIMITS, TASK_COUNT, RESULT_GAME} from '../constans'

export default store => next => action => {
	
	if(action.type != ANSWER) return next(action)	

	const {points, answerType, type} = action
	const {NORMAL, FAST, SLOW, WRONG, UNKNOWN} = ANSWER_TYPE
	const {QICKLY, SLOWLY, INITIAL} = TIME_LIMITS
	const {WIN, FAIL} = RESULT_GAME
	const stateGame = store.getState().stateGame
	
	if (answerType === ANSWER_TYPE.FAST || answerType === ANSWER_TYPE.SLOW || answerType === ANSWER_TYPE.NORMAL) {
		stateGame.level = stateGame.level + 1
		stateGame.results = [...stateGame.results, answerType]
		next({stateGame: stateGame, ...action})
	} else {
		if(stateGame.lives - 1 < 0) {
			stateGame.resultGame = FAIL
			next({stateGame: stateGame, ...action})
		} else if(stateGame.level === TASK_COUNT) {
			stateGame.resultGame = WIN
			next({stateGame: stateGame, ...action})
		} else {
		stateGame.lives = stateGame.lives - 1
		stateGame.level = stateGame.level + 1
		stateGame.results = [...stateGame.results, answerType]
		next({stateGame: stateGame, ...action})
		}
	}
	
}