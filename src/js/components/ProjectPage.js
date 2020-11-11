import React, {Component, Fragment} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce1, perforce2 } from "../actions/abbreviation"
import { setPanel } from "../actions/panel"

import ScrollSection from "../components/ScrollSection"

import ParallaxBackground from "../components/ParallaxBackground"
import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"
import CodepenEmbed from "../components/CodepenEmbed"
import SideScroller from "../components/SideScroller"
import TextLink from "../components/TextLink"
import Image from "../components/Image"
import Video from "../components/Video"

import { HeroBlock, HeroBlockItem } from "../components/blocks/HeroBlock"
import ProjectUpNextBlock from "../components/blocks/ProjectUpNextBlock"
import ProjectDetailsBlock from "../components/blocks/ProjectDetailsBlock"
import ProjectIntroBlock from "../components/blocks/ProjectIntroBlock"
import ProjectSectionBlock from "../components/blocks/ProjectSectionBlock"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"

import people from "../data/people"


class ProjectPage extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		// this.props.perforce2();
		this.props.reset();
		this.props.setPanel(this.props.data.navPanel);
	}

	constructor(props) {
		super(props);

		const pageSections = this.props.data.sections.filter(item => item.name).map(section => section.name);

		this.state = {
			activeSection: pageSections[0],
			sections: pageSections,
		}
	}

	setActiveSection = (idx) => {
		this.setState({
			activeSection: this.state.sections[idx],
		})
		this.props.setCounter(idx + 1);
	}

	createSection = (item, i) => {
		const brandBlack = hexToRgb(palette("brand-black"));

		if (item.type == "hero-block") {
			const heroText = item.block.heroText.map(x => (x.word) ? <HeroBlockItem>{x.word}</HeroBlockItem> : x.sentence)
			return (
				<ScrollSection 
				name={item.name}
				black
				fullHeight
				sections={this.state.sections}
				activeSection={this.state.activeSection}
				style={{ backgroundColor: 'transparent'}}
				onSetActive={() => { this.setActiveSection(i); }}>
					<ParallaxBackground 
					style={{ 
						backgroundImage: `
							linear-gradient(rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, 0.0), rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, 0.08)),
							url(${item.block.parallaxBackground.media.src}),
							${item.block.parallaxBackground.gradient.over}`,
					}}/>
					<HeroBlock headerText={heroText}/>
				</ScrollSection>
			)
		}
		else if (item.type == "project-intro-block") {
			return (
				<ScrollSection 
				name={item.name}
				sections={this.state.sections}
				activeSection={this.state.activeSection}
				disableSectionNumber
				black={item.isBlack}
				style={item.style}
				onSetActive={() => { this.setActiveSection(i); }}>
					<ProjectIntroBlock 
					col1={item.block.col1}
					col2={item.block.col2}
					col3={item.block.col3}
					col4={item.block.col4}
					/>
				</ScrollSection>
			)
		}
		else if (item.type == "project-details-block") {
			return (
				<ScrollSection
				name={item.name}
				sections={this.state.sections}
				activeSection={this.state.activeSection}
				disableSectionNumber
				style={item.style}
				black={item.isBlack}
				onSetActive={() => { this.setActiveSection(i); }}>
					<ProjectDetailsBlock
					role={item.block.role}
					date={item.block.date}
					client={item.block.client}
					team={item.block.team}/>
				</ScrollSection>
			)
		}
		else if (item.type == "project-section-block") {
			return (
				<ScrollSection 
				name={item.name}
				black={item.isBlack}
				style={item.style}
				sections={this.state.sections}
				activeSection={this.state.activeSection}
				onSetActive={() => { this.setActiveSection(i); }}>
					<ProjectSectionBlock 
					title={item.block.title}
					description1={item.block.description1}
					description2={item.block.description2}
					media={item.block.media}
					/>
				</ScrollSection>
			)
		}
		else if (item.type == "up-next-block") {
			return (
				<ScrollSection 
				black={item.isBlack}
				style={item.style}
				disableSectionNumber
				sections={this.state.sections}
				activeSection={this.state.activeSection}
				onSetActive={() => { this.setActiveSection(i); }}>
					<ProjectUpNextBlock 
					name={item.block.title}
					to={item.block.to}/>
				</ScrollSection>
			)
		}
	}

	render() {

		const { setCounter, setNavWhite, setNavBlack } = this.props;
		const { activeSection, sections } = this.state;

		return (
			<article>
				{ this.props.data.sections.map((item, i) => (
					<Fragment key={i}>{ this.createSection(item, i) }</Fragment>
				)) }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)
