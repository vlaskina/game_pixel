import {OPEN_GREETING, OPEN_RULES, OPEN_GAME_SCREEN, PAGES} from '../constans'

export default (openPages = PAGES, action) => {
	const {type} = action
	
	switch(type) {
		case OPEN_GREETING:
			return {
				intro: false,
				greeting: true,
				rules: false,
				gameScreen: false
			}
		break
		case OPEN_RULES:
			return {
				intro: false,
				greeting: false,
				rules: true,
				gameScreen: false
			}
		break
		case OPEN_GAME_SCREEN:
			return {
				intro: false,
				greeting: false,
				rules: false,
				gameScreen: true
			}
		break
		default:
			return openPages
	
	}
}