import React, {Component} from 'react'

class TinderLike extends Component {
	render() {
		
		const task = this.props.task[0]
		
		return (
		<form className="game__content">
		<img src={task.image.url} alt="Option 1" width="705" height="455"/>
		 <label className="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo" onClick={this.handleOnAnswerGiven} />
          <span>Фото</span>
        </label>
        <label className="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="painting" onClick={this.handleOnAnswerGiven} />
          <span>Рисунок</span>
        </label>
		</form>
		)
	}
	
	handleOnAnswerGiven = (e) => {
		this.props.handleOnAnswerGiven(e.target.value)
	}

}

export default TinderLike