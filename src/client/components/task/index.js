import React, {Component} from 'react'
import TinderLike from './TinderLike'
import OneOfThree from './OneOfThree'
import TwoOfTwo from './TwoOfTwo'

class Task extends Component {
	
	render() {
	let typeGame = ''
	switch (this.props.task.type) {
		case 'tinder-like':
			typeGame = <TinderLike task = {this.props.task.answers} handleOnAnswerGiven = {this.props.handleOnAnswerGiven} />
		break
		case 'two-of-two':
			typeGame = <TwoOfTwo task = {this.props.task.answers} handleOnAnswerGiven = {this.props.handleOnAnswerGiven} />
		break
		case 'one-of-three':
			typeGame = <OneOfThree task = {this.props.task.answers} handleOnAnswerGiven = {this.props.handleOnAnswerGiven} />
		break
	}
	
	return	(
	<div className="game">
			<p>{this.props.task.question}</p>
				{typeGame}
	</div>
	)
	}
}


export default Task