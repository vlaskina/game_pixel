import React, {Component} from 'react'

class HeaderLives extends Component {
	render() {
		const heartEmpty = new Array(3 - this.props.lives).fill(<img src="img/heart__empty.svg" className="game__heart" alt="Life" width="32" height="32" /> )
		
		const heartFull = new Array(this.props.lives).fill(<img src="img/heart__full.svg" className="game__heart" alt="Life" width="32" height="32" /> )
		
		return (
		<div className="game__lives"> 
			{heartEmpty.length > 0 ? heartEmpty.map( it => {
				return it
			}) : ""}
			{heartFull.length > 0 ? heartFull.map( it => {
				return it
			}) : ""}
		</div>	
		)
	}
}

export default HeaderLives