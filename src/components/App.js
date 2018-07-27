import React, {Component} from 'react'
import {connect} from 'react-redux'
import Greeting from './Greeting'
import Intro from './Intro'
import Rules from './Rules'
import GameScreen from './GameScreen'

class App extends Component {
	
	render() {
		const {	intro, greeting, rules, gameScreen} = this.props.pages
		
		
		if (intro) return <Intro />
		if (greeting) return <Greeting />
		if (rules) return <Rules />
		if (gameScreen) return <GameScreen />
		
	}
	
}

export default connect( state => ({
	pages: state.pages
}))(App)