import React, {Component} from 'react'
import {connect} from 'react-redux'
import Greeting from './Greeting'
import Intro from './Intro'
import Rules from './Rules'
import GameScreen from './GameScreen'
import {request} from '../AC'
import Loading from './Loading'
import ConfirmationPage from './ConfirmationPage'

class App extends Component {
	
	componentDidMount() {
		this.props.request()
	}
	
	render() {
		const {	intro, greeting, rules, gameScreen, confirmationPage} = this.props.pages
		
		if (this.props.loading) return <Loading />
		
		if (intro) return <Intro />
		if (greeting) return <Greeting />
		if (rules) return <Rules />
		if (gameScreen) return <GameScreen />
		if (confirmationPage) return <ConfirmationPage />
		
	}
	
}

export default connect( state => ({
	pages: state.pages,
	loading: state.loading
}), {request})(App)