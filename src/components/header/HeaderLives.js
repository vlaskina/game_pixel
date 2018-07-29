import React, {Component} from 'react'

class HeaderLives extends Component {
	render() {
		const heartEmpty = [<img src="img/heart__empty.svg" className="game__heart" alt="Life" width="32" height="32" key="4" /> , <img src="img/heart__empty.svg" className="game__heart" alt="Life" width="32" height="32" key="5" /> , <img src="img/heart__empty.svg" className="game__heart" alt="Life" width="32" height="32" key="6" /> ]
		
		const heartFull = [<img src="img/heart__full.svg" className="game__heart" alt="Life" width="32" height="32" key="1" /> , <img src="img/heart__full.svg" className="game__heart" alt="Life" width="32" height="32" key="2" />, <img src="img/heart__full.svg" className="game__heart" alt="Life" width="32" height="32" key="3" />]
		
		return (
		<div className="game__lives"> 
			{this.props.lives < 3 ? heartEmpty.slice(0, 3 - this.props.lives) : ""}
			{heartFull.length > 0 ? heartFull.slice(0, this.props.lives) : ""}
		</div>	
		)
	}
}

export default HeaderLives