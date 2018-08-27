import {LOAD_START, REQUEST_SUCCESS} from '../constans'

export default (loading = false, action) => {
	const {type} = action

	switch(type) {
		case LOAD_START:
			return true
		break
		case REQUEST_SUCCESS:
			return false
		break
		default:
			return false
	}
	
	
}