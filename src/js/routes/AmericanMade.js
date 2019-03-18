import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import Codepen from "react-codepen-embed"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"
import { setNavWhite, setNavBlack } from "../actions/color"

import Nav from "../components/Nav"
import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"
import ScrollSection from "../components/ScrollSection"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"
import CodepenEmbed from "../components/CodepenEmbed"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"


class AmericanMade extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.americanMade();
		this.props.reset();
		this.props.setNavWhite();
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "overview",
			pageSections: [
				"overview",
				"about",
				"details",
				"cinemagraphs",
				"preloader",
				"navigation",
				"video-gallery",
				"parallax",
				"mobile-first",
				"immersive-map",
			],
		}
	}

	setActiveSection = (idx) => {
		this.setState({
			activeSection: this.state.pageSections[idx],
		})
		this.props.setCounter(idx + 1);
	}


	render() {

		const { setCounter, setNavWhite, setNavBlack } = this.props;
		const { activeSection, pageSections } = this.state;

		const brandBlack = hexToRgb(palette("brand-black"));


		return (
			<article>
				<Element 
				name={pageSections[0]} 
				className={classNames({ "active-section" : activeSection == pageSections[0]})}>
					<ParallaxHeader 
					name={pageSections[0]}
					headerText={[ `The`, <span className="outline">American </span>, <span className="outline">Made </span>, `film site excited our movie-goers`]}
					bgImage={"../assets/img/american-made/output.gif"}
					strength={200}
					onSetActive={() => { setNavWhite(); this.setActiveSection(0); }}
					/>
					{<Link to={pageSections[1]} spy={true} smooth={"easeOutQuint"} duration={1200} hashSpy={true} offset={0} onSetActive={() => { setCounter(2); setNavBlack(); this.setActiveSection(1); }}>
						<ScrollArrow/>
					</Link>}
				</Element>

				<ScrollSection 
				name={pageSections[1]} 
				onSetActive={() => { setNavBlack(); this.setActiveSection(1); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-7 grid__item--col-12-medium">
							<h2>I took a deep dive into the story of the American Made film when the NBCUX Lab partnered with Universal Pictures</h2> 
							<p>
								The final design is the product of many late nights and too many cups of coffee. It all paid off and the film earned $16.7 million at the box office the first weekend. From our site there was a 63% conversion rate from our site to purchase tickets!
								<br/><br/>
								The NBCUX Lab operates as an internal agency at NBCUniversal working with different organizations within NBCU on a variety of projects ranging from consumer film sites to internal tools and content management systems. My goal for this project as the lead designer was to integrate the cinematic content of the site and the UI in a seamless way.
							</p>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={pageSections[2]}
				black 
				style={{ 
					backgroundImage: `url(../assets/img/american-made/s07-synopsis.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .6`,
				}}  
				onSetActive={() => { setNavWhite(); this.setActiveSection(2); }}>
					<div className="grid">
						{/*<div className="grid__item grid__item--col-1"/>*/}
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h5 className="uppercase">Role</h5>
							<blockquote>Lead Designer</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h5 className="uppercase">Date</h5>
							<blockquote>June, 2017</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h5 className="uppercase">Client</h5>
							<blockquote>NBCUX Lab</blockquote> 
						</div>
						<div className="grid__item grid__item--col-4  grid__item--col-6-medium">
							<h5 className="uppercase">Team</h5>
							<blockquote><a href="https://www.linkedin.com/in/minaazimov">Mina Azimov</a>, <a href="https://www.linkedin.com/in/oleksandr-lebedyev/">Alex Lebedyev</a>, <a href="https://www.linkedin.com/in/poplar-bai/">Poplar Bai</a></blockquote> 
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				black 
				name={pageSections[3]} 
				onSetActive={() => { setNavWhite(); this.setActiveSection(3); }}>
					<div className="grid">
						<div className="grid__row">
							{/*<div className="grid__item grid__item--col-1"/>*/}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h1>{splitWord("Cinemagraphs")}</h1> 
								<blockquote>{splitWord("To add more subtle motion, I decided to create Cinemagraphs. Cinemagraphs are a medium that enable deep visual storytelling all while keeping your site light & fast. Cinemagraphs helped to reinforce the cinematic quality of the site and tell the story of American Made in richer way.")}</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<img src="../assets/img/american-made/columbia.gif"/>
						</div>
						{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<img src="../assets/img/american-made/hangar.gif"/>
						</div>
					</div>
				</ScrollSection>

				{/*<ScrollSection 
				name={pageSections[4]} 
				onSetActive={() => { setNavWhite(); this.setActiveSection(4); }} 
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
				name={pageSections[4]} 
				onSetActive={() => { setNavBlack(); this.setActiveSection(4); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>{splitWord("Preloader")}</h2> 
								<blockquote>{splitWord("Preloaders can serve to delight and excite the site visitors while they are waiting for the site to load. The protagonist's plane soaring across the page sets the tone of the film. After the page loads the users are greeted with the catchphrase for the film: \“Sky is Never The Limit\”.")}</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12">
							<CodepenEmbed slug="RyGNYm" title="Preloader: American Made Film Site" height={720} handle="erchsm"/>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={pageSections[5]} 
				black
				onSetActive={() => { setNavWhite(); this.setActiveSection(5); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>“Runway” Navigation</h2>
								<blockquote>I designed a unique themed navigation for the site. The nav mimic'd the bird's-eye view of a plane on an airport runway tarmack waiting to take off. The navigation is sticky but its minimalistic nature prevents it from blocking content as the user scrolls.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12">
							<CodepenEmbed slug="qoQajr" title="Navigation: American Made Film Site" height={625} handle="erchsm"/>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={pageSections[6]} 
				onSetActive={() => { setNavBlack(); this.setActiveSection(6); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Video Gallery</h2>
								<blockquote>To provide a way for users to browse extensive video content from Universal Pictures I designed a video gallery that utilized the Youtube API for content. This way for later film sites that we develop we could simply re-style the player and plug in new content.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12">
							<CodepenEmbed slug="MGedbG" title="Video Gallery: American Made Film Site" height={625} handle="erchsm"/>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				black
				name={pageSections[7]} 
				onSetActive={() => { setNavWhite(); this.setActiveSection(7); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Scrolling Story: Parallax</h2>
								<blockquote>In my quest to unify content and interface, I wanted to create an interactive way to tell the plot of American Made in a visual way. I designed a scrolling parallax experience using Greensock which allows users to scroll through the story in a digestable way.</blockquote>
								<blockquote>I utilized video with alpha channel here, a new interesting technology for web browsers. This cinemagraph really helped to add a pop of motion.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12">
							<CodepenEmbed slug="ZoBVbY" title="Story: American Made Film Site" height={625} handle="erchsm"/>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				black
				name={pageSections[8]} 
				onSetActive={() => { setNavWhite(); this.setActiveSection(8); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h1>Mobile First Design</h1>
								<blockquote>A high percentage of the film site's traffic was going to be from mobile devices. Thus, I adopted a mobile-first design approach that focuses on bare essential functionality before moving onto more features for bigger screens.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12">
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				black
				name={pageSections[9]} 
				onSetActive={() => { setNavWhite(); this.setActiveSection(9); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h1 className="no-mb">Immersive Map</h1>
								<h2>“Fly With Barry”</h2>
								<blockquote>We developed an extra feature to accompany the site called “Fly With Barry”. The interactive map followed the timeline of his escapades through Central and South America.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12">
						</div>
					</div>
				</ScrollSection>

				<Sidebar 
				sections={pageSections} 
				activeSection={activeSection}
				/>

				<GridLines/>
			</article>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
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
	setNavWhite: () => dispatch(setNavWhite()),
	setNavBlack: () => dispatch(setNavBlack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AmericanMade)
