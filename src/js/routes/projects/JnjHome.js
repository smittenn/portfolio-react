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
import SideScroller from "../../components/SideScroller"
import IFrame from "../../components/IFrame"
import TextLink from "../../components/TextLink"
import Image from "../../components/Image"

import NextProjectBlock from "../../components/blocks/NextProjectBlock"
import DetailsBlock from "../../components/blocks/DetailsBlock"

import splitWord from "../../services/splitWord"
import splitLetter from "../../services/splitLetter"
import hexToRgb from "../../services/hexToRgb"
import palette from "../../services/palette"

import people from "../../data/people"


class JnjHome extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.jjHome();
		this.props.reset();
		this.props.setPanel("J&J Design Studio");
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "overview",
			sections: [
				"overview",
				"about",
				"new-user",
				"meganav",
				"sitemap",
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

				<ScrollSection 
				name={sections[0]}
				black 
				fullHeight
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/jnj-home/onboarding-mobile.png)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .12`,
					backgroundSize: this.props.isMobile ? 'contain' : '60%',
					backgroundPosition: this.props.isMobile ? 'right' : '100% 810%',
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[ <span className="outline"><span>Home </span></span>, `is a place for employees to connect and create.`]}
					/>
				</ScrollSection>


				<ScrollSection 
				name={sections[1]} 
				disableSectionNumber
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
								<blockquote className="drop-caps mr">
									The Home team dreamed of a better employee experience for J&J employees. While J&J's 128,000 employees around the world are building the future of healthcare, Home wanted to build a better J&J. 
								</blockquote>
								<blockquote className="mr">
									Part of the big challenge of Home was building a centralized platform to house all the links and resources our peers used every day, enabling them to access vital information from any device, anywhere. Creating a mobile-first experience was a must.
								</blockquote>
							</div>
							<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
								<blockquote className="mr">
									Home was not just about convenience and collaboration. Home is about having a single digital hub that connects all employees.   
								</blockquote>
								<blockquote className="mr">
									Our goal was to empower every J&J employee to pursue their vision and values, no matter their field, function or seniority. We wanted Home to inspire excitement about all of the innovative, groundbreaking work happening at J&J.								</blockquote>
							</div>
						</div>
						<div className="grid__row">
							<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
								<div className="grid__row">
									<div className="grid__item grid__item--col-12">
										<Image src="../assets/img/jnj-home/connected.svg" aspectRatioWidth={16} aspectRatioHeight={9} />
									</div>
								</div>
							</div>
						</div>
						<div className="grid__row m0">
							<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
								<blockquote className="mb0 mr">
									My goal for this project as a Interaction Designer on the project was to solve for the pain points of J&J employees and implement the new J&J True North branding. During this project I helped extend the brand guidelines to include motion and animation principles.
								</blockquote>
							</div>
							<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
								<blockquote className="mb0 mr">
									The new design for the Home Intranet helped employees connect with each other and find resources they need while bringing J&J's people experience into the 21st century. The success of Home served as a model for what the J&J Design studio could accomplish.
								</blockquote>
							</div>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				black 
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/jnj-home/city.svg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .12`,
					backgroundPosition: '50% 80%',
					backgroundRepeat: 'repeatX',
					backgroundSize: this.props.isMobile ? 'cover' : '50%',
				}}>
					<DetailsBlock role="UX/Motion Designer" date="Spring, 2018" client="J&J People XD" team={["Alex Gross", "Chris Purcell", "Katrina Corcoran", "Howard Chambers", "Alisha Austin"]} />
				</ScrollSection>

				<ScrollSection 
				name={sections[2]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
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
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/jnj-home/onboarding-kiosk-mock.png" aspectRatioWidth={3} aspectRatioHeight={2}/>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[3]}
				sections={sections} 
				black
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Meganav</h2>
								<blockquote>I designed a robust navigation to help employees navigate the vast wealth of information at J&J. Providing access to an employyee's most used links from anywhere on Home was important. Utilizing a secondary panel a user could access their favorited links.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10  grid__item--col-12-medium">
							<IFrame src="https://erchsm.github.io/jnj-process/prototypes/home-nav.html"/>
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
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Sitemap</h2>
								<blockquote>I created an interactive sitemap to help our stakeholders understand the site structure. It became a widely accesed tool allowing for anyone to access the live map at any time.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10  grid__item--col-12-medium">
							<IFrame src="https://erchsm.github.io/jnj-process/prototypes/home-sitemap.html"/>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				black
				name={sections[5]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(5) }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Links</h2>
								<blockquote>I designed a directory for the 10,000+ links available to employees at J&J. Working with content strategy, we theorized 12 categories into which links could be bucketed. The scrolling page with side navigation, sorting functionality and starring animation made for a delightful experience.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10  grid__item--col-12-medium">
							<IFrame src="https://erchsm.github.io/jnj-process/prototypes/home-links.html"/>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				black
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/jnj-mdc/ladies.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .6`,
					backgroundSize: 'cover',
					backgroundPosition: '50% 80%',
				}}>
					<NextProjectBlock name="J&J MDC" to="jnj-mdc"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(JnjHome)
