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
import TextLink from "../components/TextLink"

import NewUserSetup from "../components/sandbox/NewUserSetup"

import IFrame from "../components/IFrame"
import Image from "../components/Image"
import Video from "../components/Video"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"

import people from "../data/people"


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
				"minted",
				"warner-bros",
				"equinox",
				"salesforce",
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
					backgroundImage: `url(../assets/img/card-components/share-animation.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .6`,
					backgroundSize: (this.props.isMobile ? 'cover' : 'contain'),
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[ `At`, <span className="outline"><span>Wrap </span></span>, <span className="outline"><span>Media </span></span>, `we created interactions within micro apps.`]}
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
								Wrap Media aimed to garner adoption of its web based platfrom by partnering with clients. We partnered with high profile clients such as Warner Brothers Music, Salesforce, Minted, Equinox, BMW and many more to help them get started with our platform.
							</blockquote>
							<blockquote className="mr">
								"Well what is a Wrap?" might the question your asking at this point. A Wrap is a highly-focused, app-like, mobile web experience. 
							</blockquote>
							<blockquote className="mr">
								Wraps are mobile web apps and live at a URL. The flexibility of the URL allows a end user to enter the Wrap through many channels including social feeds, e-mail, web advertisement or, like shown below, through SMS. Wrap experiences are essentially a colleciton of cards — a new "page" of the traditional "app" is analagous to a card. The creation and distribution of the experiences was handled through a SAAS application that we developed in-house as well.
							</blockquote>

						</div>
						{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
						<div className="grid__item grid__item--col-7 grid__item--col-12-medium">
							<div className="grid__row">
								<div className="grid__item grid__item--col-11">
									<Image src="../assets/img/card-components/perspective-cards.jpg" aspectRatioWidth={8} aspectRatioHeight={5} />
								</div>
							</div>
							<div className="grid__row">
								{<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<blockquote className="mr" >
										On this particular effort I worked as a Creative Techonologist listening to the needs of the client and creating a web application within our platform catered to their needs. I used HTML, CSS and Javascript to do so utilizing the Wrap Developer API.
									</blockquote>
								</div>}
								{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
								{<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<blockquote className="mr">
										The way that myself and the design team designed wraps was by designing cards. From the example above you can see that these experiences follow and "x-cross" pattern — The end user is able to scroll either up/down or swipe left or right.
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
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-3  grid__item--col-6-medium">
							<h6 className="uppercase">Role</h6>
							<blockquote>Creative Techonologist</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Date</h6>
							<blockquote>Fall, 2016</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Client</h6>
							<blockquote>Wrap Media</blockquote> 
						</div>
						<div className="grid__item grid__item--col-3  grid__item--col-6-medium">
							<h6 className="uppercase">Team</h6>
							<blockquote>
								<TextLink><a href={people["Pete Petras"]}>Pete Petras</a></TextLink>,&nbsp;
								<TextLink><a href={people["Josh Bloom"]}>Josh Bloom</a></TextLink>,&nbsp;
								<TextLink><a href={people["Jeff Klein"]}>Jeff Klein</a></TextLink>,&nbsp;
								<TextLink><a href={people["Mei Yeh"]}>Mei Yeh</a></TextLink>,&nbsp;
								<TextLink><a href={people["Theo Arguna"]}>Theo Arguna</a></TextLink>,&nbsp;
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
								<h2>Realtime Poll</h2>
								<blockquote>The Minted Challange Wrap seen above I worked on with Jeff Klein. I designed this poll that allowed them to sample their users in real time. The Minted Challenge experience had higher engagement than any of their prior campaigns.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Video src="assets/img/card-components/minted.mp4"/>
						</div>
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<Image src="assets/img/card-components/minted-hand.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				name={sections[4]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Cart & Share</h2>
								<blockquote>Myself with Wrap’s Studio Design Team and Warner Bros. Records partnered to create a mobile-first merchandise catalog for Tegan & Sara’s “Love You 2 Death” tour. Working with the coolest visual designer around, Theo Arguna, I designed and developed the interactions shown below.</blockquote>
							</div>
						</div>
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
								<Video src="assets/img/card-components/share-animation.mp4"/>
							</div>
							<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
								<Image src="assets/img/card-components/cart-animation.gif" aspectRatioWidth={4} aspectRatioHeight={3}/>
							</div>
						</div>

					</div>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<blockquote>Our approach was an immersive one, to value interaction and interface but not more than the content itself. We helped Tegan & Sara create a brand based on two basic elements; their highly curated content and the enthusiastic followers that make up their team. We avoided gimmicks by highlighting the content.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							{/*<IFrame src="//codepen.io/erchsm/embed/NRBOky/?default-tab=result"/>*/}
							{<CodepenEmbed slug="NRBOky" title="Cart & Share Components" height={720} handle="erchsm"/>}
						</div>
					</div>
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
								<h2>Places Nearby</h2>
								<blockquote>Partnering with Equinox we built an integration with the Google Places API's for helping users find a gym close to their location. We later created a generic component in our product so that anyone with a wrap account could add this to a card. I worked on the motion and interaction here while working directly with the API.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							{/*<IFrame src="//codepen.io/erchsm/embed/ENNdJd/?default-tab=result"/>*/}
							{<CodepenEmbed slug="ENNdJd" title="Nearby Services Component" height={720} handle="erchsm"/>}
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
								<h2 className="">Starry Night</h2>
								<blockquote>Partnering with Salesforce Trailblazers we created a lead generation form to collect leads at their international conference in San Francisco. I worked on the interactive splash screen featuring a starry night sky. This aspirational backdrop helped connect with the trailblazers boosting the conversion rate on the form.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							{/*<IFrame src="//codepen.io/erchsm/embed/ENNdJd/?default-tab=result"/>*/}
							{<CodepenEmbed slug="BLbpoZ" title="Starry Night" height={720} handle="erchsm"/>}
						</div>
					</div>
				</ScrollSection>


				<NextProject 
				to="/micro-app-templates"
				name="Micro App Templates"
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/card-components/banner-alt.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .5`,
					backgroundSize: 'cover',
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

export default connect(mapStateToProps, mapDispatchToProps)(MicroAppInteractions)
