import React, {Component} from "react"
import { connect } from "react-redux"

import { reset, setCounter } from "../../actions/counter"
import { googleDesign } from "../../actions/abbreviation"

import ProjectPage from "../../components/ProjectPage"

import project from "../../data/projects/google-design.json"


class GoogleDesign extends Component {

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.googleDesign();
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
	googleDesign: () => dispatch(googleDesign())
})

export default connect(mapStateToProps, mapDispatchToProps)(GoogleDesign)
