import React, {Component} from "react"
import { connect } from "react-redux"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"
import { setNavWhite, setNavBlack } from "../actions/color"

import ScrollSection from "../components/ScrollSection"
import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"
import ProjectCard from "../components/ProjectCard"

import Sidebar from "../components/Sidebar"

import Image from "../components/Image"

import splitWord from "../services/splitWord"

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeSection: "hello",
			pageSections: [
				"hello",
				"about",
				"projects",
				"experiments",
				"social",
			],
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		window.addEventListener('resize', this.detectMobile);

		this.props.home();
		this.props.reset();
		this.props.setNavWhite();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.detectMobile);
	}

	detectMobile = (event) => {
		this.setState({
			isMobile: window.innerWidth <= 800,
		})
	}
		
	setActiveSection = (idx) => {
		this.setState({
			activeSection: this.state.pageSections[idx],
		})
		this.props.setCounter(idx + 1);
	}

	render() {

		const projects = [
			{
				name: "American Made Film Site",
				href: "/american-made",
				tags: [ "UI", "Interactive" ],
			},
			{
				name: "V.ai Player",
				href: "/vai",
				tags: [ "UX", "Interactive" ],
			},
			{
				name: "Translator",
				href: "/translator",
				tags: [ "UX", "Design System" ],
			},
			{
				name: "Micro App Interactions",
				href: "/micro-app-interactions",
				tags: [ "Interactive", "Mobile" ],
			},
			{
				name: "Micro App Templates",
				href: "/micro-app-templates",
				tags: [ "Visual Design", "Mobile" ],
			},

		]

		const { activeSection, pageSections } = this.state;
		
		return (
			<article>
				<Element 
				name={pageSections[0]} 
				className={classNames({ "active-section" : activeSection == pageSections[0]})}>
					<ParallaxHeader 
					name={pageSections[0]}
					headerText={[`Eric C. Smith is an`, <span className="outline">Interactive </span>, <span className="outline">Designer </span>, `in New York City`]} 
					bgImage={"../assets/img/terrain.gif"} 
					onSetActive={() => { setNavWhite(); this.setActiveSection(0); }}
					/>
				</Element>

				<ScrollSection 
				name={pageSections[1]} 
				sections={pageSections} 
				activeSection={activeSection}
				onSetActive={() => { setNavBlack(); this.setActiveSection(1); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-4 grid__item--col-11-medium">
							<h1>{splitWord("Form & Function")}</h1>
							<blockquote>
								{splitWord(`Hi there, my name is Eric! My design philosophy is about keeping it minimal and functional, the best design solution is the simplest and most direct. When I’m not designing, you can find me outdoors taking photos with friends.`)}
							</blockquote>
						</div>
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-2 grid__item--col-4-medium">
								<div className="spacer spacer__sm"/>
								<Image src="../assets/img/lands-end-4x3.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
							</div>
							<div className="grid__item grid__item--col-2 grid__item--col-4-medium">
								<div className="spacer spacer__lg"/>
								<Image src="../assets/img/me-4x3.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
							</div>
							<div className="grid__item grid__item--col-2 grid__item--col-4-medium">
								<div className="spacer spacer__md"/>
								<Image src="../assets/img/mist-3x4.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
							</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={pageSections[2]} 
				black
				sections={pageSections} 
				activeSection={activeSection}
				onSetActive={() => { setNavBlack(); this.setActiveSection(2); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-7 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-5 grid__item--col-11-medium">
							{/*<h1>{splitWord("My Work")}</h1>*/}
							{<h1>{splitWord("Visual & Interactive")}</h1>}
							<blockquote>
								{splitWord(`I specialize in working on HTML prototypes, visual design, motion graphics and front-end code. Here are some of the recent projects I’ve worked on.`)}
								<br/><br/>
								{/*splitWord(`Some of the clients that I have worked for include Warner Brothers Music, Perforce, Minted, BMW, Cisco, NBC Universal, Johnson & Johnson and many more.`)*/}
							</blockquote>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<div className="spacer spacer__sm"/>
							<ProjectCard name="American Made Film Site" href="/american-made" tags={["UI", "Interactive"]}>
								<Image src="../assets/img/american-made/banner.gif" aspectRatioWidth={1} aspectRatioHeight={1}/>
								{/*<video src="../assets/img/project-1.mp4" autoPlay loop playsInline preload="auto" muted />*/}
							</ProjectCard>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<div className="spacer spacer__md"/>
							<ProjectCard name="V.ai Player" href="/vai" tags={["UX", "Interactive"]}>
								<img src="../assets/img/vai/eye.gif"/>
							</ProjectCard>
						</div>

						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<div className="spacer spacer__md"/>
							<ProjectCard name="Micro App Templates" href="/micro-app-templates" tags={["Visual Design", "Brand"]}>
								<img src="../assets/img/card-components/banner-alt.jpg"/>
							</ProjectCard>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<ProjectCard name="J&J Home" href="/jnj-home" tags={["UX", "UI"]}>
								<img src="../assets/img/jnj-home/onboarding-kiosk-mock.png"/>
							</ProjectCard>
						</div>
					</div>
				</ScrollSection>


				{<Link to={pageSections[1]} spy={true} smooth={"easeOutQuint"} duration={1200} offset={0} onSetActive={() => { setCounter(2); setNavBlack(); this.setActiveSection(1); }}>
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
	setNavWhite: () => dispatch(setNavWhite()),
	setNavBlack: () => dispatch(setNavBlack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)