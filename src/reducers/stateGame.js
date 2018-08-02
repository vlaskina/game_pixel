import {STATE_DEFAULT, GET_ANSWER, ANSWER_TYPE, TIME_LIMITS, RESULT_GAME, TASK_COUNT, OPEN_INTRO} from '../constans'

export default(state = STATE_DEFAULT, action) => {
	const {type} = action
	
	switch(type) {
		case OPEN_INTRO:
			if(action.payload.confirmationPage) return STATE_DEFAULT
			return state
		break
		case GET_ANSWER:
			const {answer, task, startTime, finishTime} = action.payload
			const {NORMAL, FAST, SLOW, WRONG, UNKNOWN} = ANSWER_TYPE
			const {QICKLY, SLOWLY, INITIAL} = TIME_LIMITS
			const {WIN, FAIL} = RESULT_GAME
			const time = (finishTime - startTime)/1000
			
			const finishGame = state.level === TASK_COUNT ? WIN : ""
			
			if(state.lives - 1 < 0) return {...state, endGame: FAIL}
			
			function getTypeAnswer(typeGame) {
				switch (typeGame) {
					case 'tinder-like':
						if (answer === task.answers[0].type) {
							return 'correctAnswer'
						} else {
							return 'incorrectAnswer'
						}
					break
					case 'two-of-two':
						const {answer1, answer2} = answer
						if (answer1 === task.answers[0].type && answer2 === task.answers[1].type) {
							return 'correctAnswer'
						} else {
							return 'incorrectAnswer'
						}
					break
					case 'one-of-three':
						const indexAnswer = +answer.slice(-1)
						
						if(task.question === "Найдите рисунок среди изображений") {
							if (task.answers[indexAnswer].type === "painting") {
								return 'correctAnswer'
							} else {
								return 'incorrectAnswer'
							}
						} else {
							if(task.answers[indexAnswer].type === "photo") {
								return 'correctAnswer'					
							} else {
								return 'incorrectAnswer'
							}
						}
					break
				}
			}
			

			function calcResults(time) {	
				if(time <= QICKLY) {
					return {
							level: state.level + 1,
							lives: state.lives,
							endGame: finishGame ? finishGame : '',
							poins: state.poins + 150,
							results: state.results.concat(FAST)
					}
				} else if(time > QICKLY && time <= SLOWLY) {
					return {
							level: state.level + 1,
							lives: state.lives,
							endGame: finishGame ? finishGame : '',
							poins: state.poins + 100,
							results: state.results.concat(NORMAL)
					}
				} else if(time > SLOWLY && time <= INITIAL) {
					return {
							level: state.level + 1,
							lives: state.lives,
							endGame: finishGame ? finishGame : '',
							poins: state.poins + 50,
							results: state.results.concat(SLOW)
					}
				} else {
					return {
							level: state.level + 1,
							lives: state.lives - 1,
							endGame: finishGame ? finishGame : '',
							poins: state.poins + 0,
							results: state.results.concat(WRONG)
					}
				}
			}
			
			const typeAnswer = getTypeAnswer(task.type)
			
			if(typeAnswer === 'correctAnswer') {
				return calcResults(time)
			} else {
				return {
					level: state.level + 1,
					lives: state.lives - 1,
					endGame: finishGame ? finishGame : '',
					poins: state.poins + 0,
					results: state.results.concat(WRONG)
				}
			}
			
		break;
		default:
			return state
	}
	
}