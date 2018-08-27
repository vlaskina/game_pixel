import React, {Component} from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderTimer from './HeaderTimer'
import HeaderLives from './HeaderLives'
import {connect} from 'react-redux'
import {returnToIntroPage} from '../../AC'

class Header extends Component {
	render() {
		return (
		  <header className="header">
			<HeaderLogo returnToIntroPage = {this.props.returnToIntroPage}/>
			<HeaderTimer level = {this.props.level}/>
			<HeaderLives lives = {this.props.lives}/>
		  </header>
		)
	}
}

export default connect( state => ({
	level: state.stateGame.level,
	lives: state.stateGame.lives
}), {returnToIntroPage})(Header)

