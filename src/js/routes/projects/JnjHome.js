import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import { reset, setCounter } from "../../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce1, perforce2 } from "../../actions/abbreviation"
import { setPanel } from "../../actions/panel"

import { HeroBlock, HeroBlockItem } from "../../components/blocks/HeroBlock"
import ScrollSection from "../../components/ScrollSection"

import ParallaxBackground from "../../components/ParallaxBackground"
import GridLines from "../../components/GridLines"
import Sidebar from "../../components/Sidebar"
import CodepenEmbed from "../../components/CodepenEmbed"
import SideScroller from "../../components/SideScroller"
import IFrame from "../../components/IFrame"
import TextLink from "../../components/TextLink"
import Image from "../../components/Image"

import ProjectUpNextBlock from "../../components/blocks/ProjectUpNextBlock"
import ProjectDetailsBlock from "../../components/blocks/ProjectDetailsBlock"
import ProjectIntroBlock from "../../components/blocks/ProjectIntroBlock"
import ProjectSectionBlock from "../../components/blocks/ProjectSectionBlock"

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
				"navigation",
				"sitemap",
				"news",
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

		const brandPrimary = hexToRgb('#000099');

		const heroBackgroundImage = this.props.isMobile ? 'onboarding-mobile-5x8' : 'onboarding-mobile-3x2';

		return (
			<article>

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
					<ParallaxBackground 
					style={{ 
						backgroundImage: `
							radial-gradient(
								rgba(${brandPrimary.r}, ${brandPrimary.g}, ${brandPrimary.b}, .24), 
								rgba(${brandPrimary.r}, ${brandPrimary.g}, ${brandPrimary.b}, .4)
							),
							url(../assets/img/jnj-home/${heroBackgroundImage}.jpg)
						`, 
						backgroundColor: `rgb(${brandPrimary.r}, ${brandPrimary.g}, ${brandPrimary.b})`,
					}}/>
					<HeroBlock 
					headerText={[ <span><span className="outline">Home </span></span>, `is a place for employees to connect and create.`]}
					/>
				</ScrollSection>


				<ScrollSection 
				black
				name={sections[1]} 
				disableSectionNumber
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}
				style={{
					backgroundColor: '#00008c'
				}}>
					<ProjectIntroBlock 
					col1='
						The Home team dreamed of a better employee experience for J&J employees. While J&J’s 128,000 employees around the world are building the future of healthcare, Home wanted to build a better J&J.
						\n\n 
						Part of the big challenge of Home was building a centralized platform to house all the links and resources our peers used every day, enabling them to access vital information from any device, anywhere. Creating a mobile-first experience was a must.
					'
					col2='
						Home was not just about convenience and collaboration. Home is about having a single digital hub that connects all employees.
						\n\n
						Our goal was to empower every J&J employee to pursue their vision and values, no matter their field, function or seniority. We wanted Home to inspire excitement about all of the innovative, groundbreaking work happening at J&J.
					'
					media={{
						type: 'image',
						src: '../assets/img/jnj-home/connected.svg', 
						aspectRatioWidth: 16, 
						aspectRatioHeight: 9 
					}}
					col3='My goal for this project as a Interaction Designer on the project was to solve for the pain points of J&J employees and implement the new J&J True North branding. During this project I helped extend the brand guidelines to include motion and animation principles.'
					col4='The new design for the Home Intranet helped employees connect with each other and find resources they need while bringing J&J’s people experience into the 21st century. The success of Home served as a model for what the J&J Design studio could accomplish.'
					/>

				</ScrollSection>

				{/*
				style={{ 
					backgroundImage: `url(../assets/img/jnj-home/city.svg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .12`,
					backgroundPosition: '50% 80%',
					backgroundRepeat: 'repeatX',
					backgroundSize: this.props.isMobile ? 'cover' : '50%',
				}}*/}				

				<ScrollSection 
				sections={sections} 
				activeSection={activeSection}>
					<ProjectDetailsBlock 
					role="UX/Motion Designer" 
					date="Spring, 2018" 
					client="J&J People XD" 
					team={["Alex Gross", "Alisha Austin", "Howard Chambers", "Katrina Corcoran", "Chris Purcell"]} />
				</ScrollSection>

				<ScrollSection 
				name={sections[2]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<ProjectSectionBlock 
					title="Onboarding"
					description1="The J&J Home Onboarding iPad kiosk is filled out by employees on their first day. A new employee provides some basic information in this short onboarding experience."
					description2="Afterwards the employee can visit Home to learn about services nearby, tools necessary for their job and share profiles of their team members."
					media={[
						{ type: "image", src: "../assets/img/jnj-home/onboarding-kiosk-mock.png", aspectRatioWidth: 3, aspectRatioHeight: 2 },
						{ type: "iframe", src: "//erchsm.github.io/jnj-process/prototypes/home-profile-setup.html", aspectRatioWidth: this.props.isMobile ? 5 : 4, aspectRatioHeight:this.props.isMobile ? 8 : 3 }
					]}/>
				</ScrollSection>

				<ScrollSection 
				name={sections[3]}
				sections={sections} 
				black
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<ProjectSectionBlock 
					title="Navigation"
					description1="I designed a robust navigation to help employees navigate the vast wealth of information at J&J. We provided a way for an employyee to access their most used links from anywhere on Home."
					description2="From the takeover, a secondary panel allowed them to see links organized by categories or a list of their previously favorited links."
					media={{ type: "iframe", src: "//erchsm.github.io/jnj-process/prototypes/home-nav.html", aspectRatioWidth: this.props.isMobile ? 5 : 4, aspectRatioHeight:this.props.isMobile ? 8 : 3 }}/>
				</ScrollSection>


				<ScrollSection 
				name={sections[4]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}>
					<ProjectSectionBlock 
					title="Sitemap"
					description1="I created an interactive sitemap to help our stakeholders understand the site structure. It became a widely accesed tool allowing for anyone to access the living sitemap at any time."
					media={{ type: "iframe", src: "//erchsm.github.io/jnj-process/prototypes/home-sitemap.html", aspectRatioWidth: this.props.isMobile ? 5 : 3, aspectRatioHeight:this.props.isMobile ? 8 : 2 }}/>

				</ScrollSection>


				<ScrollSection 
				black
				name={sections[5]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(5) }}>
					<ProjectSectionBlock 
					title="News"
					description1="I designed an article page flexible for different types of content. The sticky article sharing buttons provided an opportunity to use to motion to inspire the reader."
					description2="Using the “Thumbs Up” feature a user can click to like the article multiple times as opposed to a single time. I finessed the animation here so there would be delight with every click."
					media={{ type: "iframe", src: "//erchsm.github.io/jnj-process/prototypes/home-article.html", aspectRatioWidth: this.props.isMobile ? 5 : 3, aspectRatioHeight:this.props.isMobile ? 8 : 2 }}/>
				</ScrollSection>

				<ScrollSection 
				black
				name={sections[6]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(6) }}>
					<ProjectSectionBlock 
					title="Links"
					description1="I designed a directory for the 10,000+ links available to employees at J&J. Working with content strategy, we theorized 12 categories into which links could be bucketed."
					description2="The sticky side navigation, sorting functionality and delightful favoriting animation made for a great experience overall."
					media={{ type: "iframe", src: "//erchsm.github.io/jnj-process/prototypes/home-links.html", aspectRatioWidth: this.props.isMobile ? 5 : 3, aspectRatioHeight:this.props.isMobile ? 8 : 2 }}/>
				</ScrollSection>

				<ScrollSection 
				black
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `
						radial-gradient(
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .6),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .84)
						),
						url(../assets/img/jnj-mdc/ladies.jpg)
					`, 
					backgroundSize: 'cover',
					backgroundPosition: '50% 80%',
				}}>
					<ProjectUpNextBlock name="J&J MDC" to="jnj-mdc"/>
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
