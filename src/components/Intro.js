import React, {Component} from 'react'
import {connect} from 'react-redux'
import {openGreeting} from '../AC'

class Greeting extends Component {
	
	render() {

		return (
			<div id="intro" className="intro">
			  <h1 className="intro__asterisk" onClick = {this.props.openGreeting}>*</h1>
			  <p className="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
			</div>
		)
		
	}
	
}

export default connect( null, {openGreeting})(Greeting)