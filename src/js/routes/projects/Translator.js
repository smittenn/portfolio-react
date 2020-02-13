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
import TextLink from "../../components/TextLink"
import Image from "../../components/Image"

import ProjectUpNextBlock from "../../components/blocks/ProjectUpNextBlock"
import ProjectDetailsBlock from "../../components/blocks/ProjectDetailsBlock"
import ProjectIntroBlock from "../../components/blocks/ProjectIntroBlock"

import splitWord from "../../services/splitWord"
import splitLetter from "../../services/splitLetter"
import hexToRgb from "../../services/hexToRgb"
import palette from "../../services/palette"

import people from "../../data/people"


class Translator extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.translator();
		this.props.reset();
		this.props.setPanel("NBCUX Lab");
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "overview",
			sections: [
				"overview",
				"about",
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

		const brandPrimary = '#3B96B7';

		const brandBlack = hexToRgb(palette("brand-black"));


		return (
			<article>

				<ScrollSection 
				name={sections[0]} black fullHeight sections={sections} activeSection={activeSection}
				style={{ 
					backgroundImage: `
						radial-gradient(
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .06),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .12)
						),
						url(../assets/img/translator/mobile-16x9.jpg)
					`, 
					backgroundSize: this.props.isMobile ? '140% 85%' : '70% 120%',
					backgroundPosition: this.props.isMobile ? '-160% 320%' : '150% 340%',
					backgroundColor: brandPrimary,
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[ <span><span className="outline">Translator </span></span>, `helped NBCU film crews manage their assets.`]}
					/>
				</ScrollSection>



				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				activeSection={activeSection}
				disableSectionNumber
				onSetActive={() => { this.setActiveSection(1); }}>
					<ProjectIntroBlock 
					col1="The process for media asset management varied greatly across NBCU’s diverse entertainment brands. Our team was asked to imagine a tool that could that works for all the brands. \n\n The current production process begins with content creation where production teams either shoot a new footage or re-purpose existing footage. Production Assistants (PAs) bring the footage on a physical drive to the Media Asset Manager or “MAM” to be stored."
					col2="On the previous CMS, the brands were very reliant on the folder structure, search was not available on the brand storage systems. Searching large data stores would cause the servers to crash. \n\n Findability was a major issue, if a technician misplaced a file or accidentally dragged a file into another folder, it would be difficult to recall the file later. Each brand had a different folder structure and each team within a brand may have a different naming convention." 
					media={{ type: 'image', src: '../assets/img/translator/usertesting.svg', aspectRatioWidth: 16, aspectRatioHeight: 9 }}
					col3="My goal for this project as the Lead Designer was to solve many of the pain points for these technicians and create a flexible design system that not only accomidated the content registration workflow we were intitially tasked with designing but was also flexible enough for to design features later." 
					col4="With the our new design, the unified system is more efficient. It eliminates the brands’ reliance on the folder structure and the middlemen (i.e., the MAMs) who manage the brand strorage, as well as significantly streamlines the communication between teams."
					/>
				</ScrollSection>


				{<ScrollSection 
				name={sections[2]}
				sections={sections} 
				disableSectionNumber
				activeSection={activeSection}
				style={{ 
					// backgroundImage: `linear-gradient(45deg, #3C5D78 33%, #426581 33% 66%, #5B7E9A 66%)`,
				}}>
					<ProjectDetailsBlock role="Lead UI/UX Designer" date="Spring, 2017" client="NBCU On-Air" team={["Mina Azimov", "Kennix Lee", "Oleksandr Lebedyev", "Jing Zhao", "Poplar Bai"]}/>
				</ScrollSection>}


				<ScrollSection 
				name={sections[2]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Collections</h2>
								<blockquote>I designed a system where technicians could upload content and organize them into collections. A production assistant fresh off a shoot could upload their images, videos and audio altogether into a collection for easy access later. {/*Users can choose a list or masonry grid view to their liking.*/}</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/translator/mam-01.jpg" aspectRatioWidth={16} aspectRatioHeight={9}/>
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
							<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Metadata</h2>
								<blockquote>Editing metadata for content was an important part in of the storage process. Allowing the technicians to edit metadata quickly and easily would lead to rich content. We designed a metadata editing panel and proposed 3 levels of metatdata completeness.</blockquote>
							</div>
						</div>
					</div>
					<SideScroller>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/translator/metadata-01.jpg" aspectRatioWidth={16} aspectRatioHeight={9} caption="Clicking an uploaded media item opens the metadata drawer. Many metadata fields are detected on upload."/>
						</div>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/translator/metadata-02.jpg" aspectRatioWidth={16} aspectRatioHeight={9} caption="The “Ready for Ingest” indicator signifies that the minimum required metadata is present."/>
						</div>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/translator/metadata-03.jpg" aspectRatioWidth={16} aspectRatioHeight={9} caption="An asset is “Search Optmized” when all of its metadata fields are filled out."/>
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
							<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Shell Record</h2>
								<blockquote>Together with the product team, I came up with the idea of a shell record which would enable a technician to edit metatdata for content prior to a shoot. That way after the shoot they could simply associate the content with the shell they had already entered the metadata for.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/translator/shell-01.jpg" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection
				black
				name={sections[5]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(5); }}
				>
					<div className="grid">
						<div className="grid__row">
							<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Bulk Actions</h2>
								<blockquote>Bulk editing metadata was required for technicians who were managing large projects. I designed a bulk editor that enabled content creators to edit content of the same type (Video, Image, Audio or Document) across all shared metadata fields.</blockquote>
							</div>
						</div>
					</div>
					<SideScroller>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/translator/bulk-01.jpg" aspectRatioWidth={16} aspectRatioHeight={9} caption="Clicking the multi select button in the sticky secondary bar shows checkboxes and starts the bulk edit flow."/>
						</div>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<Image src="../assets/img/translator/bulk-02.jpg" aspectRatioWidth={16} aspectRatioHeight={9}/>
						</div>
					</SideScroller>
				</ScrollSection>


				{/*<ScrollSection 
				name={sections[6]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(6); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<h2 className="">Reflection</h2>
							<blockquote>
								With the new Translator MAM, we imagine the unified system would be more efficient. It would reduce the brands’ reliance on the folder structure and the middlemen (i.e., the MAMs) who manage the brand SANs, as well as significantly reduce the communication between teams. It will also save a lot of waiting time when notifications are not sent in time.
							</blockquote>
							<blockquote>
								Instead of archiving files to a storage system separate from their current brand SAN and then having to request restores, Prod MAM will allow users to store all assets on the cloud, regardless of whether they want to keep short-term or long-term. Before assets can be fully ingested, users will need to register the content by providing metadata.
							</blockquote>
							<blockquote>
								Users can retrieve the content themselves without reaching out to the MAMs to have content restored and archived. There will be higher accountability and users will be able to own the assets more. With the establishment of content registration and an enforced naming convention, users will be able to search keywords against these assets.
							</blockquote>
						</div>
					</div>
				</ScrollSection>*/}


				<ScrollSection 
				black
				sections={sections} 
				activeSection={activeSection}
				>
					<ProjectUpNextBlock name="J&J Home" to="jnj-home"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Translator)