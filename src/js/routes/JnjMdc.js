import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import Codepen from "react-codepen-embed"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"

import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"
import ScrollSection from "../components/ScrollSection"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"
import CodepenEmbed from "../components/CodepenEmbed"
import NextProject from "../components/NextProject"
import SideScroller from "../components/SideScroller"

import NewUserSetup from "../components/sandbox/NewUserSetup"

import Image from "../components/Image"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"


class JnjMdc extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.jjMdc();
		this.props.reset();
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "overview",
			sections: [
				"overview",
				"about",
				"details",
				"new-user",
				"meganav",
				"links",
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


		return (
			<article>
				<Element 
				name={sections[0]} 
				className={classNames({ "active-section" : activeSection == sections[0]})}>
					<ParallaxHeader 
					name={sections[0]}
					sections={sections}
					activeSection={activeSection}
					headerText={[ <span className="outline"><span>MDC </span></span>, `unified the websites for J&J Medical Device Companies.`]}
					bgImage={"../assets/img/jnj-mdc/ladies.jpg"}
					onSetActive={() => { this.setActiveSection(0); }}
					/>
				</Element>


				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<blockquote className="drop-caps">
								We wanted a better way to J&J. So we made one. While our 128,000 colleagues around the world are building the future of healthcare, we're building a better J&J. 
							</blockquote>
							<blockquote>
								But its not just about convenience and collaboration. It's about having a single digital hub that connects all employees. Our goal was to empower every J&J employee to pursue their vision and values, no matter their field, function or seniority. 
							</blockquote>
							<blockquote>
								We set out to create a more connected and productive environment that generates excitement about all of the innovative, groundbreaking work happening at J&J. We also wanted to build a centralized platform to house all the links and resources our peers use every day, enabling them to access vital information from any device, anywhere. 
							</blockquote>

						</div>
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-7 grid__item--col-12-medium">
							<div className="grid__row">
								<div className="grid__item grid__item--col-12">
									<Image src="../assets/img/jnj-mdc/running-man-16x9.png" aspectRatioWidth={16} aspectRatioHeight={9} />
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<blockquote>
										My goal for this project as the Lead Designer was to solve many of the pain points for these technicians and create a flexible design system that not only accomidated the content registration workflow we were intitially tasked with designing but was also flexible enough for to design features later.
									</blockquote>
								</div>
								{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
								<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
									<blockquote>
										With the our new design, the unified system is more efficient. It eliminates the brands’ reliance on the folder structure and the middlemen (i.e., the MAMs) who manage the brand strorage, as well as significantly streamlines the communication between teams.
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
					backgroundImage: `url(../assets/img/jnj-mdc/forest.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .12`,
					backgroundPosition: '50% 80%',
					backgroundRepeat: 'repeatX',
					backgroundSize: 'cover',
				}}  
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						{/*<div className="grid__item grid__item--col-2 grid__item--hide-bp-medium"/>*/}
						<div className="grid__item grid__item--col-3  grid__item--col-6-medium">
							<h6 className="uppercase">Role</h6>
							<blockquote>Sr. Interaction Designer</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Date</h6>
							<blockquote>Fall, 2018</blockquote>
						</div>
						<div className="grid__item grid__item--col-3  grid__item--col-6-medium">
							<h6 className="uppercase">Client</h6>
							<blockquote>J&J Consumer</blockquote> 
						</div>
						<div className="grid__item grid__item--col-4  grid__item--col-6-medium">
							<h6 className="uppercase">Team</h6>
							<blockquote>
								<a href="">Matthew Abate</a>, 
								<a href="">Stephanie Skuzenski</a>, 
								<a href="">Laura Hines</a>,
								<a href="">Katrina Corcoran</a>,
								<a href="">Jinny Kim</a>,
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
								<h2>Onboarding</h2>
								<blockquote>The J&J Home Onboarding iPad kiosk is filled out by employees on their first day. After providing basic information in this short experience the new employee can visit Home to learn about services nearby, and tools necessary for their job and give them the profile links for people they will be working with frequently.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{/*<div className="grid__item grid__item--col-1  grid__item--hide-bp-medium"/>*/}
						<div className="grid__item grid__item--col-12">
							{/*<Image src="../assets/img/jnj-home/onboarding-kiosk-mock.png" aspectRatioWidth={3} aspectRatioHeight={2}/>*/}
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
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Meganav</h2>
								<blockquote>I designed a robust navigation to help employees navigate the vast wealth of information at J&J. Providing access to an employyee's most used links from anywhere on Home was important. Utilizing a secondary panel a user could access their favorited links.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12">
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				name={sections[5]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(5); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Links Directory</h2>
								<blockquote>I designed a directory for the 10,000+ links available to employees at J&J. Working with content strategy and our users we theorized 12 categories that links could be bucketed into.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12">
						</div>
					</div>
				</ScrollSection>


				<NextProject 
				to="/micro-app-interactions"
				name="Micro App Interactions"
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/card-components/share-animation-zoomed-out.gif)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .6`,
					backgroundSize: 'contain',
					backgroundPosition: 'center',
				}}/>

				{<Link to={sections[1]} spy={true} smooth={"easeOutCubic"} duration={1200} hashSpy={false} offset={0} onSetActive={() => { setCounter(2); this.setActiveSection(1); }}>
					<ScrollArrow label="Read More"/>
				</Link>}

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
})

export default connect(mapStateToProps, mapDispatchToProps)(JnjMdc)
