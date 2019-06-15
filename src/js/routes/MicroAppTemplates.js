
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

import NewUserSetup from "../components/sandbox/NewUserSetup"

import IFrame from "../components/IFrame"
import Image from "../components/Image"
import Video from "../components/Video"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"


class MicroAppTemplates extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.wrap2();
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
				"templates",
				"conference",
				"lead-gen",
				"commerce",
				"agency",
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
					backgroundImage: `url(../assets/img/card-components/banner-alt.jpg`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .6`,
					backgroundSize: (this.props.isMobile ? 'cover' : 'cover'),
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[ `At`, <span className="outline"><span>Wrap </span></span>, <span className="outline"><span>Media </span></span>, `we designed 150+ app templates for our customers.`]}
					/>
				</ScrollSection>




				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<blockquote className="drop-caps mr">
								Wrap Media aimed to garner adoption of its web based platfrom by creating self-service templates for our customers. Over the course of a year we created 125+ templates for a variety of use cases. Users could get started by simply forking a template and adding their own content.
							</blockquote>
							<blockquote className="mr">
								"Well what is a Wrap?" might the question your asking at this point. A Wrap is a highly-focused, app-like, mobile web experience. 
							</blockquote>
							<blockquote className="mr">
								Wraps are mobile web apps and live at a URL. The flexibility of the URL allows a end user to enter the Wrap through many channels including social feeds, e-mail, web advertisement or, like shown below, through SMS. Wrap experiences are essentially a colleciton of cards — a new "page" of the traditional "app" is analagous to a card. The creation and distribution of the experiences was handled through a SAAS application that we developed in-house as well.
							</blockquote>

						</div>
						{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<div className="grid__row">
								<div className="grid__item grid__item--col-12">
									<Image src="../assets/img/app-templates/templates.jpg" aspectRatioWidth={7} aspectRatioHeight={4} />
								</div>
							</div>
							<div className="grid__row">
								{<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<blockquote className="mr" >
										On this particular effort I worked as a designer creating templates. We organized templates for visual style and purpose. Each designers would be put in charge of a single visual style family from end to end in the design process.
									</blockquote>
								</div>}
								{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
								{<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<blockquote className="mr">
										The way that myself and the design team designed wraps was by designing cards. We would start from a wireframe laying out each card to get a feel for the story of the wrap. Then move into visual design selecting colors and imagery that matched the style family.
									</blockquote>
								</div>}
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
					backgroundImage: `url(../assets/img/card-components/banner.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .8`,
					backgroundSize: 'cover',
					backgroundPosition: 'bottom',
				}}  
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						{/*<div className="grid__item grid__item--col-2 grid__item--hide-bp-medium"/>*/}
						<div className="grid__item grid__item--col-3  grid__item--col-6-medium">
							<h6 className="uppercase">Role</h6>
							<blockquote>UX/Visual Designer</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Date</h6>
							<blockquote>Fall, 2015</blockquote>
						</div>
						<div className="grid__item grid__item--col-3  grid__item--col-6-medium">
							<h6 className="uppercase">Client</h6>
							<blockquote>Wrap Media</blockquote> 
						</div>
						<div className="grid__item grid__item--col-4  grid__item--col-6-medium">
							<h6 className="uppercase">Team</h6>
							<blockquote>
								<a href="">Pete Petras</a>, <a href="">Mei Chun</a>, <a href="">Theo Arguna</a>
							</blockquote> 
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[3]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Templates</h2>
								<blockquote>Over the course of 6 months, myself and the rest of the design team at Wrap Media created 150+ template micro apps for our customers to use. Templates gave our users a starting point in our platform and provided them some inspiration to create their own.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<Video src="assets/img/app-templates/from-fb.mp4"/>
						</div>
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<Image src="assets/img/app-templates/fashion-out.jpg" aspectRatioWidth={7} aspectRatioHeight={11}/>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				name={sections[4]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}>
					<div className="grid">
						<div className="grid__row">
							{/*<div className="grid__item grid__item--col-2 grid__item--hide-bp-medium"/>*/}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2 className="no-mb">Conference</h2>
								{<h3>Modern Sans Family</h3>}
								{/*<blockquote>Myself with Wrap’s Studio Design Team and Warner Bros. Records partnered to create a mobile-first merchandise catalog for Tegan & Sara’s “Love You 2 Death” tour. Working closely with the coolest visual designer around, Theo Arguna, I designed and developed the "Commerce" and "Share" interactions shown below.</blockquote>*/}
							</div>
						</div>
					</div>
					<SideScroller>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/1.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/2.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/3.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/4.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/5.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/6.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/7.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/8.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
					</SideScroller>
				</ScrollSection>


				<ScrollSection 
				name={sections[5]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(5); }}>
					<div className="grid">
						<div className="grid__row">
							{/*<div className="grid__item grid__item--col-2 grid__item--hide-bp-medium"/>*/}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2 className="no-mb">Lead Generation</h2>
								{<h3>Bold Modern Family</h3>}
								{/*<blockquote>Myself with Wrap’s Studio Design Team and Warner Bros. Records partnered to create a mobile-first merchandise catalog for Tegan & Sara’s “Love You 2 Death” tour. Working closely with the coolest visual designer around, Theo Arguna, I designed and developed the "Commerce" and "Share" interactions shown below.</blockquote>*/}
							</div>
						</div>
					</div>
					<SideScroller>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/lead-generation/1.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/lead-generation/2.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/lead-generation/3.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/lead-generation/4.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/lead-generation/5.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/lead-generation/6.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
					</SideScroller>
				</ScrollSection>

				<ScrollSection 
				name={sections[6]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(6); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2 className="no-mb">Fashion Commerce</h2>
								<h3>Modern Sans Family</h3>
							</div>
						</div>
					</div>
					<SideScroller>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/1.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/2.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/3.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/4.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/5.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/6.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/7.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/8.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/9.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
					</SideScroller>
				</ScrollSection>

				<ScrollSection 
				name={sections[7]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(7); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2 className="no-mb">Design Agency</h2>
								<h3>Modern Sans Family</h3>
							</div>
						</div>
					</div>
					<SideScroller>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/1.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/2.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/3.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/4.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/5.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/6.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/7.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
					</SideScroller>
				</ScrollSection>



				<NextProject 
				to="/perforce"
				name="Perforce"
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/perforce/banner.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .4`,
					backgroundSize: 'cover',
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

export default connect(mapStateToProps, mapDispatchToProps)(MicroAppTemplates)
