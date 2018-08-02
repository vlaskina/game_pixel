import React, {Component} from 'react'
import {connect} from 'react-redux'
import {returnToIntroPage, openGameScreen} from '../AC'

class ConfirmationPage extends Component {
	
	render() {
		return (
			<div>
				<h1>Вы переходите на приветственный экран</h1>
				<h2>Вся ваша игра будет потеряна</h2>
				<h2>Вы уверена, что хотите перейти?</h2>
				<a href="" className="link_cancel" onClick={this.handleLink}>Отмена</a><br/>
				<a href="" className="link_returnStartPage" onClick={this.handleLink}>Перейти</a>
			</div>
		)
	}
	
	handleLink = (e) => {
		e.preventDefault()
		if(e.target.className === 'link_cancel') {
			this.props.openGameScreen()
		} else {
			this.props.returnToIntroPage()
		}
	}
	
	
}

export default connect(null, {returnToIntroPage, openGameScreen})(ConfirmationPage)