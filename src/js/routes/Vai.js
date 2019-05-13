import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import Codepen from "react-codepen-embed"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"
import { setNavWhite, setNavBlack } from "../actions/color"

import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"
import ScrollSection from "../components/ScrollSection"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"
import CodepenEmbed from "../components/CodepenEmbed"
import Image from "../components/Image"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"


class Vai extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.vai();
		this.props.reset();
		this.props.setNavWhite();
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "intro",
			pageSections: [
				{ name: "intro", },
				{ name: "overview", },
				{ name: "details", },
				{ name: "player-overlay", },
				{ name: "products", },
				{ name: "people", },
			],
		}
	}

	setActiveSection = (name) => {
		this.setState({
			activeSection: name,
		})
	}


	render() {

		const { setCounter, setNavWhite, setNavBlack } = this.props;
		const { activeSection, pageSections } = this.state;

		const brandBlack = hexToRgb(palette("brand-black"));

		const sections = pageSections.map(i => i.name)

		return (
			<article>
				<Element 
				name={sections[0]} 
				className={classNames({ "active-section" : activeSection == sections[0]})}>
					<ParallaxHeader 
					name={sections[0]}
					sections={sections} 
					activeSection={activeSection}
					headerText={[`The`, <span className="outline"><span>V.ai </span></span>, `video player uses AI to identify people and products`]}
					bgImage={"../assets/img/vai/banner.gif"}
					onSetActive={() => { setCounter(1); setNavWhite(); this.setActiveSection(sections[0]);}}
					/>
					<Link to={sections[1]} spy={true} smooth={true} hashSpy={true} offset={0} onSetActive={() => { setCounter(2); setNavBlack(); this.setActiveSection(sections[1]); }}>
						<ScrollArrow/>
					</Link>
				</Element>

				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { setCounter(2); setNavBlack(); this.setActiveSection(sections[1]);}}>
					<div className="grid">
						{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
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
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[2]}
				black 
				sections={sections} 
				activeSection={activeSection}
				style={{ backgroundImage: `url(../assets/img/vai/one-plus.jpg)`, backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .8`, backgroundPosition: "center 20%" }}  
				onSetActive={() => { setCounter(3); this.setActiveSection(sections[2]); }}>
					<div className="grid">
						{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
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
						<div className="grid__item grid__item--col-5 grid__item--col-6-medium">
							<h6 className="uppercase">Team</h6>
							<blockquote><a href="https://www.linkedin.com/in/minaazimov">Mina Azimov</a>, <a href="https://www.linkedin.com/in/oleksandr-lebedyev/">Alex Lebedyev</a>, <a href="">Kennix Lee</a>, <a href="">Jing Zhao</a> </blockquote> 
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[3]}
				black 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { setCounter(4); this.setActiveSection(sections[3]); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Player Overlay</h2>
								<blockquote>During video playback the player shows items related to the current scene. After identifying a product in the video (like that car the lead actor is in), V.ai allows users to easily access the purchasing space without encroaching on the viewing experience.</blockquote>
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
				onSetActive={() => { setCounter(5); this.setActiveSection(sections[4]); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Products</h2>
								<blockquote>Brands can now sponsor T.V. shows and movies to promote their products in a new and innovative way without using traditional commercials that interrupt and upset consumers. Fans of the show can now shop for the same heart-shaped glasses made famous by Carly Shaikin in Mr. Robot without even needing to tab away from the video.</blockquote>
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
				onSetActive={() => { setCounter(6); this.setActiveSection(sections[5]); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>People</h2>
								<blockquote>Besides addressing the goal of advertising, V.ai aims to elevate the video viewing experience. Have you ever pulled out your phone in the middle of a movie to find out who plays the charismatic protagonist? Now, by merging character and actor information into the video player, we’ve eliminated the need to whip out another device to answer that irking question.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<Image src="../assets/img/vai/people.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-4 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<div className="spacer spacer__sm"/>
							<Image src="../assets/img/vai/character.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
					</div>
				</ScrollSection>
				
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

export default connect(mapStateToProps, mapDispatchToProps)(Vai)


				// <ParallaxHeader 
				// bgImage={"../assets/img/vai/banner.gif"}
				// headerText={[`The`, <span className="outline">V.ai&nbsp;</span>, <span className="outline">player&nbsp;</span>,`uses AI to identify people and objects in video`]}
