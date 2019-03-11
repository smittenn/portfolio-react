import React, {Component} from "react"
import { connect } from "react-redux"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import IntersectionVisible from "react-intersection-visible"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"
import { setNavWhite, setNavBlack } from "../actions/color"

import Nav from "../components/Nav"
import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"
import ProjectCard from "../components/ProjectCard"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"

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
		
	setActiveSection = (name) => {
		this.setState({
			activeSection: name,
		})
	}

	render() {

		const { activeSection, pageSections } = this.state;
		
		return (
			<div>
				<Element name={pageSections[0]} className={classNames({ "active-section" : activeSection == pageSections[0]})}>
					<ParallaxHeader 
					name="hello"
					headerText={[`Eric C. Smith is an`, <span className="outline">Interactive </span>, <span className="outline">Designer </span>, `in New York City`]} 
					bgImage={"../assets/img/terrain.gif"} 
					onSetActive={() => {this.props.setCounter(1); this.props.setNavWhite(); this.setActiveSection(pageSections[0]);}}
					/>
					<Link to="about" spy={true} smooth={"easeOutCubic"} duration={1200} hashSpy={true} offset={0} onSetActive={() => { this.props.setCounter(2); this.props.setNavBlack();  this.setActiveSection(pageSections[1]); }}>
						<ScrollArrow/>
					</Link>
					<Link style={{display: "none"}} to="projects" spy={true} smooth={"easeOutCubic"} duration={1200} hashSpy={true} offset={0} onSetActive={() => {this.props.setCounter(3); this.props.setNavBlack();  this.setActiveSection(pageSections[2]);}}>
						<ScrollArrow/>
					</Link>
				</Element>

				<Element name={pageSections[1]}>
					<IntersectionVisible onShow={(i) => i[0].target.classList.add("active-section")} onHide={(i) => i[0].target.classList.remove("active-section")}>
						<section>
							<div className="grid">
								<div className="grid__item grid__item--col-4 grid__item--col-11-medium">
									<h1>{splitWord("Form & Function")}</h1>
									<blockquote>
										{splitWord(`Hi there, my name is Eric! My design philosophy is about keeping it minimal and functional, the best design solution is the simplest and most direct. When I’m not designing, you can find me outdoors taking photos with friends.`)}
									</blockquote>
								</div>
								{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
									<div className="grid__item grid__item--col-2 grid__item--col-4-medium"><img src="../assets/img/me-4x3.jpg"/></div>
									<div className="grid__item grid__item--col-2 grid__item--col-4-medium"><img src="../assets/img/lands-end-4x3.jpg"/></div>
									<div className="grid__item grid__item--col-2 grid__item--col-4-medium"><img src="../assets/img/mist-3x4.jpg"/></div>
							</div>
						</section>
					</IntersectionVisible>
				</Element>

				<Element name={pageSections[2]}>
					<IntersectionVisible onShow={(i) => i[0].target.classList.add("active-section")} onHide={(i) => i[0].target.classList.remove("active-section")}>
						<section>
							<div className="grid">
								<div className="grid__item grid__item--col-6 grid__item--hide-bp-medium"/>
								<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
									{/*<h1>{splitWord("My Work")}</h1>*/}
									{<h1>{splitWord("Visual & Interactive")}</h1>}
									<blockquote>
										{splitWord(`I specialize in working on HTML prototypes, visual design, motion graphics and front-end code. Here are some of the recent projects I’ve worked on.`)}
										<br/><br/>
										{/*splitWord(`Some of the clients that I have worked for include Warner Brothers Music, Perforce, Minted, BMW, Cisco, NBC Universal, Johnson & Johnson and many more.`)*/}
									</blockquote>
								</div>
								<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									
										<ProjectCard name="American Made Film Site" href="/american-made" tags={["UI", "Interaction"]}>
											{<img src="../assets/img/american-made/banner.gif"/>}
											{/*<video src="../assets/img/project-1.mp4" autoPlay loop playsInline preload="auto" muted />*/}
										</ProjectCard>
								</div>
								<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<ProjectCard name="Micro App Templates" href="/micro-app-templates" tags={["Visual Design", "Interaction"]}>
										<img src="../assets/img/card-components/banner-alt.jpg"/>
									</ProjectCard>
								</div>
							</div>
						</section>
					</IntersectionVisible>
				</Element>
				
				<Sidebar 
				sections={pageSections} 
				activeSection={activeSection}
				/>

				<GridLines/>
			</div>
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