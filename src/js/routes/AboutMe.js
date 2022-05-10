import React, {Component} from "react"
import { connect } from "react-redux"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import {NavLink} from 'react-router-dom'

import { reset, setCounter } from "../actions/counter"
import { home, process, aboutMe, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"
import { setPanel } from "../actions/panel"

import ParallaxBackground from "../components/ParallaxBackground"
import ScrollSection from "../components/ScrollSection"
import SideScroller from "../components/SideScroller"
import TextLink from "../components/TextLink"

import Image from "../components/Image"
import Video from "../components/Video"

import { HeroBlock, HeroBlockItem } from "../components/blocks/HeroBlock"
import ProjectSectionBlock from "../components/blocks/ProjectSectionBlock"

import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"
import darken from "../services/darken"


class About extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeSection: "about",
			sections: [
				"about",
				"3d-art",
				"photos",
				"music",
			],
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.aboutMe();
		this.props.reset();
		this.props.setPanel("All Pages");
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

				<ParallaxBackground 
				style={{ 
					backgroundImage: `
						radial-gradient(
							rgba(${brandPink.r}, ${brandPink.g}, ${brandPink.b}, 0.72),
							rgba(${brandPink.r}, ${brandPink.g}, ${brandPink.b}, 0.96)
						),
						url(../assets/img/about/room.jpg)
					`, 
					backgroundColor: 'rgb(${brandPink.r}, ${brandPink.g}, ${brandPink.b})',
					backgroundBlendMode: `normal`,
					backgroundSize: 'cover',
					backgroundPosition: this.props.isMobile ? 'center' : 'center 80%'
				}}/>
			
				<ScrollSection 
				name={sections[0]}
				black 
				fullHeight
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundColor: `transparent`,
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<HeroBlock 
						headerText={[
							`In my free time I make `, 
							<span><span className="outline">3d stuff </span></span>, 
							`and snap `, 
							<span><span className="outline">photos </span></span>, 
							`with friends.`
						]}
					/>
				</ScrollSection>

				<ScrollSection 
				name={sections[1]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<ProjectSectionBlock 
					title="3d Art"
					description1="I have been learning and experimenting with Cinema 4D by creating simple animations with text and shapes. I’m most interested in scenes featuring odd lighting, soft bodies, collisions and or that simulate irregular physics."
					media={{ type: 'side-scroller' }}>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Image src="../assets/img/about/hello-world1.jpg" aspectRatioWidth={4} aspectRatioHeight={3}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Video src="../assets/img/about/no-chill.mp4" loop/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Video src="../assets/img/about/cube.mp4" loop/>
						</div>
					</ProjectSectionBlock>
				</ScrollSection>

				<ScrollSection 
				name={sections[2]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<ProjectSectionBlock 
					title="Photos"
					description1="I have been shooting small and medium format film for the past 9 years. I relish the learnings, imperfections, mistakes, and happy accidents that comes with the shooting film and its development process."
					media={{ type: 'side-scroller' }}>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Image src="../assets/img/lands-end.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Image src="../assets/img/me3.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Image src="../assets/img/ocean.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Image src="../assets/img/mist.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Image src="../assets/img/standing.jpg" aspectRatioWidth={5} aspectRatioHeight={4}/>
						</div>
					</ProjectSectionBlock>
				</ScrollSection>


				<ScrollSection 
				name={sections[3]}
				sections={sections} 
				black
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<ProjectSectionBlock 
					title="Playlists"
					description1="I'm almost constanly listening to music. I've embarked on a journey to curate my playlists by color and genre. Listen to some of them here!"
					media={{ type: 'side-scroller' }}>
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<Image src="../assets/img/about/cd-blue.jpg"
							aspectRatioWidth={1}
							aspectRatioHeight={1} 
							caption={<a href={"//open.spotify.com/playlist/4TbFYDsnBbGEeTcODaR9ri"} target="_blank"><TextLink>#1 Blue</TextLink></a>}/>
						</div>
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<Image src="../assets/img/about/cd-pink.jpg"
							aspectRatioWidth={1}
							aspectRatioHeight={1} 
							caption={<a href={"//open.spotify.com/playlist/6mdutDh8F6RkQeOlzLLMOJ"} target="_blank"><TextLink>#2 Pink</TextLink></a>}/>
						</div>
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<Image src="../assets/img/about/cd-yellow.jpg"
							aspectRatioWidth={1}
							aspectRatioHeight={1} 
							caption={<a href={"//open.spotify.com/playlist/7sO490yiEB0g9y4CpJQAfc"} target="_blank"><TextLink>#3 Yellow</TextLink></a>}/>
						</div>
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<Image src="../assets/img/about/cd-green.jpg"
							aspectRatioWidth={1}
							aspectRatioHeight={1} 
							caption={<a href={"//open.spotify.com/playlist/08aAmgV3I7tpIJ6U5IMnkX"} target="_blank"><TextLink>#4 Green</TextLink></a>}/>
						</div>
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<Image src="../assets/img/about/cd-red.jpg"
							aspectRatioWidth={1}
							aspectRatioHeight={1} 
							caption={<a href={"//open.spotify.com/playlist/1FFRxmgGz90HGw27sjXxVR"} target="_blank"><TextLink>#5 Red</TextLink></a>}/>
						</div>
					</ProjectSectionBlock>
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
	setPanel: (str) => dispatch(setPanel(str)),
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
