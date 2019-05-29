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


class JnjHome extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.jjHome();
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
					headerText={[ <span className="outline"><span>Home </span></span>, `is a place for J&J employees to connect and create.`]}
					bgImage={"../assets/img/jnj-home/onboarding-mobile-16x9.png"}
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
									<Image src="../assets/img/jnj-home/connected.svg" aspectRatioWidth={16} aspectRatioHeight={9} />
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<blockquote>
										My goal for this project as a Designer on the project was to solve for the pain points of J&J employees and implement the new J&J True North branding while extending it to add motion and animation principles.
									</blockquote>
								</div>
								{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
								<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
									<blockquote>
										The new design for Home helped employees connect with each other and find resources they need while bringing J&J's people experience into the 21st century.
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
					backgroundImage: `url(../assets/img/jnj-home/city.svg)`, 
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
							<blockquote>Interaction Designer</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Date</h6>
							<blockquote>Fall, 2019</blockquote>
						</div>
						<div className="grid__item grid__item--col-3  grid__item--col-6-medium">
							<h6 className="uppercase">Client</h6>
							<blockquote>J&J People Experience</blockquote> 
						</div>
						<div className="grid__item grid__item--col-4  grid__item--col-6-medium">
							<h6 className="uppercase">Team</h6>
							<blockquote>
								<a href="//www.linkedin.com/in/alex-gross-668b2218/">Alex Gross</a>, <a href="">Chris Purcell</a>, <a href="//www.linkedin.com/in/mkcorcoran/">Katrina Corcoran</a>, <a href="">Howard Chambers</a>, <a href="">Alisha Austin</a>,
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
						{/*<div className="grid__item grid__item--col-3">
							<iframe src="https://erchsm.github.io/jnj-process/prototypes/home-profile-setup.html" height="720"/>
						</div>*/}
						{/*<div className="grid__item grid__item--col-1  grid__item--hide-bp-medium"/>*/}
						<div className="grid__item grid__item--col-12">
							<Image src="../assets/img/jnj-home/onboarding-kiosk-mock.png" aspectRatioWidth={3} aspectRatioHeight={2}/>
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
							<iframe src="https://erchsm.github.io/jnj-process/prototypes/home-nav.html" height="720"/>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				black
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
							<iframe src="https://erchsm.github.io/jnj-process/prototypes/home-links.html" height="720"/>
						</div>
					</div>
				</ScrollSection>


				<NextProject 
				to="/jnj-mdc"
				name="J&J MDC"
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/jnj-mdc/ladies.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .6`,
					backgroundSize: 'cover',
					backgroundPosition: '50% 80%',
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

export default connect(mapStateToProps, mapDispatchToProps)(JnjHome)
