import React, {Component} from "react"
import { connect } from "react-redux"

import { reset, setCounter } from "../../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce1, perforce2 } from "../../actions/abbreviation"
import { setPanel } from "../../actions/panel"

import { HeroBlock } from "../../components/blocks/HeroBlock"
import ScrollSection from "../../components/ScrollSection"

import ParallaxBackground from "../../components/ParallaxBackground"
import Image from "../../components/Image"

import ProjectUpNextBlock from "../../components/blocks/ProjectUpNextBlock"
import ProjectDetailsBlock from "../../components/blocks/ProjectDetailsBlock"
import ProjectIntroBlock from "../../components/blocks/ProjectIntroBlock"
import ProjectSectionBlock from "../../components/blocks/ProjectSectionBlock"

import hexToRgb from "../../services/hexToRgb"
import palette from "../../services/palette"
import darken from "../../services/darken"
import lighten from "../../services/lighten"


class RationalizedPlayer extends Component {

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
				"about",
				"ai mode",
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
		const { activeSection, sections } = this.state;

		const brandBlack = hexToRgb(palette("brand-black"));
		const brandPrimary = '#B6462E';

		const heroBackgroundImage = this.props.isMobile ? 'mobile-5x8' : 'mobile-3x2';

		return (
			<article>

				<ScrollSection
				name={sections[0]}
				black
				fullHeight
				sections={sections}
				activeSection={activeSection}
				background={<ParallaxBackground
				style={{
					backgroundImage: `
						radial-gradient(
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .12),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .24)
						),
						url(../assets/img/vai/${heroBackgroundImage}.jpg)
					`,
					backgroundColor: lighten(brandPrimary, 12),
				}}/>}
				onSetActive={() => { this.setActiveSection(0); }}>
					<HeroBlock
					headerText={[`The `, <span><span className="outline">Rationalized </span></span>, <span><span className="outline">Player </span></span>, `uses AI to detect objects & people in video.`]}
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
					col1Top="Have you ever watched a show online and gotten annoyed by the seemingly endless commercials? Did you download an ad blocker plugin to your browser? More likely than not, you did. 
					\n\nIn the current digital space, one filled with ad blockers and displeased consumers, the question of how to move forward in advertising remains unanswered. The traditional means of advertising can no longer withstand the test of time. Users patterns are changing."
					col1Bottom="As the Lead Designer on this project I designed in the browser directly on our front-end video prototype. I directly contributed code to this prototype. I created the icon library, animations and typography system for the player. I also worked with Clarifi, the artificial intelligence API we used to power this prototype."
					col2Top="The NBCUX Lab saw the need for a new way for brands to reach their audiences. In order to shape the future of how brands influence consumers our solution, AI Mode, aims to bring AI and product integration into an immersive video-viewing experience. The solution fit seemlessly into our existing Rationalized Player.
					\n\nThe Rationalized Player is a video player the NBCUX Lab created to unify the viewing experience across entertainment brands. The NBCUX Lab operates across brands at NBCUniversal and is well poised to create a player unifying the experience."
					col2Bottom="Clarifi’s image recognition technology with video recognition analyzes a video and predicts what’s inside of it. Their API analyzes inputs at a rate of 1 frame per second, which means a list of predicted results can be shown in real time."
					/>
				</ScrollSection>

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
					title="Ai Mode"
					description1="During video playback the player shows items related to the current scene. The player consists of an overlay and a full screen takeover for the user to dive in deeper."
					description2="AI Mode helps identify people and product in the video (like the car the lead actor is in). AI mode allows for a user to deeply explore extras all without ever leaving the video."
					media={{ type: 'video', src: 'assets/img/vai/player.mp4', poster: 'assets/img/vai/player.png', hideControls: true }}
					/>
				</ScrollSection>

				<ScrollSection
				name={sections[3]}
				black
				sections={sections}
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<ProjectSectionBlock
					title="Overlay"
					description1="Cards appear on the left side of the player when users hover or pause the video. AI mode is on by default and the toggle gives a user the option to easily turn it off."
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
					description1="Brands could sponsor products in a during playback to promote their products in an innovative way. Pesky commercials that interrupt viewers are a thing of the past."
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
					description1="Have you ever pulled out your phone in the middle of a movie to find out who plays the charismatic protagonist? Now, by merging character and actor information into the video player, we’ve eliminated the need for a second device to answer that question."
					media={{ type: 'carousel' }}>
						<div className="grid__item grid__item--col-12 grid__item--col-12-medium">
							<Image src="../assets/img/vai/people.png" aspectRatioWidth={16} aspectRatioHeight={9} caption={"The People tab shows Actors and their corresponding characters in the video."}/>
						</div>
						<div className="grid__item grid__item--col-12 grid__item--col-12-medium">
							<Image src="../assets/img/vai/character.png" aspectRatioWidth={16} aspectRatioHeight={9} caption={"Clicking into a character reveals a short bio about the character."}/>
						</div>
						<div className="grid__item grid__item--col-12 grid__item--col-12-medium">
							<Image src="../assets/img/vai/actor.png" aspectRatioWidth={16} aspectRatioHeight={9} caption={"A user can flip the tile to learn about the actor."}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(RationalizedPlayer)
