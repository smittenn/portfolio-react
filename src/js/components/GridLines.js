import React, {Component} from 'react'

export default class GridLines extends Component {

	constructor(props) {
		super(props);
	}

	// componentDidMount() {
	// 	window.addEventListener('resize', this.detectMobile);
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('resize', this.detectMobile);
	// }

	// detectMobile = (event) => {
	// 	this.setState({
	// 		isMobile: detectMobile()
	// 	})
	// }

	render() {

		return (
			<div className="grid grid--lines">
				{/*<div className="grid__item--col-2 grid__item--hide-bp-medium grid__line"/>*/}
				<div className="grid__item--col-3 grid__item--col-3-medium grid__line"/>
				<div className="grid__item--col-3 grid__item--col-3-medium grid__line"/>
				{<div className="grid__item--col-3 grid__item--col-3-medium grid__line"/>}
				{/*<div className="grid__item--col-2 grid__item--hide-bp-medium grid__line"/>*/}
				{/*<div className="grid__item--col-2 grid__item--hide-bp-medium grid__line"/>*/}
				<div className="grid__item--col-3 grid__item--col-3-medium grid__line"/>
			</div>
		);
	}
}