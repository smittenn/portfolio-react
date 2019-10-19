import React, {Component} from "react"
import { connect } from "react-redux"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import {NavLink} from 'react-router-dom'

import { reset, setCounter } from "../actions/counter"
import { home, process, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"

import ProcessDiagram from "../components/ProcessDiagram"
import ScrollSection from "../components/ScrollSection"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"


class Process extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeSection: "intro",
			sections: [
				"diagram",
			],
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.process();
		this.props.reset();
	}

	componentWillUnmount() {
	}

		
	setActiveSection = (idx) => {
		this.setState({
			activeSection: this.state.sections[idx],
		})
		this.props.setCounter(idx + 1);
	}

	render() {

		const { activeSection, sections } = this.state;

		const brandBlack = hexToRgb(palette("brand-black"));
		const brandRed = hexToRgb(palette("brand-red"));
		
		return (
			<article>
				<ScrollSection 
				name={sections[0]}
				black 
				fullHeight
				disableSectionNumber
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, 1`,
					backgroundBlendMode: `overlay`,
				}}  
				onSetActive={() => { this.setActiveSection(0); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-3 grid__item--col-1-large grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-6 grid__item--col-10-large grid__item--col-12-medium">
							<ProcessDiagram/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Process)