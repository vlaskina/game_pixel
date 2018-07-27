export const REQUEST_SUCCESS = 'request'

export const GET_ANSWER = 'answer'

export const SCORING = 'scoring'

export const LOAD_START = 'loading'

export const TASK_COUNT = 9;

export const OPEN_PAGES = 'openPages'

export const PAGES = {
	intro: true,
	greeting: false,
	rules: false,
	gameScreen: false
}

export const OPEN_GREETING = 'openGreeting'
export const OPEN_RULES = 'openRules'
export const OPEN_GAME_SCREEN = 'openGameScreen'

export const STATE_DEFAULT = {
	lives: 3,
	level: 0,
	endGame: '',
	poins: 0,
	results: []
}

export const ANSWER_TYPE = {
  NORMAL: `correct`,
  FAST: `fast`,
  SLOW: `slow`,
  WRONG: `wrong`,
  UNKNOWN: `unknown`
}


export const TIME_LIMITS = {
  QICKLY: 10,
  SLOWLY: 20,
  INITIAL: 30
}


export const RESULT_GAME = {
	WIN: 'Победа!',
	FAIL: 'Fail'
}