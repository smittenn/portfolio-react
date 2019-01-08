import React, {Component} from 'react'
import { connect } from 'react-redux'

import Nav from "../components/Nav";
import ParallaxHeader from "../components/ParallaxHeader"

import GridLines from "../components/GridLines"


import { reset, setCounter } from '../actions/counter'
import { vai } from '../actions/abbreviation'
import { setNavWhite, setNavBlack } from "../actions/color"

class Vai extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.vai();
		this.props.reset();
		this.props.setNavWhite();
	}

	constructor(props) {
		super(props);
	}

	render() {

		const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

		return (
			<div>
				<ParallaxHeader 
				bgImage={image1}
				headerText={`The V.ai Player uses AI to identify specific products in a video`}
				/>
				<div style={{ height: 500 }} />
				<h2>{"\u2728"}</h2>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	counter: state.counter,
	abbreviation: state.abbreviation,
})

const mapDispatchToProps = dispatch => ({
	reset: () => dispatch(reset()),
	vai: () => dispatch(vai()),
	setNavWhite: () => dispatch(setNavWhite()),
	setNavBlack: () => dispatch(setNavBlack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Vai)