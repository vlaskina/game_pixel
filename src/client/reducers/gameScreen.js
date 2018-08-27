import {REQUEST_SUCCESS} from '../constans'

export default (gameScreens = [], action) => {
	const {type, payload} = action

	if(type === REQUEST_SUCCESS) {
		return payload
	}

	return gameScreens	
	
}