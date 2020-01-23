import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import { reset, setCounter } from "../../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../../actions/abbreviation"
import { setPanel } from "../../actions/panel"

import ParallaxHeader from "../../components/ParallaxHeader"
import ScrollArrow from "../../components/ScrollArrow"
import ScrollSection from "../../components/ScrollSection"

import GridLines from "../../components/GridLines"
import Sidebar from "../../components/Sidebar"
import CodepenEmbed from "../../components/CodepenEmbed"
import Video from "../../components/Video"
import Image from "../../components/Image"
import SideScroller from "../../components/SideScroller"
import TextLink from "../../components/TextLink"

import NextProjectBlock from "../../components/blocks/NextProjectBlock"
import DetailsBlock from "../../components/blocks/DetailsBlock"
import ProjectIntroBlock from "../../components/blocks/ProjectIntroBlock"

import splitWord from "../../services/splitWord"
import splitLetter from "../../services/splitLetter"
import hexToRgb from "../../services/hexToRgb"
import palette from "../../services/palette"

import people from "../../data/people"


class Vai extends Component {

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.vai();
		this.props.reset();
		this.props.setPanel("NBCUX Lab");
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "intro",
			sections: [
				"intro",
				"overview",
				"player",
				"overlay",
				"products",
				"people",
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

		const { setCounter, setNavWhite, setNavBlack } = this.props;
		const { activeSection, sections } = this.state;

		const brandBlack = hexToRgb(palette("brand-black"));

		// const sections = pageSections.map(i => i.name)

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
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .12),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .24)
						),
						url(../assets/img/vai/mobile.png)
					`, 
					backgroundSize: (this.props.isMobile ? '120%' : '60% 120%'),
					backgroundPosition: (this.props.isMobile ? '-230% -470%' : '60% -280%'),
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[`The`, <span><span className="outline">V.ai </span></span>, <span><span className="outline">Player </span></span>, `uses AI to identify objects in video.`]}
					// headerText={[`The`, <span className="outline"><span>Rationalized </span></span>, `player unified the UX across NBCU video players.`]}
					/>
				</ScrollSection>


				<ScrollSection 
				name={sections[1]} 
				disableSectionNumber
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1);}}>
					<ProjectIntroBlock 
					col1="Have you ever watched a show online and gotten annoyed by the seemingly endless commercials? Did you download an ad blocker plugin to your browser? More likely than not, you did. \n\n In the current digital space, one filled with ad blockers and displeased consumers, the question of how to move forward in advertising remains unanswered. The traditional means of advertising can no longer withstand the test of time. Users are changing." 
					col2="The NBCUX Lab saw the need for a new way for brands to reach their audiences. In order to shape the future of how brands influence consumers our solution, The V.ai player, aims to bring AI and product integration into an immersive video-viewing experience. \n\n The NBCUX Lab operates as an internal agency at NBCUniversal working with different organizations within NBCU on a variety of projects ranging anywhere from consumer-facing film sites to internal tools and content management systems used by employees." 
					col3="As the Lead Designer on this project I designed right in the browser using our front-end video prototype. I directly contributed code to this prototype. I created all the icon, animations and typography system for this player. I also worked with the AI javascript API we used to power this prototype." 
					col4="Clarifi’s image recognition technology with video recognition analyzes a video and predicts what’s inside of it. Their API analyzes inputs at a rate of 1 frame per second, which means a list of predicted results will be given for every second of the video."
					media={{ type: 'image', src: '../assets/img/vai/escalade.png', aspectRatioWidth: 16, aspectRatioHeight: 9 }}
					/>
				</ScrollSection>

				<ScrollSection 
				black
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `
						radial-gradient(
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .8),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .95) 
						),
						url(../assets/img/vai/mr-robot.jpg)
					`,
				 	backgroundPosition: this.props.isMobile ? "center" : "center 30%"
				}}>
					<DetailsBlock 
					role="Lead UI/UX Designer" 
					date="October, 2017" 
					client="NBCUX Lab" 
					team={["Mina Azimov","Kennix Lee", "Oleksandr Lebedyev", "Jing Zhao"]}/>
				</ScrollSection>

				<ScrollSection 
				name={sections[2]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Player</h2>
								<blockquote>During video playback the player shows items related to the current scene. V.ai helps identify people and product in the video (like the car the lead actor is in). V.ai allows for a user to deeply explore extras all without ever leaving the video.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Video src="assets/img/vai/player.mp4"/>
							{/*<Image src="../assets/img/vai/vai-overlay.png" aspectRatioWidth={16} aspectRatioHeight={9}/>*/}
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[3]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Overlay</h2>
								<blockquote>Cards appear on the left side of the player when users hover or pause the video. V.ai mode is on by default and the toggle gives a user the option to easily turn it off.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							{<Image src="../assets/img/vai/vai-overlay.png" aspectRatioWidth={16} aspectRatioHeight={9}/>}
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				black
				name={sections[4]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}
				>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-7 grid__item--col-12-medium">
								<h2>Products</h2>
								<blockquote>Brands could sponsor T.V. shows to promote their products in an innovative way without using commercials that interrupt viewers. Fans can now shop for the same heart-shaped glasses made famous by Carly Shaikin in Mr. Robot without even needing to tab away from the video.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/vai/product.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
					</div>
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
								<h2>People</h2>
								<blockquote>Have you ever pulled out your phone in the middle of a movie to find out who plays the charismatic protagonist? Now, by merging character and actor information into the video player, we’ve eliminated the need to whip out another device to answer that irking question.</blockquote>
							</div>
						</div>
					</div>
					<SideScroller>
					<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/vai/people.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
					<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/vai/character.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
					<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/vai/actor.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>

					</SideScroller>
				</ScrollSection>

				<ScrollSection 
				black
				sections={sections} 
				activeSection={activeSection}>
					<NextProjectBlock name="Translator" to="translator"/>
				</ScrollSection>



				{/*<ScrollSection 
				black
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/translator/banner.gif)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .24`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
					<NavLink to="translator" className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<h4 className="light">Next Up</h4>
							<h2 className="mb0">Translator</h2>
						</div>
					</NavLink>
				</ScrollSection>*/}
				
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
	setPanel: (str) => dispatch(setPanel(str)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Vai)
