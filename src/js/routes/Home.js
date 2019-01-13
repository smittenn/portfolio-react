import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import IntersectionVisible from "react-intersection-visible"

import { reset, setCounter } from "../actions/counter"
import { home } from "../actions/abbreviation"
import { setNavWhite, setNavBlack } from "../actions/color"

import Nav from "../components/Nav"
import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"


import GridLines from "../components/GridLines"

import splitWord from "../services/splitWord"
import hexToRgb from "../services/hexToRgb"

// import detectMobile from "../services/detectMobile"


class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeSection: "hello",
			isMobile: window.innerWidth <= 800,
			pageSections: [
			"hello",
			"about",
			"projects",
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

	componentDidUpdate(prevProps) {
		(prevProps.count == this.props.count) ? null : this.setState({ countIsIncreasing: (prevProps.count < this.props.count) })
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
			<div id="home">
				<Element name={pageSections[0]} className={classNames({ "active-section" : activeSection == pageSections[0]})}>
					<ParallaxHeader 
					headerText={`Eric C. Smith is a Creative Developer in New York City`} 
					bgImage={"../assets/img/liquid.gif"} 
					/>
					<Link style={{display: "none"}} to={pageSections[0]} spy={true} smooth={true} hashSpy={true} offset={0} onSetActive={() => {this.props.setCounter(1); this.props.setNavWhite(); this.setActiveSection(pageSections[0]);}}>
						<ScrollArrow/>
					</Link>
					<Link to="about" spy={true} smooth={true} hashSpy={true} offset={0} onSetActive={() => {this.props.setCounter(2); this.props.setNavBlack();  this.setActiveSection("about");}}>
						<ScrollArrow/>
					</Link>
					<Link style={{display: "none"}} to="projects" spy={true} smooth={true} hashSpy={true} offset={0} onSetActive={() => {this.props.setCounter(3); this.props.setNavBlack();  this.setActiveSection("projects");}}>
						<ScrollArrow/>
					</Link>
				</Element>
				<Element name="about">
					<IntersectionVisible onShow={(i) => console.log(i[0].target.classList.add("active-section"))} onHide={(i) => console.log(i[0].target.classList.remove("active-section"))}>
						<section>
							<div className="grid">
								<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
									<h1>{splitWord("Form & Function")}</h1>
									<p>
										{splitWord(`Hi there, my name is Eric. I am a Creative Developer and Designer. Here are some things I’ve worked on.`)}
										<br/><br/>
										{splitWord(`My design philosophy is about keeping it simple, the best design solution is the simplest and most direct. When im not writing code, I’m taking photos with friends or cycling.`)}
									</p>
								</div>
								{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
								<div className="grid__item grid__item--row grid__item--col-7 grid__item--col-12-medium">
									<div className="grid__item grid__item--col-4"><img src="../assets/img/me-4x3.jpg"/></div>
									<div className="grid__item grid__item--col-4"><img src="../assets/img/lands-end-4x3.jpg"/></div>
									<div className="grid__item grid__item--col-4"><img src="../assets/img/mist-3x4.jpg"/></div>
								</div>
							</div>
						</section>
					</IntersectionVisible>
				</Element>
				<Element name="projects">
					<IntersectionVisible onShow={(i) => console.log(i[0].target.classList.add("active-section"))} onHide={(i) => console.log(i[0].target.classList.remove("active-section"))}>
						<section>
							<div className="grid">
								<div className="grid__item grid__item--col-6 grid__item--hide-bp-medium"/>
								<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
									<h1>{splitWord("My Work")}</h1>
									{/*<h2>{splitWord("Motion, Visual Design & The Front-end.")}</h2>*/}
									<p>
										{splitWord(`I specialize in working on HTML prototypes, visual design, motion graphics and front-end code. Here are some of the recent projects I’ve worked on.`)}
										<br/><br/>
										{splitWord(`Some of the clients that I have worked for include Warner Brothers Music, Perforce, Minted, BMW, Cisco, NBC Universal, Johnson & Johnson and many more.`)}
									</p>
								</div>
								<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<NavLink to="/american-made/">
										<img src="../assets/img/american-made/banner.gif"/>
										<h3>American Made Film Site</h3>
									</NavLink>
								</div>
								<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<img src="../assets/img/card-components/banner-alt.jpg"/>
									<h3 className="white">Card Components</h3>
								</div>
							</div>
						</section>
					</IntersectionVisible>
				</Element>
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
	setNavWhite: () => dispatch(setNavWhite()),
	setNavBlack: () => dispatch(setNavBlack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)