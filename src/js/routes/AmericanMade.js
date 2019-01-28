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

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"


class AmericanMade extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.americanMade();
		this.props.reset();
		this.props.setNavWhite();
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "overview",
			pageSections: [
				"overview",
				"intro",
				"details",
				"cinemagraphs",
				"atomic-design",
				"preloader",
			],
		}
	}

	setActiveSection = (name) => {
		this.setState({
			activeSection: name,
		})
	}


	render() {

		const { activeSection, pageSections } = this.state;

		const brandBlack = hexToRgb("#232021");


		return (
			<div>
				<Element name={pageSections[0]} className={classNames({ "active-section" : activeSection == pageSections[0]})}>
					<ParallaxHeader 
					name={pageSections[0]}
					headerText={[<span className="outline">American </span>, <span className="outline">Made </span>, `is a film site created for Universal Pictures`]}
					bgImage={"../assets/img/american-made/output.gif"}
					strength={200}
					onSetActive={() => {this.props.setCounter(1); this.props.setNavWhite(); this.setActiveSection(pageSections[0]);}}
					/>
					<Link to={pageSections[1]} spy={true} smooth={true} hashSpy={true} offset={0} onSetActive={() => { this.props.setCounter(2); this.props.setNavBlack(); this.setActiveSection(pageSections[1]); }}>
						<ScrollArrow/>
					</Link>
				</Element>
				<ScrollSection name={pageSections[1]} onSetActive={() => {this.props.setCounter(2); this.props.setNavBlack(); this.setActiveSection(pageSections[1]);}}>
					<div className="grid">
							{/*<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
								<h1 className="no-mb">{splitWord("American Made Site")}</h1>
							</div>*/}
						{/*<div className="grid__item grid__item--col-1"/>*/}
						<div className="grid__item grid__item--col-7 grid__item--col-12-medium">
							<h2>I took a deep dive into the story of the American Made film when the NBCUX Lab partnered with Universal Pictures</h2> 
							<p>
								The final design is the product of many late nights and too many cups of coffee. It all paid off and the film earned $16.7 million at the box office the first weekend. Additionally There was a 63% conversion rate from our site to purchase tickets!
								<br/><br/>
								The NBCUX Lab operates as an internal agency at NBCUniversal working with different organizations within NBCU on a variety of projects ranging from consumer film sites to internal tools and content management systems. 
							</p>
						</div>
						
					</div>
				</ScrollSection>
				<ScrollSection black style={{ backgroundImage: `url(../assets/img/american-made/s07-synopsis.jpg)`, backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .6`}} name={pageSections[2]} onSetActive={() => {this.props.setCounter(3); this.props.setNavWhite(); this.setActiveSection(pageSections[2]);}}>
					<div className="grid">
						{/*<div className="grid__item grid__item--col-1"/>*/}
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<p className="">Role</p>
							<blockquote>Lead Designer</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<p className="">Date</p>
							<blockquote>June, 2017</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<p className="">Client</p>
							<blockquote>NBCUX Lab</blockquote> 
						</div>
						<div className="grid__item grid__item--col-4  grid__item--col-6-medium">
							<p className="">Team</p>
							<blockquote><a href="https://www.linkedin.com/in/minaazimov">Mina Azimov</a>, <a href="https://www.linkedin.com/in/oleksandr-lebedyev/">Oleksandr Lebedyev</a>, <a href="https://www.linkedin.com/in/poplar-bai/">Poplar Bai</a></blockquote> 
						</div>
					</div>
				</ScrollSection>
				<ScrollSection black name={pageSections[3]} onSetActive={() => {this.props.setCounter(4); this.props.setNavWhite(); this.setActiveSection(pageSections[3]);}}>
					<div className="grid">
						<div className="grid__row">
							{/*<div className="grid__item grid__item--col-1"/>*/}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h1>{splitLetter("Cinemagraphs")}</h1> 
								<blockquote>{splitWord("One of my goals for this project was to integrate the content and UI of the site in a seamless way. To create a more interactive experience I created cinemagraphs. Cinemagraphs are a fairly new medium that enable deep visual storytelling. Cinemagraphs helped to reinforced the cinematic quality of the site and tell the story in richer way.")}</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-6">
							<img src="../assets/img/american-made/columbia.gif"/>
						</div>
					</div>
				</ScrollSection>
				<ScrollSection black style={{ backgroundImage: `url(../assets/img/american-made/cloud-bg.png)`, backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, 0.95`, backgroundPosition: "center 30%" }} name={pageSections[4]} onSetActive={() => {this.props.setCounter(5); this.props.setNavWhite(); this.setActiveSection(pageSections[4]);}}>
					<div className="grid">
						{/*<div className="grid__item grid__item--col-1"/>*/}
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<h1 className="no-mb">{splitWord("Atomic Design")}</h1> 
							<blockquote>{splitWord("I applied atomic design principles by creating a design system. I established foundations for color, typography, grids, textures first. Atoms, molecules and organisms came naturally building upon the foundations.")}</blockquote>
						</div>
					</div>
				</ScrollSection>
				<ScrollSection name={pageSections[5]} onSetActive={() => {this.props.setCounter(6); this.props.setNavBlack(); this.setActiveSection(pageSections[5]);}}>
					<div className="grid">
						{/*<div className="grid__item grid__item--col-1"/>*/}
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<h2>{"Preloader"}</h2> 
							<blockquote>{"If you have content that will take a long time to load, you should give the user feedback. I thought that the preloader could serve to delight and excite the the site visitors while they are waiting for the site. A simple plane animations sets the tone of the film. After the page loads the users are greeted with the \“Sky is Never The Limit\”, a catchphrase for the film."}</blockquote>
							<p className="codepen" data-height="720" data-theme-id="light" data-default-tab="result" data-user="erchsm" data-slug-hash="RyGNYm" style={{ width: "100vw", height: "720px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid black", margin: "1em 0", padding: "1em"}} data-pen-title="Preloader: American Made Film Site">
							<span>See the Pen <a href="https://codepen.io/erchsm/pen/RyGNYm/">
							Preloader: American Made Film Site</a> by eric smith (<a href="https://codepen.io/erchsm">@erchsm</a>)
							on <a href="https://codepen.io">CodePen</a>.</span>
							</p>
						</div>
					</div>
				</ScrollSection>
				<Sidebar sections={pageSections} activeSection={activeSection}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AmericanMade)
