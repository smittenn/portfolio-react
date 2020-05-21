import React, {Component} from "react"
import { connect } from "react-redux"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import {NavLink} from 'react-router-dom'

import { reset, setCounter } from "../actions/counter"
import { home, process, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"

import navData from "../data/nav"

import ProjectCard from "../components/ProjectCard"
import ScrollSection from "../components/ScrollSection"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"


class Work extends Component {

	constructor(props) {
		super(props);

		this.state = {
			projects: [],
			sections: [
				"work"
			]
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.process();
		this.props.reset();

		this.formatData(navData.items[1]);
	}

	formatData = (data) => {
		data.items.forEach(child => {
			if (child.to) {
				this.setState(prevState => ({
					projects: prevState.projects.concat(child)
				}));
			}
			if (child.items != null) {
				this.formatData(child);
			} 
		})
	}


	render() {

		const { activeSection, sections, projects } = this.state;

		const brandBlack = hexToRgb(palette("brand-black"));
		const brandRed = hexToRgb(palette("brand-red"));

		return (
			<article id="process">
				<ScrollSection
				name={sections[0]}
				black
				sections={sections}
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<h4>All Projects</h4>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<div className="spacer spacer__sm"/>
							<ProjectCard items={projects} />
							<div className="spacer spacer__md"/>
						</div>
					</div>
				</ScrollSection>
			</article>
		);
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
	process: () => dispatch(process()),
	americanMade: () => dispatch(americanMade()),
	vai: () => dispatch(vai()),
	translator: () => dispatch(translator()),
	jjMdc: () => dispatch(jjMdc()),
	jjHome: () => dispatch(jjHome()),
	wrap1: () => dispatch(wrap1()),
	wrap2: () => dispatch(wrap2()),
	perforce: () => dispatch(perforce()),
	cisco: () => dispatch(cisco()),
	protohack: () => dispatch(protohack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Work)