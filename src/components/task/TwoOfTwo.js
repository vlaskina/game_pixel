import React, {Component} from 'react'

class TwoOfTwo extends Component {
	
	state = {
		answer1: '',
		answer2: ''
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.answer1 && nextState.answer2) {
			this.setState({
				answer1: '',
				answer2: ''
			})
			this.props.handleOnAnswerGiven(nextState)
			return true
		}
		return true
	}
	
	render() {
		
		const task = this.props.task
		
		return (
		<form className="game__content">
		<div className="game__option" key="1">
		<img src={task[0].image.url} alt="Option 1" width="468" height="458"/>
		<label className="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo" onClick = {this.handleAnswer1}/>
          <span>Фото</span>
        </label>
        <label className="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="painting" onClick = {this.handleAnswer1}/>
          <span>Рисунок</span>
        </label>
		</div>
		<div className="game__option" key="2">
		<img src={task[1].image.url} alt="Option 1" width="468" height="458"/>
		<label className="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo" onClick = {this.handleAnswer2}/>
          <span>Фото</span>
        </label>
        <label className="game__answer  game__answer--wide  game__answer--paint">
          <input name="question2" type="radio" value="painting" onClick = {this.handleAnswer2}/>
          <span>Рисунок</span>
        </label>
		</div>
		</form>
		)
	}
	
	handleAnswer1 = (e) => {
		this.setState({
			answer1: e.target.value
		})
	}
	
	handleAnswer2 = (e) => {
		this.setState({
			answer2: e.target.value
		})	
	}
	

}

export default TwoOfTwo