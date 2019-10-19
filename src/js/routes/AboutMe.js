import React, {Component} from "react"
import { connect } from "react-redux"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import {NavLink} from 'react-router-dom'

import { reset, setCounter } from "../actions/counter"
import { home, process, aboutMe, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"

import ScrollSection from "../components/ScrollSection"
import SideScroller from "../components/SideScroller"
import TextLink from "../components/TextLink"

import Image from "../components/Image"
import Video from "../components/Video"
import ParallaxHeader from "../components/ParallaxHeader"

import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"


class About extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeSection: "about",
			sections: [
				"about",
				"3d-art",
				"photos",
			],
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.aboutMe();
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

		const brandTeal = hexToRgb(palette("brand-teal"));
		const brandPink = hexToRgb(palette("brand-pink"));
		
		return (
			<article>
				<ScrollSection 
				name={sections[0]}
				black 
				fullHeight
				sections={sections} 
				activeSection={activeSection}
				style={{}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[`In my free time make`, <span><span className="outline">3d art,</span></span>, `snap`, <span><span className="outline">photos </span></span>, `and create prints.`]} 
					/>
				</ScrollSection>

				<ScrollSection 
				name={sections[1]}
				black
				style={{ 
					backgroundColor: `rgba(${brandTeal.r}, ${brandTeal.b}, ${brandTeal.g}, 1`,
				}}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>3d Art</h2>
								<blockquote>I have been teaching myself Cinema 4D and creating animations with text and simple shapes to explore how lighting, soft-body dynamics and collisions can be used to show how objects can interact.</blockquote>
							</div>
						</div>
					</div>
					<div style={{ filter: 'grayscale(1)' }}>
					<SideScroller>
						<div className="grid__item grid__item--col-6 grid__item--col-11-medium">
							<Image src="../assets/img/about/hello-world1.jpg" aspectRatioWidth={4} aspectRatioHeight={3}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-11-medium">
							<Video src="../assets/img/about/no-chill.mp4" loop/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-11-medium">
							<Video src="../assets/img/about/cube.mp4" loop/>
						</div>
					</SideScroller>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[2]}
				style={{ 
					backgroundColor: `rgba(${brandPink.r}, ${brandPink.b}, ${brandPink.g}, 1`,
				}}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Photos</h2>
								<blockquote>I have been shooting small and medium format film for the past 9 years. I love the imperfections, mistakes, learning and happy accidents that comes with the shooting film and its development process.</blockquote>
							</div>
						</div>
					</div>
					<SideScroller style={{ filter: 'grayscale(1)' }}>
						<div className="grid__item grid__item--col-6 grid__item--col-11-medium">
							<Image src="../assets/img/ocean.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-11-medium">
							<Image src="../assets/img/me3.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-11-medium">
							<Image src="../assets/img/lands-end.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-11-medium">
							<Image src="../assets/img/mist.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-11-medium">
							<Image src="../assets/img/standing.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
					</SideScroller>
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
	aboutMe: () => dispatch(aboutMe()),
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

export default connect(mapStateToProps, mapDispatchToProps)(About)