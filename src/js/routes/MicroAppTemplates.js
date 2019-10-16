
import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"
import { openSecondaryPanel } from "../actions/secondaryPanel"
import { closePrimaryPanel } from "../actions/primaryPanel"

import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"
import ScrollSection from "../components/ScrollSection"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"
import CodepenEmbed from "../components/CodepenEmbed"
import NextProject from "../components/NextProject"
import SideScroller from "../components/SideScroller"
import TextLink from "../components/TextLink"

import IFrame from "../components/IFrame"
import Image from "../components/Image"
import Video from "../components/Video"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"

import people from "../data/people"


class MicroAppTemplates extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.wrap2();
		this.props.reset();
		this.props.openSecondaryPanel();
		this.props.closePrimaryPanel();
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "overview",
			sections: [
				"overview",
				"about",
				"templates",
				"conference",
				"lead-gen",
				"commerce",
				"agency",
				"reflection",
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
					  linear-gradient(rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .24), rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .24)),
					  url(../assets/img/card-components/banner-alt.jpg),
					  linear-gradient(#f3f4f8, #f3f4f8)`, 
					backgroundSize: this.props.isMobile ? 'cover' : 'contain',
					backgroundBlendMode: 'normal',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: this.props.isMobile ? '-25% center' : '150% center',
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[ `At`, <span><span className="outline">Wrap </span></span>, <span><span className="outline">Media </span></span>, `we designed 150+ app templates for our users.`]}
					/>
				</ScrollSection>




				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				disableSectionNumber
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-3 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
								<blockquote className="drop-caps ">
									Wrap Media aimed to garner adoption of its web based platfrom by creating self-service templates for our customers. Over the course of a year we created 125+ templates for a variety of use cases. Users could get started by simply forking a template and adding their own content.
								</blockquote>
								<blockquote className="">
									"Well what is a Wrap?" might the question your asking at this point. A Wrap is a highly-focused, app-like, mobile web experience. 
								</blockquote>
								<blockquote className="">
									Wraps are mobile web apps and live at a URL. The flexibility of the URL allows a end user to enter the Wrap through many channels including social feeds, e-mail, web advertisement or, like shown below, through SMS. Wrap experiences are essentially a colleciton of cards — a new "page" of the traditional "app" is analagous to a card. The creation and distribution of the experiences was handled through a SAAS application that we developed in-house as well.
								</blockquote>

							</div>
						</div>
						<div className="grid__row">
							<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
								<div className="grid__row">
									<div className="grid__item grid__item--col-12">
										<Image src="../assets/img/card-components/perspective-cards.jpg" aspectRatioWidth={8} aspectRatioHeight={5} />
									</div>
								</div>
							</div>
						</div>
						<div className="grid__row m0">
							<div className="grid__item grid__item--col-3 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
								<blockquote className="" >
									On this particular effort I worked as a designer creating templates. We organized templates for visual style and purpose. Each designers would be put in charge of a single visual style family from end to end in the design process.
								</blockquote>
								<blockquote className="">
									The way that myself and the design team designed wraps was by designing cards. We would start from a wireframe laying out each card to get a feel for the story of the wrap. Then move into visual design selecting colors and imagery that matched the style family.
								</blockquote>
							</div>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				black 
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/card-components/banner.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .8`,
					backgroundSize: 'cover',
					backgroundPosition: 'bottom',
				}}>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-3  grid__item--col-6-medium">
							<h6 className="uppercase">Role</h6>
							<blockquote>UX/Visual Designer</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Date</h6>
							<blockquote>Fall, 2015</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Client</h6>
							<blockquote>Wrap Media</blockquote> 
						</div>
						<div className="grid__item grid__item--col-3  grid__item--col-6-medium">
							<h6 className="uppercase">Team</h6>
							<blockquote>
								<TextLink><a href={people["Pete Petras"]}>Pete Petras</a></TextLink>,&nbsp;
								<TextLink><a href={people["Mei Yeh"]}>Mei Yeh</a></TextLink>,&nbsp;
								<TextLink><a href={people["Theo Arguna"]}>Theo Arguna</a></TextLink>,&nbsp;
								<TextLink><a href={people["Cameron Myers"]}>Cameron Myers</a></TextLink>
							</blockquote> 
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				black
				name={sections[2]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Templates</h2>
								<blockquote>Over the course of 6 months, myself and the rest of the design team at Wrap Media created 150+ template micro apps for our customers to use. Templates gave our users a starting point in our platform and provided them some inspiration to create their own.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-7 grid__item--col-12-medium">
							<Video src="assets/img/app-templates/from-fb.mp4"/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-12-medium">
							<Image src="assets/img/app-templates/fashion-out.jpg" aspectRatioWidth={7} aspectRatioHeight={13}/>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				name={sections[3]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2 className="mb0">Conference</h2>
								{<h4 className="light">Modern Sans Family</h4>}
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
				name={sections[4]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2 className="mb0">Lead Generation</h2>
								{<h4 className="light">Bold Modern Family</h4>}
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
				name={sections[5]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(5); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2 className="mb0">Fashion Commerce</h2>
								<h4 className="light">Modern Sans Family</h4>
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
				name={sections[6]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(6); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2 className="mb0">Design Agency</h2>
								<h4 className="light">Modern Sans Family</h4>
							</div>
						</div>
					</div>
					<SideScroller>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/1.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						{/*<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/2.jpg"  aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>*/}
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

				<ScrollSection 
				name={sections[7]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(7); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<h2 className="">Reflection</h2>
							<blockquote>Over the course of 6 months, myself and the rest of the design team at Wrap Media created 150+ template micro apps for our customers to use. We attached analytics data to our templates and measured the effectiveness of each template. ended up being very effective for our customers. gave our users a starting point in our platform and provided them some inspiration to create their own.</blockquote>
							<blockquote>We attached analytics data to our templates and measured the effectiveness of each template. That way we were able to track the templates that our customers used and iterate on the ones that worked for them.</blockquote>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				black
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/perforce/banner.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .4`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
					<NavLink to={"perforce"} className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<h4 className="light">Next Up</h4>
							<h2 className="mb0">Perforce</h2>
						</div>
					</NavLink>
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
	openSecondaryPanel: () => dispatch(openSecondaryPanel()),
	closePrimaryPanel: () => dispatch(closePrimaryPanel()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MicroAppTemplates)
