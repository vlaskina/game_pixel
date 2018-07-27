import {REQUEST, ANSWER, TIMER, SCORING, ANSWER_TYPE, TIME_LIMITS} from '../constans'

export default store => next => action => {
	
	if(action.type != ANSWER) return next(action)
	

	const {answer, task} = action.payload
	const time = store.getState().timer
	const {NORMAL, FAST, SLOW, WRONG, UNKNOWN} = ANSWER_TYPE
	const {QICKLY, SLOWLY, INITIAL} = TIME_LIMITS
		
	indentifyTypeGame(task.type)	
	
	function indentifyTypeGame(typeGame) {
		switch (typeGame) {
			case 'tinder-like':
				if (answer === task.answers[0].type) {
					calculatePoints(time)
				} else {
					next({points: 0, answerType: WRONG, ...action})
				}
			break
			case 'two-of-two':
				const {answer1, answer2} = answer
				if (answer1 === task.answers[0].type && answer2 === task.answers[1].type) {
					calculatePoints(time)
				} else {
					next({points: 0, answerType: WRONG, ...action})
				}
			break
			case 'one-of-three':
				const indexAnswer = +answer.slice(-1)
				
				if(task.question === "Найдите рисунок среди изображений") {
					if (task.answers[indexAnswer].type === "painting") {
						calculatePoints(time)
					} else {
						next({points: 0, answerType: WRONG, ...action})
					}
				} else {
					if(task.answers[indexAnswer].type === "photo") {
						calculatePoints(time)					
					} else {
						next({points: 0, answerType: WRONG, ...action})
					}
				}
			break
		}
	}
	
	function calculatePoints(time) {	
		if(time <= QICKLY) {
			next({points: 150, answerType: FAST, ...action})
		} else if (time > QICKLY && time <= SLOWLY) {
			next({points: 100, answerType: NORMAL, ...action})
		} else if (time > SLOWLY && time <= INITIAL) {
			next({points: 50, answerType: SLOW, ...action})
		} else {
			next({points: 0, answerType: WRONG, ...action})
		}
	}
	
}