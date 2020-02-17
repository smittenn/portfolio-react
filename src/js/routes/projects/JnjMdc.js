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
import Image from "../../components/Image"
import TextLink from "../../components/TextLink"

import ProjectUpNextBlock from "../../components/blocks/ProjectUpNextBlock"
import ProjectDetailsBlock from "../../components/blocks/ProjectDetailsBlock"
import ProjectIntroBlock from "../../components/blocks/ProjectIntroBlock"
import ProjectSectionBlock from "../../components/blocks/ProjectSectionBlock"

import splitWord from "../../services/splitWord"
import splitLetter from "../../services/splitLetter"
import hexToRgb from "../../services/hexToRgb"
import palette from "../../services/palette"

import people from "../../data/people"


class JnjMdc extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.jjMdc();
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
				"navigation",
				"flipper",
				"chooser",
				"taxonomy",
				"buttons",
				// "cards",
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
					backgroundImage: `
						radial-gradient(
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .4),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .4)
						),
						url(../assets/img/jnj-mdc/ladies.jpg)
					`, 
					backgroundSize: 'cover',
					backgroundPosition: this.props.isMobile ? '75%' : 'center',
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[ <span><span className="outline">MDC </span></span>, `unified the UX for 250+ medical device companies.`]}
					/>
				</ScrollSection>




				<ScrollSection 
				name={sections[1]} 
				disableSectionNumber
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<ProjectIntroBlock 
					col1='
						We sought to consolidate J&J’s 250 websites across 6 medical device companies into a unified platform that reflected the new J&J brand. The final result, J&J MDC or “Medical Device Center” was a flexible design system which created a centralized experience for the companies.
						\n\n 
						J&J MDC was ultimately successful – leading to expanded patient access, improved outcomes and reduced health system costs.
					'
					col2='
						In a radically changing environment, J&J had connections across science and technology to combine their own expertise in surgery, orthopaedics and interventional solutions with the big ideas of others to design and deliver a physician and patient-centric product and solution. 
						\n\n
						J&J has the breadth, scale and experience to reimagine the way healthcare is delivered and help people live longer, healthier lives.
					'
					media={{
						type: 'image', 
						src: '../assets/img/jnj-mdc/running-man-16x9.png', 
						aspectRatioWidth: 16, 
						aspectRatioHeight: 9 
					}}
					col3='My role as Interaction Designer was to create a flexible design system solving for the needs of the HCP and Patient while implementing the new J&J True North branding. Our front-end code prototype acted as a source of truth and as a styleguide for our developers.'
					col4='During this project I helped extend the brand guidelines to include motion and animation principles. Our design system was wildly successful and was eventually genericised into J&J’s own website builder.'
					/>

				</ScrollSection>


				<ScrollSection 
				black 
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `
						radial-gradient(
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .12),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .12)
						),
						url(../assets/img/jnj-mdc/forest.jpg)
					`, 
					backgroundPosition: '50% 80%',
					backgroundRepeat: 'repeatX',
					backgroundSize: 'cover',
				}}>
					<ProjectDetailsBlock role="Sr. Interaction Designer" date="Fall, 2018" client="J&J Consumer" team={["Matthew Abate", "Laura Hines", "Stephanie Skuzenski", "Jinny Kim", "Mark Patience", "Katrina Corcoran"]}/>
				</ScrollSection>


				<ScrollSection 
				black
				name={sections[2]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					{<ProjectSectionBlock 
					title="Navigation"
					description="I designed a navigation for hospital buyers and HCPs to learn about the vast amount of products, procedures, services and companies available in the J&J portfolio. This nav needed to be able to work with as little as 1 item and as many as 100 items."
					media={{ type: "iframe", src: "//erchsm.github.io/jnj-process/prototypes/mdc-nav.html", aspectRatioWidth: this.props.isMobile ? 5 : 3, aspectRatioHeight:this.props.isMobile ? 8 : 2 }}/>}

					{/*<div className="grid">
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
					</div>*/}
				</ScrollSection>


				<ScrollSection 
				grey
				name={sections[3]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					{<ProjectSectionBlock 
					title="HCP/Patient"
					subtitle="Site Flipper"
					description="To toggle between the healthcare professional and patient experiences of the site I designed this interaction for toggling between them. On hover, an HCP or patient could use our predictive search to search for a specialty or symptom respectively."
					media={{ type: "iframe", src: "//erchsm.github.io/jnj-process/prototypes/mdc-flipper.html#flipper", aspectRatioWidth: this.props.isMobile ? 5 : 3, aspectRatioHeight:this.props.isMobile ? 8 : 2 }}/>}

					{/*<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2 className="mb0">HCP/Patient</h2>
								<h4 className="fade">Site Flipper</h4>
								<blockquote>To toggle between the healthcare professional and patient experiences of the site I designed this interaction for toggling between them. On hover, an HCP or patient could use our predictive search to search for a specialty or symptom respectively.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12  grid__item--col-12-medium">
							<IFrame src="//erchsm.github.io/jnj-process/prototypes/mdc-flipper.html#flipper"/>
						</div>
					</div>*/}
				</ScrollSection>


				<ScrollSection 
				black
				name={sections[4]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}>
					{<ProjectSectionBlock 
					title="Company Chooser"
					description="The intial partners bought into our design system were able to participate in an experimental section on the homepage of the site."
					media={{ type: "iframe", src: "//erchsm.github.io/jnj-process/prototypes/mdc-companies-picker.html", aspectRatioWidth: this.props.isMobile ? 5 : 3, aspectRatioHeight:this.props.isMobile ? 8 : 2 }}/>}
				</ScrollSection>


				<ScrollSection 
				black
				name={sections[5]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(5); }}>
					{<ProjectSectionBlock 
					title="Taxonomy"
					description="Consolidating 250 sites is complicated! With our content strategist I created a interactive visual of our site taxonomy. This quickly became our favorite tool for viewing the site in a visually digestable way."
					media={{ type: "iframe", src: "//erchsm.github.io/jnj-process/prototypes/mdc-taxonomy-diagram.html", aspectRatioWidth: this.props.isMobile ? 5 : 3, aspectRatioHeight:this.props.isMobile ? 8 : 2 }}/>}


					{/*<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Taxonomy</h2>
								<blockquote>Consolidating 250 sites is complicated! With our content strategist I created a interactive visual of our site taxonomy. This quickly became our favorite tool for viewing the site in a visually digestable way.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12  grid__item--col-12-medium">
							<IFrame src="//erchsm.github.io/jnj-process/prototypes/mdc-taxonomy-diagram.html"/>
						</div>
					</div>*/}
				</ScrollSection>


				<ScrollSection
				black
				name={sections[6]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(6); }}>
					{<ProjectSectionBlock 
					title="Buttons"
					description="I created this page to document our button styles along with hover states. This page became a useful resource for our developers to reference."
					media={{ type: "iframe", src: "//erchsm.github.io/jnj-process/prototypes/mdc-buttons.html", aspectRatioWidth: this.props.isMobile ? 5 : 3, aspectRatioHeight:this.props.isMobile ? 8 : 2 }}/>}

					{/*<div className="grid">
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
					</div>*/}
				</ScrollSection>


				{/*<ScrollSection 
				black
				name={sections[7]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(7); }}>
					{<ProjectSectionBlock 
					title="Cards"
					description="Many of our page modules used utilized informations in card grids. I created this page to document all our card styles along with hover states. This allowed us to keep our card styles concise as our design system grew."
					media={{ type: "iframe", src: "//erchsm.github.io/jnj-process/prototypes/mdc-cards.html.html", aspectRatioWidth: this.props.isMobile ? 5 : 3, aspectRatioHeight:this.props.isMobile ? 8 : 2 }}/>}

				</ScrollSection>*/}

				<ScrollSection 
				black
				sections={sections} 
				activeSection={activeSection}
				>
					<ProjectUpNextBlock name="Wrap Interactions" to="micro-app-interactions"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(JnjMdc)
