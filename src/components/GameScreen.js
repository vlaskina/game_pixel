import React, {Component} from 'react'
import Header from './header'
import Task from './task'
import {connect} from 'react-redux'
import {request, onAnswerGiven} from '../AC'
import Results from './Results'
import Loading from './Loading'
import StateGame from './StateGame'

class GameScreen extends Component {
	
	componentWillMount() {
		this.props.request()
	}
	
	render() {

		if (this.props.loading) return <Loading />
		if (this.props.stateGame.endGame) return <Results />
		
		this.level = this.props.stateGame.level
		this.task = this.props.task[this.level]		
		
		this.startGameTime = new Date()
		console.log(this.startGameTime)
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
	task: state.gameScreen,
	loading: state.loading
}), {request, onAnswerGiven})(GameScreen)