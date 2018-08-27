import React, {Component} from 'react'
import {connect} from 'react-redux'
import {openRules} from '../AC'

class Greeting extends Component {
	
	render() {

		return (
		  <div className="greeting central--blur">
			<div className="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter" /></div>
			<h1 className="greeting__asterisk">*</h1>
			<div className="greeting__challenge">
			  <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
			  <p>Правила игры просты.<br/>
				Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br/>
				Задача кажется тривиальной, но не думай, что все так просто.<br/>
				Фотореализм обманчив и коварен.<br/>
				Помни, главное — смотреть очень внимательно.</p>
			</div>
			<div className="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next" onClick = {this.props.openRules}/></span></div>
		  </div>
		)
		
	}
	
}

export default connect( null, {openRules})(Greeting)