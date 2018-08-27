export default store => next => action => {
	const {callAPI, ...rest} = action
	
	if(!callAPI) return next(action)
		
	fetch(callAPI)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		next({...rest, data}) 
	})
	/*.catch((err) => {
		next({...rest, err})
	})*/
}