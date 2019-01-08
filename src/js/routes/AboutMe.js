import React, {Component} from 'react'
import { connect } from 'react-redux'

import Nav from "../components/Nav";
import ParallaxHeader from "../components/ParallaxHeader"

import GridLines from "../components/GridLines"

import { reset, setCounter } from '../actions/counter'
import { aboutMe } from '../actions/abbreviation'
import { setNavWhite, setNavBlack } from "../actions/color"

class AboutMe extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.aboutMe();
		this.props.reset();
		this.props.setNavWhite();
	}


	constructor(props) {
		super(props);

	}

	render() {

		return (
			<div>
				<ParallaxHeader 
				headerText={`About Me`}
				/>
				<div style={{ height: 500 }} />
				<h2>{"\u2728"}</h2>
				<GridLines/>
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
	aboutMe: () => dispatch(aboutMe()),
	setNavWhite: () => dispatch(setNavWhite()),
	setNavBlack: () => dispatch(setNavBlack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe)