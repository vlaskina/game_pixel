import React, {Component} from 'react'
import {connect} from 'react-redux'

class StateGame extends Component {
	render() {
		const state = [ ...this.props.stateGame]

		return (
		<div className="stats">
		  <ul className="stats">
			<li className={state.length >= 0 ? className[state[0]] : className.unknown}></li>
			<li className={state.length >= 1 ? className[state[1]] : className.unknown}></li>
			<li className={state.length >= 2 ? className[state[2]] : className.unknown}></li>
			<li className={state.length >= 3 ? className[state[3]] : className.unknown}></li>
			<li className={state.length >= 4 ? className[state[4]] : className.unknown}></li>
			<li className={state.length >= 5 ? className[state[5]] : className.unknown}></li>
			<li className={state.length >= 6 ? className[state[6]] : className.unknown}></li>
			<li className={state.length >= 7 ? className[state[7]] : className.unknown}></li>
			<li className={state.length >= 8 ? className[state[8]] : className.unknown}></li>
			<li className={state.length >= 9 ? className[state[9]] : className.unknown}></li>
		  </ul>
		</div>
		)
	}
}

export default connect( state => ({
	stateGame: state.stateGame.results
}))(StateGame)


const className = {
	wrong: "stats__result stats__result--wrong",
	slow: "stats__result stats__result--slow",
	fast: "stats__result stats__result--fast",
	correct: "stats__result stats__result--correct",
	unknown: "stats__result stats__result--unknown"
}