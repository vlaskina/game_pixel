import React, {Component} from 'react'
import {connect} from 'react-redux'
import {openGameScreen} from '../AC'

class Greeting extends Component {
	
	state = {
		value : '',
		disabled: true
	}
	
	render() {

		return (
		   <div>
		   <header className="header">
			<div className="header__back">
			  <button className="back">
				<img src="img/arrow_left.svg" width="45" height="45" alt="Back" />
				<img src="img/logo_small.svg" width="101" height="44" />
			  </button>
			</div>
		  </header>
		  <div className="rules">
			<h1 className="rules__title">Правила</h1>
			<p className="rules__description">Угадай 10 раз для каждого изображения фото 
			<img src="img/photo_icon.png" width="16" height="16"/> или рисунок 
			  <img src="img/paint_icon.png" width="16" height="16" alt=""/>.<br/>
			  Фотографиями или рисунками могут быть оба изображения.<br/>
			  На каждую попытку отводится 30 секунд.<br/>
			  Ошибиться можно не более 3 раз.<br/>
			  <br/>
			  Готовы?
			</p>
			<form className="rules__form">
			  <input className="rules__input" type="text" placeholder="Ваше Имя" onChange = {this.handleInput} />
			  <button className="rules__button  continue" type="submit" onClick = {this.handleButton} disabled = {this.state.disabled}>Go!</button>
			</form>
		  </div>
		  </div>
		)
		
	}
	
	handleInput = (e) => {
		if(this.state.value.length >= VALID.min && this.state.value.length < VALID.max) {
			this.setState({
				disabled: false
			})
		} else {
			this.setState({
				disabled: true
			})
		}
		this.setState({
			value: e.target.value
		})
	}
	
	handleButton = () => {
			this.props.openGameScreen()
	}
	
}

export default connect( null, {openGameScreen})(Greeting)

const VALID = {
	min: 5,
	max: 20
}