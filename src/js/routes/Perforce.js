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

import Image from "../components/Image"
import Video from "../components/Video"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"

import people from "../data/people"


class Perforce extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.perforce();
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
			<main>
				{/*<Element 
				name={sections[0]} 
				className={classNames({ "active-section" : activeSection == sections[0]})}>
					<ParallaxHeader 
					name={sections[0]}
					sections={sections}
					activeSection={activeSection}
					headerText={[ <span className="outline"><span>Translator </span></span>, `helped NBCU technicians browse and archive footage.`]}
					bgImage={"../assets/img/translator/banner.png"}
					onSetActive={() => { this.setActiveSection(0); }}
					/>
				</Element>*/}

				<ScrollSection 
				name={sections[0]} black fullHeight sections={sections} activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/perforce/banner.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .6`,
					backgroundSize: 'cover',
					backgroundPosition: this.props.isMobile ? '75%' : 'center',
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[ `At`, <span className="outline"><span>Perforce</span></span>, ` version control products helped designers version their assets.` ]}
					/>
				</ScrollSection>



				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--col-hide-bp-medium"/>
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<blockquote className="drop-caps">
								The design team with Perforce saw an opportunity to create a Dropbox-like versioning tool for techincal-minded designers.
							</blockquote>
							<blockquote>
								Perforce has been a leader in the version control space since they premiered their centralized versioning engine in 1995. Since the arrival of distributed versioning tools, most notably Git and Github, Perforce has struggled to stay relevant to their users. Recently they have found their niche by appealing to the design community.
							</blockquote>
							<blockquote>
							</blockquote>
						</div>
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<div className="grid__row">
								<div className="grid__item grid__item--col-12">
									<Image src="../assets/img/perforce/sean.png" aspectRatioWidth={4} aspectRatioHeight={3} />
								</div>
							</div>
							<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
								<blockquote>
									My role on this project involved creating the visual designs and prototyping. In the user research phase I worked closely with another designer to help schedule and facilitate most of the sessions. I also led group synthesis sessions at the end of the project.
								</blockquote>
							</div>
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
								<blockquote>
									With the our new design, the unified system is more efficient. It eliminates the brands’ reliance on the folder structure and the middlemen (i.e., the MAMs) who manage the brand strorage, as well as significantly streamlines the communication between teams.
								</blockquote>
							</div>
						</div>
					</div>
				</ScrollSection>


				{<ScrollSection 
				name={sections[2]}
				black 
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/perforce/prototype.jpg)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .60`,
					backgroundPosition: `100% -30px`,
					background: `linear-gradient(45deg, #2f4c86, #F1A9A6, #EBBE92)`,
					backgroundSize: `cover`,
				}}  
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Role</h6>
							<blockquote>UI/UX Designer</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Date</h6>
							<blockquote>Summer, 2015</blockquote>
						</div>
						<div className="grid__item grid__item--col-2  grid__item--col-6-medium">
							<h6 className="uppercase">Client</h6>
							<blockquote>Perforce</blockquote> 
						</div>
						<div className="grid__item grid__item--col-4  grid__item--col-6-medium">
							<h6 className="uppercase">Team</h6>
							<blockquote className="no-mb">
								<TextLink><a href={people["Janet Taylor"]}>Janet Taylor</a></TextLink>,&nbsp;
								<TextLink><a href={people["Rebecca Jablonski"]}>Rebecca Jablonski</a></TextLink>,&nbsp;
								<TextLink><a href={people["Sean Ardley"]}>Sean Ardley</a></TextLink>,&nbsp;
								<TextLink><a href={people["David Taylor"]}>David Taylor</a></TextLink>
							</blockquote> 
						</div>
					</div>

				</ScrollSection>}

				<ScrollSection 
				name={sections[3]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-1 grid__item--col-hide-bp-medium"/>
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Sync N’ Share</h2>
								<blockquote>The design team with Perforce saw an opportunity to create a Dropbox-like versioning tool for techincal-minded designers. We designed two different application flows: Manual & Auto mode but which worked best for our target user group?</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--col-hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Video src="assets/img/perforce/manual-sync-flow.mp4"/>
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
								<blockquote>Editing metadata for content was an important part in of the storage process. Allowing the technicians to edit metadata quickly and easily would lead to rich content. We designed a metadata editing panel and proposed 3 levels of metatdata completeness.</blockquote>
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
								<blockquote>Together with the product team, I came up with the idea of a shell record which would enable a technician to edit metatdata for content prior to a shoot. That way after the shoot they could simply associate the content with the shell they had already entered the metadata for.</blockquote>
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
								<blockquote>Bulk editing metadata was required for technicians who were managing large projects. I designed a bulk editor that enabled content creators to edit content of the same type (Video, Image or Audio) across all shared metadata fields.</blockquote>
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

				<NextProject 
				to="/jnj-home"
				name="J&J Home"
				sections={sections} 
				activeSection={activeSection}
				style={{ 
					backgroundImage: `url(../assets/img/jnj-home/onboarding-mobile.png)`, 
					backgroundColor: `rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .6`,
					backgroundSize: 'contain',
					backgroundPosition: 'center',
				}}/>



			</main>
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

export default connect(mapStateToProps, mapDispatchToProps)(Perforce)
