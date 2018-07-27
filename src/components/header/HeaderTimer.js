import React, {Component} from 'react'

class HeaderTimer extends Component {
	
	state = {
		count: this.props.timer
	}
	
	componentDidMount() {
		this.timeoutId = setInterval(() => {
			this.setState({
				count: this.state.count - 1
			})
		}, 1000)			
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps) return true
		
	}
	
	render() {
		
		if(this.state.count === 0) {
			clearInterval(this.timeoutId)
		}
		
		return (
			<h1 className="game__timer">{this.state.count}</h1>	
		)
		
	}
	
}


	
export default HeaderTimer