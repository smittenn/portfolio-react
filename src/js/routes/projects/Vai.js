import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import { reset, setCounter } from "../../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../../actions/abbreviation"
import { setPanel } from "../../actions/panel"

import HeroBlock from "../../components/blocks/HeroBlock"
import ScrollSection from "../../components/ScrollSection"

import ParallaxBackground from "../../components/ParallaxBackground"
import GridLines from "../../components/GridLines"
import Sidebar from "../../components/Sidebar"
import CodepenEmbed from "../../components/CodepenEmbed"
import Video from "../../components/Video"
import Image from "../../components/Image"
import SideScroller from "../../components/SideScroller"
import TextLink from "../../components/TextLink"

import ProjectUpNextBlock from "../../components/blocks/ProjectUpNextBlock"
import ProjectDetailsBlock from "../../components/blocks/ProjectDetailsBlock"
import ProjectIntroBlock from "../../components/blocks/ProjectIntroBlock"
import ProjectSectionBlock from "../../components/blocks/ProjectSectionBlock"

import splitWord from "../../services/splitWord"
import splitLetter from "../../services/splitLetter"
import hexToRgb from "../../services/hexToRgb"
import palette from "../../services/palette"
import darken from "../../services/darken"
import lighten from "../../services/lighten"

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
		const brandPrimary = '#B6462E';

		// const sections = pageSections.map(i => i.name)

		const heroBackgroundImage = this.props.isMobile ? 'mobile-5x8' : 'mobile-3x2';

		return (
			<article>
				<ParallaxBackground
				style={{
					backgroundImage: `
						radial-gradient(
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .12),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .24)
						),
						url(../assets/img/vai/${heroBackgroundImage}.jpg)
					`,
					backgroundColor: lighten(brandPrimary, 12),
				}}/>

				<ScrollSection
				name={sections[0]}
				black
				fullHeight
				sections={sections}
				activeSection={activeSection}
				style={{
					backgroundColor: 'transparent',
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<HeroBlock
					// headerText={[`The`, <span><span className="outline">Rationalized </span></span>, <span><span className="outline">Player </span></span>, `united web player UX across brands.`]}
					headerText={[`The`, <span><span className="outline">V.ai </span></span>, <span><span className="outline">Player </span></span>, `uses AI to detect objects & people in video.`]}
					/>
				</ScrollSection>


				<ScrollSection
				black
				name={sections[1]}
				disableSectionNumber
				sections={sections}
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1);}}
				style={{ backgroundColor: darken(brandPrimary, 6)}}>
					<ProjectIntroBlock
					col1="Have you ever watched a show online and gotten annoyed by the seemingly endless commercials? Did you download an ad blocker plugin to your browser? More likely than not, you did. \n\n In the current digital space, one filled with ad blockers and displeased consumers, the question of how to move forward in advertising remains unanswered. The traditional means of advertising can no longer withstand the test of time. Users patterns are changing."
					col2="The NBCUX Lab saw the need for a new way for brands to reach their audiences. In order to shape the future of how brands influence consumers our solution, The V.ai player, aims to bring AI and product integration into an immersive video-viewing experience. \n\n The NBCUX Lab operates as an internal agency at NBCUniversal working with different organizations within NBCU on a variety of projects ranging anywhere from consumer-facing film sites to internal tools and content management systems used by employees."
					col3="As the Lead Designer on this project I designed in the browser directly on our front-end video prototype. I directly contributed code to this prototype. I created all the icon, animations and typography system for this player. I also worked with Clarifi, the artificial intelligence API we used to power this prototype."
					col4="Clarifi’s image recognition technology with video recognition analyzes a video and predicts what’s inside of it. Their API analyzes inputs at a rate of 1 frame per second, which means a list of predicted results can be shown in real time."
					media={{ type: 'image', src: '../assets/img/vai/escalade.png', aspectRatioWidth: 16, aspectRatioHeight: 9 }}
					/>
				</ScrollSection>

				{/*style={{
					backgroundImage: `
						radial-gradient(
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .84),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .96)
						),
						url(../assets/img/vai/mr-robot.jpg)
					`,
				 	backgroundPosition: this.props.isMobile ? "center 10%" : "center 45%"
				}}*/}

				<ScrollSection
				black
				sections={sections}
				activeSection={activeSection}>
					<ProjectDetailsBlock
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
					<ProjectSectionBlock
					title="Player"
					description1="During video playback the player shows items related to the current scene. The player consists of an overlay and a full screen takeover for the user to dive in deeper."
					description2="V.ai helps identify people and product in the video (like the car the lead actor is in). V.ai allows for a user to deeply explore extras all without ever leaving the video."
					media={{ type: 'video', src: 'assets/img/vai/player.mp4', poster: 'assets/img/vai/player.png' }}
					/>
					{/*<ProjectSectionBlock
					title="Player"
					description1="During video playback the player shows items related to the current scene. V.ai helps identify people and product in the video (like the car the lead actor is in). V.ai allows for a user to deeply explore extras all without ever leaving the video."
					media={{ type: 'iframe', src: 'http://localhost:3002', aspectRatioWidth: this.props.isMobile ? 5 : 16, aspectRatioHeight:this.props.isMobile ? 8 : 9 }}
					/>*/}
				</ScrollSection>

				<ScrollSection
				name={sections[3]}
				black
				sections={sections}
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<ProjectSectionBlock
					title="Overlay"
					description1="Cards appear on the left side of the player when users hover or pause the video. V.ai mode is on by default and the toggle gives a user the option to easily turn it off."
					media={{ type: 'image', src: '../assets/img/vai/vai-overlay.png', aspectRatioWidth: 16, aspectRatioHeight: 9 }}
					/>

				</ScrollSection>

				<ScrollSection
				black
				name={sections[4]}
				sections={sections}
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}
				>
					<ProjectSectionBlock
					title="Products"
					description1="Brands could sponsor T.V. shows to promote their products in an innovative way without using commercials that interrupt viewers."
					description2="Fans can now shop for the same heart-shaped glasses made famous by Carly Shaikin in Mr. Robot without even needing to tab away from the video."
					media={{ type: 'image', src: '../assets/img/vai/product.png', aspectRatioWidth: 16, aspectRatioHeight: 9 }}
					/>
				</ScrollSection>

				<ScrollSection
				name={sections[5]}
				black
				sections={sections}
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(5); }}>
					<ProjectSectionBlock
					title="People"
					description1="Have you ever pulled out your phone in the middle of a movie to find out who plays the charismatic protagonist? Now, by merging character and actor information into the video player, we’ve eliminated the need to whip out another device to answer that irking question."
					media={{ type: 'side-scroller' }}>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/vai/people.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/vai/character.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/vai/actor.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
					</ProjectSectionBlock>


				</ScrollSection>

				<ScrollSection
				black
				sections={sections}
				activeSection={activeSection}>
					<ProjectUpNextBlock name="Translator" to="translator"/>
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