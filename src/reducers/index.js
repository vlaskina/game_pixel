import {combineReducers} from 'redux'
import gameScreen from './gameScreen'
import stateGame from './stateGame'
import loading from './loading'
import pages from './pages'

export default combineReducers({
	gameScreen,
	stateGame,
	loading,
	pages
})