export default store => next => action => {
	console.log('state befor: ', store.getState())
	next(action)
	console.log('state after: ', store.getState())
}