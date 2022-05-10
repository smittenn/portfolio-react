import React, {Component} from "react"
import { connect } from "react-redux"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import { NavLink } from 'react-router-dom'

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"
import { setPanel } from "../actions/panel"

import DelayLink from "../components/DelayLink"
import ParallaxBackground from "../components/ParallaxBackground"
import ScrollSection from "../components/ScrollSection"
import { HeroBlock, HeroBlockItem } from "../components/blocks/HeroBlock"
import ProjectCard from "../components/ProjectCard"
import TextLink from "../components/TextLink"

import Carousel from "../components/Carousel"
import Image from "../components/Image"
import ProcessDiagram from "../components/ProcessDiagram"

import processData from "../data/process"
import navData from "../data/nav"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"
import pad from "../services/pad"


class Homepage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			projects: [],
			activeSection: "hello",
			sections: [
				"hello"
			],
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.home();
		this.props.reset();
		this.props.setPanel("All Pages");

		this.formatData(navData);
	}


	setActiveSection = (idx) => {
		this.setState({
			activeSection: this.state.sections[idx],
		})
		this.props.setCounter(idx + 1);
	}


	formatData = (data) => {
		data.items.forEach(child => {
			if (child.media != null) {
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

		const heroBackgroundImage = this.props.isMobile ? 'banner-5x8.jpg' : 'banner-3x2.jpg';

		const processPreview = processData.data.slice(0, 3).map((item, i) => (
			<div className="grid__row mb0">
				<div className="grid__item grid__item--col-12">
					<p className="mb0">{pad(i + 1, 2) + '. '}</p>
					<h4 className="mb0">{item.title}</h4>
					<blockquote>{item.body}</blockquote>
				</div>
			</div>
		))

		return (
			<article>

				<ScrollSection
				name={sections[0]}
				black
				fullHeight
				sections={sections}
        disableSectionNumber
				activeSection={activeSection}
				background={<ParallaxBackground>
						<div className="grid" style={{ alignItems: 'center' }}>
							<div className="grid__item grid__item--col-6 grid__item--col-3-medium"/>
							<div className="grid__item grid__item--col-5 grid__item--col-9-medium">
								<Carousel disableNavigation={this.props.isMobile ? true : false} stacking>
									<Image src="../assets/img/ferris-wheel.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
									<Image src="../assets/img/graffiti.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
									<Image src="../assets/img/banner-1x1.jpg" aspectRatioWidth={1} aspectRatioHeight={1} alt="Some palm trees in the early morning"/>
								</Carousel>
							</div>
						</div>
					</ParallaxBackground>}
				onSetActive={() => { this.setActiveSection(0); }}>
          
          <DelayLink to="work">
            <HeroBlock
            headerText={[
              `Eric C. Smith is a`, 
              <span><span className="outline">Creative </span></span>, 
              <span><span className="outline">Developer </span></span>, 
              `in Brooklyn, NY`
            ]}
            /> 
          </DelayLink>					

				</ScrollSection>

			</article>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isMobile: state.isMobile,
	windowHeight: state.windowHeight,
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
	perforce: () => dispatch(perforce()),
	cisco: () => dispatch(cisco()),
	protohack: () => dispatch(protohack()),
	setPanel: (str) => dispatch(setPanel(str)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
