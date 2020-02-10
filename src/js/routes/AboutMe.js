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

		const brandPurple = hexToRgb(palette("brand-purple"));
		const brandTeal = palette("brand-teal");
		const brandPink = hexToRgb(palette("brand-pink"));
		
		return (
			<article>
				<ScrollSection 
				name={sections[0]}
				black 
				fullHeight
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `
						radial-gradient(
							rgba(${brandPink.r}, ${brandPink.g}, ${brandPink.b}, 0.80),
							rgba(${brandPink.r}, ${brandPink.g}, ${brandPink.b}, 0.90)
						),
						url(../assets/img/about/room.jpg)
					`, 
					backgroundColor: `transparent`,
					backgroundBlendMode: `normal`,
					backgroundSize: 'cover',
					backgroundPosition: this.props.isMobile ? 'center' : 'center 80%'
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
						headerText={[
							`In my free time I make`, 
							<span><span className="outline">3d stuff </span></span>, 
							/*<span><span className="outline">maker </span></span>, */
							`and snap`, 
							<span><span className="outline">photos </span></span>, 
							/*<span><span className="outline">photos</span></span>,*/
							`with friends.`
							/*<span><span className="outline">. </span></span>,*/
						]}
					/>
				</ScrollSection>

				<ScrollSection 
				name={sections[1]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>3d Art</h2>
								<blockquote>I have been learning and experimenting with Cinema 4D by creating simple animations with text and shapes. I’m most interested in scenes featuring odd lighting, soft bodies, collisions and or that simulate irregular physics.</blockquote>
							</div>
						</div>
					</div>
					<div style={{ filter: 'grayscale(1)' }}>
					<SideScroller>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Image src="../assets/img/about/hello-world1.jpg" aspectRatioWidth={4} aspectRatioHeight={3}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Video src="../assets/img/about/no-chill.mp4" loop/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Video src="../assets/img/about/cube.mp4" loop/>
						</div>
					</SideScroller>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[2]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Photography</h2>
								<blockquote>I have been shooting small and medium format film for the past 9 years. I relish the imperfections, mistakes, “happy accidents” and learnings that comes with the shooting film and its development process.</blockquote>
							</div>
						</div>
					</div>
					<SideScroller style={{ filter: 'grayscale(0)' }}>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Image src="../assets/img/ocean.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Image src="../assets/img/me3.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Image src="../assets/img/lands-end.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Image src="../assets/img/mist.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
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