import React, {Component} from 'react'
import toggleAnswer from '../../decorators/toggleAnswer'

class OneOfThree extends Component {
	render() {
		
		const task = this.props.task
		
		return (
		<form className="game__content game__content--triple">
		<div className="game__option  game__option--selected" key="1">
		<img src={task[0].image.url} alt="Option 0" width="304" height="455"  onMouseDown = {this.handleOnAnswerGiven}/>
		</div>
		<div className="game__option  game__option--selected" key="2">
		<img src={task[1].image.url} alt="Option 1" width="304" height="455" onMouseDown={this.handleOnAnswerGiven} />
		</div>
		<div className="game__option  game__option--selected" key="3">
		<img src={task[2].image.url} alt="Option 2" width="304" height="455" onMouseDown={this.handleOnAnswerGiven} />
		</div>
		</form>
		)
	}
	
	handleOnAnswerGiven = (e) => {
		this.props.handleOnAnswerGiven(e.target.alt)
	}

}

export default OneOfThree