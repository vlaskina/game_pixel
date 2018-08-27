import React, {Component} from 'react'
import {connect} from 'react-redux'

class Results extends Component {
	render() {
		return (
		<div className="result">
		<h1>{this.props.stateGame.endGame}</h1>
		<table className="result__table">
		  <tbody>
		  <tr>
			<td className="result__points">Всего заработанных очков: {this.props.stateGame.poins}</td>
		  </tr>
		  </tbody>
		</table>
		</div>
		)
	}
}

export default connect( state => ({
	stateGame: state.stateGame
}))(Results)