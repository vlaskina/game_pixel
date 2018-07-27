import React, {Component} from 'react'

export default (OriginalComponent) => {
	return class ToggleAnswer extends Component {
		
		toggleAnswer = (e) => {
			console.log(e.target.value)
			this.props.handleOnAnswerGiven(e.target.value)
		}
		
		render () {
			return <OriginalComponent {...this.props} {...this.state} toggleAnswer = {this.toggleAnswer} />
		}
	}
}