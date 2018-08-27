import React, {Component} from 'react'

class HeaderTimer extends Component {
	
	state = {
		count: 30
	}
	
	componentDidMount() {
		this.timeoutId = setInterval(() => {
			this.setState({
				count: this.state.count - 1
			})
		}, 1000)			
	}
	
	shouldComponentUpdate(nextProps) {
		if(nextProps.level != this.props.level) {
			this.setState({
				count: 30
			})
			return true
		}
		return true
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