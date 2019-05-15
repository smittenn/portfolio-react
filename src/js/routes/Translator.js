import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import Codepen from "react-codepen-embed"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"
import { setNavWhite, setNavBlack } from "../actions/color"

import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"
import ScrollSection from "../components/ScrollSection"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"
import CodepenEmbed from "../components/CodepenEmbed"
import NextProject from "../components/NextProject"
import SideScroller from "../components/SideScroller"

import Image from "../components/Image"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"


class Translator extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.translator();
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
				"collections",
				"metadata",
				"shell",
				"bulk",
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
					headerText={[ <span className="outline"><span>Translator </span></span>, `helped NBCU technicians view and archive footage.`]}
					bgImage={"../assets/img/translator/banner.png"}
					onSetActive={() => { this.setActiveSection(0); }}
					/>
					{<Link to={sections[1]} spy={true} smooth={"easeOutCubic"} duration={1200} hashSpy={true} offset={0} onSetActive={() => { setCounter(2); this.setActiveSection(1); }}>
						<ScrollArrow label="Read More"/>
					</Link>}
				</Element>


				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<blockquote className="drop-caps">
								The process for media asset management varied greatly across NBCU’s entertainment brands. Our team was asked to imagine a tool that could that works for all the brands.
							</blockquote>
							<blockquote>
								The brands are currently very reliant on the folder structure and since search is not enabled on the brand storage systems to prevent crashing the server, users must navigate through the folder structure to find files. 
							</blockquote>
							<blockquote>
								If someone misplaces a file or accidentally drags a file into another folder, it will be difficult to recall it given the fluidity of the naming convention. Each brand has a different folder structure and each team within a brand may have a different naming convention.
							</blockquote>
							<blockquote>
								My goal for this project as the Lead Designer was to create a flexible design system that accomidated the 
							</blockquote>

						</div>
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-7 grid__item--col-12-medium">
							<div className="grid__row">
								<div className="grid__item grid__item--col-12">
									<Image src="../assets/img/translator/usertesting.svg" aspectRatioWidth={16} aspectRatioHeight={9} style={{ background: '#EAAECA' }}/>
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
									<blockquote>
										As the Lead Designer on this project I designed right in the browser using our front-end video prototype. I directly contributed code to this prototype. I created all the icon, animations and typography system for this player. I also worked with the AI javascript API we used to power this prototype.
									</blockquote>
								</div>
								{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
								<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
									<blockquote>
										Clarifi's image recognition technology with video recognition analyzes a video and predicts what’s inside of it. Their API analyzes inputs at a rate of 1 frame per second, which means a list of predicted results will be given for every second of the video.
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
					backgroundImage: `url(../assets/img/translator/nyc-skyline.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .12`,
				}}  
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						{/*<div className="grid__item grid__item--col-2 grid__item--hide-bp-medium"/>*/}
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Role</h6>
							<blockquote>Lead Designer</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Date</h6>
							<blockquote>June, 2017</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Client</h6>
							<blockquote>NBCU On-Air</blockquote> 
						</div>
						<div className="grid__item grid__item--col-5  grid__item--col-6-medium">
							<h6 className="uppercase">Team</h6>
							<blockquote><a href="https://www.linkedin.com/in/minaazimov">Mina Azimov</a>, <a href="https://www.linkedin.com/in/oleksandr-lebedyev/">Alex Lebedyev</a>, <a href="https://www.linkedin.com/in/poplar-bai/">Poplar Bai</a></blockquote> 
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
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Collections</h2>
								<blockquote>I designed a system where technicians could upload content and organize them into collections. A production assistant fresh off a shoot could upload their images, videos and audio altogether into a collection for easy access later. Users can choose a list of grid mode to their liking. Grid view allows thumbnail previews arrange themselves in masonry grid.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12">
							<Image src="../assets/img/translator/mam-01.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
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
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Editing Metadata</h2>
								<blockquote>I designed a system where technicians could upload content and organize them into collections. A production assistant fresh off a shoot could upload their content image, video and audio into a collection for easy access later. Users can choose a list of grid mode to their liking. Grid view allows thumbnail previews arrange themselves in masonry grid.</blockquote>
							</div>
						</div>
					</div>
					<SideScroller>
						<div className="grid__item grid__item--col-8 grid__item--col-10-medium">
							<Image src="../assets/img/translator/metadata-01.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
						<div className="grid__item grid__item--col-8 grid__item--col-10-medium">
							<Image src="../assets/img/translator/metadata-02.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
						<div className="grid__item grid__item--col-8 grid__item--col-10-medium">
							<Image src="../assets/img/translator/metadata-03.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
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
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Shell Record</h2>
								<blockquote>I designed a system where technicians could upload content and organize them into collections. A production assistant fresh off a shoot could upload their content image, video and audio into a collection for easy access later. Users can choose a list of grid mode to their liking. Grid view allows thumbnail previews arrange themselves in masonry grid.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-12">
							<Image src="../assets/img/translator/shell-01.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
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
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Bulk Actions</h2>
								<blockquote>I designed a system where technicians could upload content and organize them into collections. A production assistant fresh off a shoot could upload their content image, video and audio into a collection for easy access later. Users can choose a list of grid mode to their liking. Grid view allows thumbnail previews arrange themselves in masonry grid.</blockquote>
							</div>
						</div>
					</div>
					<SideScroller>
						<div className="grid__item grid__item--col-8 grid__item--col-10-medium">
							<Image src="../assets/img/translator/bulk-01.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
						<div className="grid__item grid__item--col-8 grid__item--col-10-medium">
							<Image src="../assets/img/translator/bulk-02.png" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
					</SideScroller>
				</ScrollSection>



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

export default connect(mapStateToProps, mapDispatchToProps)(Translator)
