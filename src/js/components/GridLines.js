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
			<div className="style-line">
				<div className="style-line__container">
					<div className="grid">
						<div className="grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item--col-5 grid__item--col-6-medium">
							<div className="style-line__vertical"/>
						</div>
						<div className="grid__item--col-5 grid__item--hide-bp-medium">
							<div className="style-line__vertical"/>
						</div>
						<div className="grid__item--col-1 grid__item--col-6-medium">
							<div className="style-line__vertical" style={ this.props.isMobile ? { float: 'right' } : null }/>
						</div>
					</div>
				</div>
				<div className="style-line__container">
					<div className="style-line__horizontal"/>
					{/*<section>
						<div className="style-line__horizontal"/>
					</section>*/}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(GridLines)