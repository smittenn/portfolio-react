import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import Codepen from "react-codepen-embed"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"
import { setNavWhite, setNavBlack } from "../actions/color"

import Nav from "../components/Nav"
import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"
import ScrollSection from "../components/ScrollSection"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"
import CodepenEmbed from "../components/CodepenEmbed"

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
			activeSection: "overview",
			pageSections: [
				{ name: "overview",
				},
				{ name: "details",
				},
				{ name: "details-2",
				},
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

		const sections =[]

		pageSections.forEach((item, idx) => {
			sections.push(item.name);
		});

		const elements = pageSections.map((element) => {
			console.log(element);
		})

		return (
			<article>
				<Element 
				name={sections[0]} 
				className={classNames({ "active-section" : activeSection == sections[0]})}>
					<ParallaxHeader 
					name={sections[0]}
					headerText={[`The`, <span className="outline">V.ai </span>, <span className="outline">player </span>,`uses AI to identify people and objects in video`]}
					bgImage={"../assets/img/vai/banner.gif"}
					onSetActive={() => { setCounter(1); setNavWhite(); this.setActiveSection(sections[0]);}}
					/>
					<Link to={sections[1]} spy={true} smooth={true} hashSpy={true} offset={0} onSetActive={() => { setCounter(2); setNavBlack(); this.setActiveSection(sections[1]); }}>
						<ScrollArrow/>
					</Link>
				</Element>

				<ScrollSection 
				name={sections[1]} 
				onSetActive={() => { setCounter(2); setNavBlack(); this.setActiveSection(sections[1]);}}>
					<div className="grid">
						<div className="grid__item grid__item--col-7 grid__item--col-12-medium">
							<h2>Have you ever watched a show online and gotten annoyed by the seemingly endless commercials? </h2> 
							<blockquote>Did you download an ad blocker plugin to your browser?<br/> More likely than not, you did.</blockquote>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<p>
								In the current digital space, one filled with ad blockers and displeased consumers, the question of how to move forward in advertising remains unanswered. The traditional means of advertising can no longer withstand the test of time. Users are changing. The NBCUX Lab saw the need for a new way for brands to reach their audiences. 
								<br/><br/>
								In order to shape the future of how brands influence consumers our solution, The V.ai player, aims to bring AI and product integration into an immersive video-viewing experience.
							</p>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<p>
								The NBCUX Lab is a group of user-centric problem solvers who architect culturally relevant products with innovation at the core of our strategy.
								<br/><br/>
								They operate as an internal agency at NBCUniversal working with different organizations within NBCU on a variety of projects ranging from consumer film sites to internal tools and content management systems. 
							</p>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[2]}
				black 
				style={{ backgroundImage: `url(../assets/img/vai/chevrolet.jpg)`, backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .6`, backgroundPosition: "center 70%" }}  
				onSetActive={() => { setCounter(3); setNavWhite(); this.setActiveSection(sections[2]); }}>
					<div className="grid">
						{/*<div className="grid__item grid__item--col-1"/>*/}
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h5 className="uppercase">Role</h5>
							<blockquote>Lead Designer</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h5 className="uppercase">Date</h5>
							<blockquote>October, 2017</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h5 className="uppercase">Client</h5>
							<blockquote>NBCUX Lab</blockquote> 
						</div>
						<div className="grid__item grid__item--col-5  grid__item--col-6-medium">
							<h5 className="uppercase">Team</h5>
							<blockquote><a href="https://www.linkedin.com/in/minaazimov">Mina Azimov</a>, <a href="https://www.linkedin.com/in/oleksandr-lebedyev/">Alex Lebedyev</a>, <a href="">Kennix Lee</a>, <a href="">Jing Zhao</a> </blockquote> 
						</div>
					</div>
				</ScrollSection>

				<Sidebar 
				sections={sections} 
				activeSection={activeSection}
				/>

				<GridLines/>
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
