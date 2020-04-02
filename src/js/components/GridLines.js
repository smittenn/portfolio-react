import React, {Component} from 'react'
import { connect } from "react-redux"

class GridLines extends Component {

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
			<div className="grid-line">
				<div className="grid-line__container">
					<div className="grid">
						<div className="grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid-line__item grid__item--col-5 grid__item--hide-bp-medium">
							<div className="grid-line__vertical"/>
						</div>
						<div className="grid-line__item grid__item--col-5 grid__item--hide-bp-medium">
							<div className="grid-line__vertical"/>
						</div>
						<div className="grid-line__item grid__item--col-1 grid__item--col-12-medium">
							<div className="grid-line__vertical"/>
							<div className="grid-line__vertical" style={ this.props.isMobile ? null : { display: 'none' } }/>
						</div>
					</div>
				</div>
				<div className="grid-line__container">
					<div className="grid-line__horizontal"/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(GridLines)