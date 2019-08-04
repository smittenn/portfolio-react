import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"
import { openSecondaryPanel } from "../actions/secondaryPanel"
import { closePrimaryPanel } from "../actions/primaryPanel"

import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"
import ScrollSection from "../components/ScrollSection"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"
import CodepenEmbed from "../components/CodepenEmbed"
import NextProject from "../components/NextProject"
import SideScroller from "../components/SideScroller"
import TextLink from "../components/TextLink"

import Image from "../components/Image"
import iFrame from "../components/iFrame"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"

import people from "../data/people"


class AmericanMade extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.americanMade();
		this.props.reset();
		this.props.openSecondaryPanel();
		this.props.closePrimaryPanel();
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "overview",
			sections: [
				"overview",
				"about",
				"details",
				"preloader",
				"cinemagraphs",
				"navigation",
				"video-gallery",
				"parallax",
				"mobile-first",
				"map",
			],
		}
	}

	setActiveSection = (idx) => {
		this.setState({
			activeSection: this.state.sections[idx],
		})
		this.props.setCounter(idx + 1);
	}


	render() {

		const { setCounter } = this.props;
		const { activeSection, sections } = this.state;

		const brandBlack = hexToRgb(palette("brand-black"));


		return (
			<article>

				<ScrollSection 
				name={sections[0]}
				black 
				fullHeight
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/american-made/output.gif)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .24`,
					backgroundSize: this.props.isMobile ? 'auto 102%' : '100% 102%',
					backgroundPosition: 'center',
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[ `The`, <span className="outline"><span>American </span></span>, <span className="outline"><span>Made </span></span>, `film site told the story of Barry Seal.`]}
					/>
				</ScrollSection>

				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<blockquote className="drop-caps mr">
								My team took a deep dive into the story of American Made when the NBCUX Lab partnered with Universal Pictures. 
							</blockquote>
							<blockquote className="mr">
								The NBCUX Lab operates as an internal agency at NBCUniversal working with different organizations within NBCU on a variety of projects ranging anywhere from consumer-facing film sites to internal tools and content management systems used by employees.
							</blockquote> 
							<blockquote className="mr">
								Our final design is the product of many late nights and too many cups of coffee. It all paid off and the film earned $16.7 million at the box office the first weekend. From our site there was a 63% conversion rate from our site to purchase tickets.
							</blockquote>
						</div>
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<div className="grid__row">
								<div className="grid__item grid__item--col-12">
									<Image src="../assets/img/american-made/half-still.jpg"  aspectRatioWidth={9} aspectRatioHeight={5}/> 
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item grid__item--col-12">
									<blockquote className="mr">
										My goal for this project as the lead designer was to integrate the cinematic content of the site and the UI in a seamless way. I wanted to create reusable components with React that could reskinned and reused. This was the first film site in a series to be developed in the partnership with Universal Pictures.
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[2]}
				black 
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/american-made/s07-synopsis.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .6`,
				}}  
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-2  grid__item--col-12-medium">
							<h6 className="uppercase">Role</h6>
							<blockquote>Lead Designer</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-12-medium">
							<h6 className="uppercase">Date</h6>
							<blockquote>Summer, 2017</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-12-medium">
							<h6 className="uppercase">Client</h6>
							<blockquote>Universal Pictures</blockquote> 
						</div>
						<div className="grid__item grid__item--col-4  grid__item--col-12-medium">
							<h6 className="uppercase">Team</h6>
							<blockquote>
								<TextLink><a href={people["Mina Azimov"]} target="_blank">Mina Azimov</a></TextLink>,&nbsp;
								<TextLink><a href={people["Oleksandr Lebedyev"]} target="_blank">Oleksandr Lebedyev</a></TextLink>,&nbsp; 
								<TextLink><a href={people["Poplar Bai"]} target="_blank">Poplar Bai</a></TextLink>
							</blockquote> 
						</div>
					</div>
				</ScrollSection>

				{/*<ScrollSection 
				name={sections[4]} 
				onSetActive={() => { this.setActiveSection(4); }} 
				black 
				style={{ backgroundImage: `url(../assets/img/american-made/cloud-bg.png)`, backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, 0.95`, backgroundPosition: "center 30%" }}>
					<div className="grid">
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<h1 className="">{"Atomic Design"}</h1> 
							<blockquote>{"I applied atomic design principles by creating a design system. I established foundations for color, typography, grids and textures first. Molecules, Organisms and Pages came naturally building upon the foundations."}</blockquote>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
						</div>
					</div>
				</ScrollSection>*/}

				<ScrollSection 
				name={sections[3]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<div className="grid">
						<div className="grid__row">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<p className="mb0">04.</p>
								<h2>Preloader</h2> 
								<blockquote>Preloaders can serve to delight and excite the site visitors while they are waiting for the site to load. The protagonist's plane soaring across the page sets the tone of the film. After the page loads the users are greeted with the catchphrase for the film: “Sky is Never The Limit”.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<CodepenEmbed slug="RyGNYm" title="Preloader: American Made Film Site" height={720} handle="erchsm"/>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				black 
				name={sections[4]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}>
					<div className="grid">
						<div className="grid__row">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>{"Cinemagraphs"}</h2> 
								<blockquote>{"To add more subtle motion, I created Cinemagraphs. Cinemagraphs are a medium that enable deep visual storytelling all while keeping your site light & fast. Cinemagraphs helped to reinforce the cinematic quality of the site and tell the story of American Made in richer way."}</blockquote>
							</div>
						</div>
					</div>
					<SideScroller>
						<div className="grid__item grid__item--col-10 grid__item--col-11-medium">
							<Image src="../assets/img/american-made/columbia.gif"  aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
						<div className="grid__item grid__item--col-10 grid__item--col-11-medium">
							<Image src="../assets/img/american-made/hangar.gif"  aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
					</SideScroller>
				</ScrollSection>


				<ScrollSection 
				name={sections[5]} 
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(5); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Runway Navigation</h2>
								<blockquote>I designed a unique themed navigation for the site. The nav mimic’d the bird’s-eye view of a plane on an airport runway tarmack waiting to take off. The navigation is sticky but its minimalistic nature prevents it from blocking content as the user scrolls.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<CodepenEmbed slug="qoQajr" title="Navigation: American Made Film Site" height={625} handle="erchsm"/>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[6]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(6); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Video Gallery</h2>
								<blockquote>To provide a way for users to browse extensive video content from Universal Pictures I designed a video gallery that utilized the Youtube API for content. This way for later film sites that we develop we could simply re-style the player and plug in new content.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<CodepenEmbed slug="MGedbG" title="Video Gallery: American Made Film Site" height={625} handle="erchsm"/>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				black
				name={sections[7]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(7); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Parallax Story</h2>
								<blockquote>In my quest to unify content and interface, I wanted to create an interactive way to tell the plot of American Made in a visual way. I designed a scrolling parallax experience using Greensock which allows users to scroll through the story in a digestable way.</blockquote>
								<blockquote>I utilized video with alpha channel here, a new interesting technology for web browsers. This cinemagraph really helped to add a pop of motion.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<CodepenEmbed slug="ZoBVbY" title="Story: American Made Film Site" height={625} handle="erchsm"/>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[8]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(8); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Mobile</h2>
								<blockquote>A high percentage of the film site's traffic was going to be from mobile devices. Thus, I adopted a mobile-first design approach that focuses on simple essential functionality before moving onto more complex features for bigger screens.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							{/*<Image src="../assets/img/american-made/mobile.svg" aspectRatioWidth={16} aspectRatioHeight={9}/>*/}
							{/*<object data="../assets/img/american-made/mobile.svg" style={{ minWidth: "100%" }} type="image/svg+xml"></object>*/}
							{<iFrame src="../assets/img/american-made/mobile.svg"/>}
						</div>
					</div>
				</ScrollSection>

				{<ScrollSection 
				black
				name={sections[9]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(9); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2 className="mb0">Interactive Map</h2>
								<h3>“Fly With Barry”</h3>
								<blockquote>We developed an extra feature to accompany the site called “Fly With Barry”. The interactive map followed the timeline of Barry Seal’s escapades through Central and South America.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							{/*<object data="../assets/img/american-made/map-code2.svg" style={{ minWidth: "100%" }} type="image/svg+xml"></object>*/}
						</div>
					</div>
				</ScrollSection>}

				<NextProject 
				to="/vai"
				name="V.ai"
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/vai/banner.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .6`,
				}}/>

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
	perforce: () => dispatch(perforce()),
	cisco: () => dispatch(cisco()),
	protohack: () => dispatch(protohack()),
	openSecondaryPanel: () => dispatch(openSecondaryPanel()),
	closePrimaryPanel: () => dispatch(closePrimaryPanel()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AmericanMade)
