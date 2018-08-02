import React, {Component} from 'react'

class HeaderLogo extends Component {
	render() {
		return (
		<div className="header__back">
			<a href="" onClick={this.handleLink}>
				<img src="img/arrow_left.svg" width="45" height="45" alt="Back" />
				<img src="img/logo_small.svg" width="101" height="44" />
			</a>
		</div>		
		)
	}
	
	handleLink = (e) => {
		e.preventDefault()
		this.props.returnToIntroPage()
	}
}

export default HeaderLogo