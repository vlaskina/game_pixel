import React, {Component} from 'react'
import Header from './header'
import Task from './task'
import {connect} from 'react-redux'
import {request, onAnswerGiven} from '../AC'
import Results from './Results'
import StateGame from './StateGame'

class GameScreen extends Component {
	
	render() {

		if (this.props.stateGame.endGame) return <Results />
		
		this.level = this.props.stateGame.level
		this.task = this.props.task[this.level]		
		
		this.startGameTime = new Date()

		return (
			<div>
			<Header />
			<div class="game">
				{this.task ? <Task task = {this.task} handleOnAnswerGiven = {this.handleOnAnswerGiven}/> : ""}
				<div className="stats">
				<StateGame />
				</div>
			</div>
			</div>
		)
	}
	
	handleOnAnswerGiven = (answer) => {
		const finishGameTime = new Date()
		this.props.onAnswerGiven(answer, this.task, this.startGameTime, finishGameTime)
	}
	
}

export default connect( state => ({
	stateGame: state.stateGame,
	task: state.gameScreen
}), {onAnswerGiven})(GameScreen)