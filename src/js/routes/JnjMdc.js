import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

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
import IFrame from "../components/IFrame"
import Image from "../components/Image"
import TextLink from "../components/TextLink"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"

import people from "../data/people"


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
				"navigation",
				"flipper",
				"taxonomy",
				"buttons",
				"cards",
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
				{/*<Element 
				name={sections[0]} 
				className={classNames({ "active-section" : activeSection == sections[0]})}>
					<ParallaxHeader 
					name={sections[0]}
					sections={sections}
					activeSection={activeSection}
					headerText={[ <span className="outline"><span>MDC </span></span>, `unified the UX for J&J medical device companies.`]}
					bgImage={"../assets/img/jnj-mdc/ladies.jpg"}
					strength={300}
					onSetActive={() => { this.setActiveSection(0); }}
					/>
				</Element>*/}

				<ScrollSection 
				name={sections[0]}
				black 
				fullHeight
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/jnj-mdc/ladies.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .4`,
					backgroundSize: 'cover',
					backgroundPosition: this.props.isMobile ? '75%' : 'center',
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[ <span className="outline"><span>MDC </span></span>, `unified the UX for J&J medical device companies.`]}
					/>
				</ScrollSection>




				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<blockquote className="drop-caps mr">
								We sought to consolidate J&J's 250 websites across 6 medical device companies into a single platform that reflected the new J&J brand.
							</blockquote>
							<blockquote className="mr">
								J&J has the breadth, scale and experience to reimagine the way healthcare is delivered and help people live longer, healthier lives. 

								In a radically changing environment, J&J had connections across science and technology to combine their own expertise in surgery, orthopaedics and interventional solutions with the big ideas of others to design and deliver a physician and patient-centric product and solution. 
							</blockquote>
							<blockquote className="mr">
								J&J MDC was ultimately successful – leading to expanded patient access, improved outcomes and reduced health system costs. Our team additionally pioneeded modern agile software development within the company.
							</blockquote>

						</div>
						<div className="grid__item grid__item--col-7 grid__item--col-12-medium">
							<div className="grid__row">
								<div className="grid__item grid__item--col-11 grid__item--col-12-medium">
									<Image src="../assets/img/jnj-mdc/running-man-16x9.png" aspectRatioWidth={16} aspectRatioHeight={9} />
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<blockquote className="mr" >
										My role as Interaction designer was to create a flexible design system solving for the needs of the HCP and Patient while implementing the new J&J True North branding. During this project I helped extend the brand guidelines to include motion and animation principles.
									</blockquote>
								</div>
								{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
								<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<blockquote className="mr">
										Our design system was wildly successful and was eventually genericised into J&J's own website builder.
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
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-3  grid__item--col-6-medium">
							<h6 className="uppercase">Role</h6>
							<blockquote>Sr. Interaction Designer</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Date</h6>
							<blockquote>Fall, 2018</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Client</h6>
							<blockquote>J&J Consumer</blockquote> 
						</div>
						<div className="grid__item grid__item--col-4  grid__item--col-6-medium">
							<h6 className="uppercase">Team</h6>
							<blockquote>
								<TextLink><a href={people["Matthew Abate"]}>Matthew Abate</a></TextLink>,&nbsp;
								<TextLink><a href={people["Stephanie Skuzenski"]}>Stephanie Skuzenski</a></TextLink>,&nbsp;
								<TextLink><a href={people["Laura Hines"]}>Laura Hines</a></TextLink>,&nbsp;
								<TextLink><a href={people["Jinny Kim"]}>Jinny Kim</a></TextLink>,&nbsp;
								<TextLink><a href={people["Mark Patience"]}>Mark Patience</a></TextLink>,&nbsp;
								<TextLink><a href={people["Katrina Corcoran"]}>Katrina Corcoran</a></TextLink>,&nbsp;
								<TextLink><a href={people["Kate Peoples"]}>Kate Peoples</a></TextLink>
							</blockquote> 
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				black
				name={sections[3]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Navigation</h2>
								<blockquote>I designed a navigation for hospital buyers and HCPs to learn about the vast amount of products, procedures, services and companies available in the J&J portfolio. This nav needed to be able to work with as little as 1 item and as many as 100 items.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12  grid__item--col-12-medium">
							<IFrame src="//erchsm.github.io/jnj-process/prototypes/mdc-nav.html"/>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				grey
				name={sections[4]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2 className="mb0">HCP/Patient</h2>
								<h3>Site Flipper</h3>
								<blockquote>To toggle between the healthcare professional and patient experiences of the site I designed this interaction for toggling between them. A Patient/HCP was also able to use our predictive search in the tile to search for their symptoms or specialties respectively.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12  grid__item--col-12-medium">
							<IFrame src="//erchsm.github.io/jnj-process/prototypes/mdc-flipper.html#flipper"/>
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
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Taxonomy</h2>
								<blockquote>Consolidating 250 sites is complicated! With our content strategist I created a interactive visual of our site taxonomy. This quickly became our partner's favorite tool as helped our stakeholders learn the site structure.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12  grid__item--col-12-medium">
							<IFrame src="//erchsm.github.io/jnj-process/prototypes/mdc-taxonomy-diagram.html"/>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				name={sections[6]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(6); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Buttons</h2>
								<blockquote>I created this page to document our button styles along with hover states. This page became a useful resource for our developers to reference.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12  grid__item--col-12-medium">
							<IFrame src="//erchsm.github.io/jnj-process/prototypes/mdc-buttons.html"/>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				black
				name={sections[7]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(7); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Cards</h2>
								<blockquote>Many of our page modules used utilized informations in card grids. I created this page to document all our card styles along with hover states. This allowed us to keep our card styles concise as our design system grew.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12  grid__item--col-12-medium">
							<IFrame src="//erchsm.github.io/jnj-process/prototypes/mdc-cards.html"/>
						</div>
					</div>
				</ScrollSection>


				<NextProject 
				to="/micro-app-interactions"
				name="Micro App Interactions"
				sections={sections} 
				activeSection={activeSection}
				black
				style={{ 
					backgroundImage: `url(../assets/img/card-components/share-animation-zoomed-out.gif)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .8`,
					backgroundSize: 'contain',
					backgroundPosition: 'center',
				}}/>


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
})

export default connect(mapStateToProps, mapDispatchToProps)(JnjMdc)
