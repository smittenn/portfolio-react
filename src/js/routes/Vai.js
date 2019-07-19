import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"

import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"
import ScrollSection from "../components/ScrollSection"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"
import CodepenEmbed from "../components/CodepenEmbed"
import Image from "../components/Image"
import SideScroller from "../components/SideScroller"
import NextProject from "../components/NextProject"
import TextLink from "../components/TextLink"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"

import people from "../data/people"


class Vai extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.vai();
		this.props.reset();
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "intro",
			sections: [
				"intro",
				"overview",
				"details",
				"player",
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
			<main>
				<ScrollSection 
				name={sections[0]}
				black 
				fullHeight
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/vai/banner-mod.gif)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .4`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[`The`, <span className="outline"><span>V.ai </span></span>, `video player uses AI to identify people and products.`]}
					/>
				</ScrollSection>


				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1);}}>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<blockquote className="drop-caps">
								Have you ever watched a show online and gotten annoyed by the seemingly endless commercials? Did you download an ad blocker plugin to your browser? More likely than not, you did. In the current digital space, one filled with ad blockers and displeased consumers, the question of how to move forward in advertising remains unanswered. The traditional means of advertising can no longer withstand the test of time. Users are changing.
							</blockquote>
							<blockquote>
								The NBCUX Lab saw the need for a new way for brands to reach their audiences. In order to shape the future of how brands influence consumers our solution, The V.ai player, aims to bring AI and product integration into an immersive video-viewing experience.
							</blockquote>
							<blockquote>
								The NBCUX Lab operates as an internal agency at NBCUniversal working with different organizations within NBCU on a variety of projects ranging anywhere from consumer-facing film sites to internal tools and content management systems used by employees.
							</blockquote>
						</div>
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<div className="grid__row">
								<div className="grid__item grid__item--col-12">
									<Image src="../assets/img/vai/chevrolet.jpg"  aspectRatioWidth={16} aspectRatioHeight={9}/>
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item grid__item--col-12 grid__item--col-12-medium">
									<blockquote>
										As the Lead Designer on this project I designed right in the browser using our front-end video prototype. I directly contributed code to this prototype. I created all the icon, animations and typography system for this player. I also worked with the AI javascript API we used to power this prototype.
									</blockquote>
									<blockquote>
										Clarifi's image recognition technology with video recognition analyzes a video and predicts what’s inside of it. Their API analyzes inputs at a rate of 1 frame per second, which means a list of predicted results will be given for every second of the video.
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
				style={{ backgroundImage: `url(../assets/img/vai/escalade.png)`, backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .8`, backgroundPosition: "center 10%" }}  
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-2 grid__item--col-6-medium">
							<h6 className="uppercase">Role</h6>
							<blockquote>Lead Designer</blockquote>
						</div>
						<div className="grid__item grid__item--col-2 grid__item--col-6-medium">
							<h6 className="uppercase">Date</h6>
							<blockquote>October, 2017</blockquote>
						</div>
						<div className="grid__item grid__item--col-2 grid__item--col-6-medium">
							<h6 className="uppercase">Client</h6>
							<blockquote>NBCUX Lab</blockquote> 
						</div>
						<div className="grid__item grid__item--col-4 grid__item--col-6-medium">
							<h6 className="uppercase">Team</h6>
							<blockquote>
								<TextLink><a href={people["Mina Azimov"]}>Mina Azimov</a></TextLink>,&nbsp;
								<TextLink><a href={people["Oleksandr Lebedyev"]}>Oleksandr Lebedyev</a></TextLink>,&nbsp;
								<TextLink><a href={people["Kennix Lee"]}>Kennix Lee</a></TextLink>,&nbsp;
								<TextLink><a href={people["Jing Zhao"]}>Jing Zhao</a></TextLink> 
							</blockquote> 
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
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>The Player</h2>
								<blockquote>During video playback the player shows items related to the current scene. After identifying a product in the video (like that car the lead actor is in), V.ai allows users to easily access the purchasing space without distracting from the viewing experience.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12">
							<Image src="../assets/img/vai/vai-overlay.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[4]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-7 grid__item--col-12-medium">
								<h2>Products</h2>
								<blockquote>Brands can now sponsor T.V. shows to promote their products in an innovative way without using traditional commercials that interrupt consumers. Fans can now shop for the same heart-shaped glasses made famous by Carly Shaikin in Mr. Robot without even needing to tab away from the video.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12">
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
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>People</h2>
								<blockquote>Have you ever pulled out your phone in the middle of a movie to find out who plays the charismatic protagonist? Now, by merging character and actor information into the video player, we’ve eliminated the need to whip out another device to answer that irking question.</blockquote>
							</div>
						</div>
					</div>
					<SideScroller>
						<div className="grid__item grid__item--col-8 grid__item--col-10-medium">
							<Image src="../assets/img/vai/people.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
						<div className="grid__item grid__item--col-8 grid__item--col-10-medium">
							<Image src="../assets/img/vai/character.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
						<div className="grid__item grid__item--col-8 grid__item--col-10-medium">
							<Image src="../assets/img/vai/actor.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>

					</SideScroller>
				</ScrollSection>


				<NextProject 
				to="/translator"
				name="Translator"
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/translator/banner.png)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .6`,
				}}/>

				
			</main>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Vai)


				// <ParallaxHeader 
				// bgImage={"../assets/img/vai/banner.gif"}
				// headerText={[`The`, <span className="outline">V.ai&nbsp;</span>, <span className="outline">player&nbsp;</span>,`uses AI to identify people and objects in video`]}
