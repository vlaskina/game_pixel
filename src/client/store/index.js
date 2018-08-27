import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import logger from '../middliewares/logger'
import thunk from 'redux-thunk'

const enchancer = applyMiddleware(thunk, logger)

const store = createStore(rootReducer, enchancer)

window.store = store

export default store