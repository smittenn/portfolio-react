import React, {Component} from "react"
import { connect } from "react-redux"

import { reset, setCounter } from "../../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce1, perforce2 } from "../../actions/abbreviation"
import { setPanel } from "../../actions/panel"

import ProjectPage from "../../components/ProjectPage"

import project from "../../data/projects/helix-cloud"


class HelixCloud extends Component {

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.perforce2();
		this.props.reset();
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ProjectPage data={project}/>
		)
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	reset: () => dispatch(reset()),
	setCounter: (n) => dispatch(setCounter(n)),
	home: () => dispatch(home()),
	americanMade: () => dispatch(americanMade()),
	vai: () => dispatch(vai()),
	translator: () => dispatch(translator()),
	jjMdc: () => dispatch(jjMdc()),
	jjHome: () => dispatch(jjHome()),
	wrap1: () => dispatch(wrap1()),
	wrap2: () => dispatch(wrap2()),
	perforce1: () => dispatch(perforce1()),
	perforce2: () => dispatch(perforce2()),
	cisco: () => dispatch(cisco()),
	protohack: () => dispatch(protohack()),
	setPanel: (str) => dispatch(setPanel(str)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HelixCloud)
