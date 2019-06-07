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


class MicroAppInteractions extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.wrap1();
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
					headerText={[ `At`, <span className="outline"><span>Wrap Media </span></span>, `I created interactions within our product for our clients.`]}
					bgImage={"../assets/img/card-components/share-animation-zoomed-out.gif"}
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
							<blockquote className="drop-caps mr">
								Wrap Media aimed to garner adoption of its web based platfrom by acting like an agency. Wrap Media partnered with high profile clients such as Warner Brothers Music, Salesforce, Equinox, BMW and many more.
							</blockquote>
							<blockquote className="mr">
								A quick introduction to the Wrap platform — a Wrap is a highly-focused, app-like, mobile web experience. 
							</blockquote>
							<blockquote className="mr">
								Wraps are mobile web apps and live at a URL. The flexibility of the URL allows a end user to enter the Wrap through many channels including social feeds, e-mail, web advertisement or, like shown below, through SMS.
							</blockquote>

						</div>
						{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<div className="grid__row">
								<div className="grid__item grid__item--col-12">
									<Image src="../assets/img/card-components/banner.jpg" aspectRatioWidth={16} aspectRatioHeight={9} />
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<blockquote className="mr" >
										My goal for this project as the Lead Designer was to solve many of the pain points for these technicians and create a flexible design system that not only accomidated the content registration workflow we were intitially tasked with designing but was also flexible enough for to design features later.
									</blockquote>
								</div>
								{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
								<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<blockquote className="mr">
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
								<a href="">Matthew Abate</a>, <a href="">Stephanie Skuzenski</a>, <a href="">Laura Hines</a>, <a href="">Katrina Corcoran</a>, <a href="">Jinny Kim</a>, <a href="">Mark Patience</a>
							</blockquote> 
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
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .8`,
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

export default connect(mapStateToProps, mapDispatchToProps)(MicroAppInteractions)
