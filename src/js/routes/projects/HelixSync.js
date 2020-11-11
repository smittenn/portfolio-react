import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import { reset, setCounter } from "../../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce1, perforce2 } from "../../actions/abbreviation"
import { setPanel } from "../../actions/panel"

import ScrollSection from "../../components/ScrollSection"

import ParallaxBackground from "../../components/ParallaxBackground"
import GridLines from "../../components/GridLines"
import Sidebar from "../../components/Sidebar"
import CodepenEmbed from "../../components/CodepenEmbed"
import SideScroller from "../../components/SideScroller"
import TextLink from "../../components/TextLink"
import Image from "../../components/Image"
import Video from "../../components/Video"

import { HeroBlock, HeroBlockItem } from "../../components/blocks/HeroBlock"
import ProjectUpNextBlock from "../../components/blocks/ProjectUpNextBlock"
import ProjectDetailsBlock from "../../components/blocks/ProjectDetailsBlock"
import ProjectIntroBlock from "../../components/blocks/ProjectIntroBlock"
import ProjectSectionBlock from "../../components/blocks/ProjectSectionBlock"

import splitWord from "../../services/splitWord"
import splitLetter from "../../services/splitLetter"
import hexToRgb from "../../services/hexToRgb"
import palette from "../../services/palette"

import people from "../../data/people"


class HelixSync extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.perforce1();
		this.props.reset();
		this.props.setPanel("Perforce");
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "overview",
			sections: [
				"overview",
				"about",
				"sync-share",
				"auto",
				"manual",
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

				<ParallaxBackground 
				name={sections[0]} black fullHeight sections={sections} activeSection={activeSection}
				style={{ 
					backgroundImage: `
						linear-gradient(rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .24), rgba(${brandBlack.r}, ${brandBlack.b}, ${brandBlack.g}, .24)),
						url(../assets/img/perforce/banner.jpg),
						linear-gradient(#2b8bb5, #178ab9)`,
					backgroundSize: this.props.isMobile ? 'cover' : 'contain',
					backgroundBlendMode: 'normal',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: this.props.isMobile ? '75%' : '200% center',
				}}/>

				<ScrollSection 
				name={sections[0]} black fullHeight sections={sections} activeSection={activeSection}
				style={{ 
					backgroundColor: 'transparent'
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<HeroBlock 
					headerText={[ <span><span className="outline">Helix </span></span>, <span><span className="outline">Sync</span></span>, ` helped designers version their assets.` ]}
					/>
				</ScrollSection>


				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				activeSection={activeSection}
				disableSectionNumber
				onSetActive={() => { this.setActiveSection(1); }}>
					<ProjectIntroBlock 
					col1="
						The design team with Perforce saw an opportunity to create a Dropbox-like asset versioning tool for techincal-minded designers. 
						\n\n 
						Perforce's version control tools worked well for their users versioning code but large teams of designers lacked a tool to version and collaborate on large binary files like 3D renders or video files."
					col2="
						Perforce has been a leader in the version control space since they premiered their centralized versioning engine in 1995. 
						\n\n
						Since the arrival of distributed versioning tools, most notably Git and Github, Perforce has struggled to stay relevant to their users. Recently they have found their niche by appealing to the design community.
					" 
					media={{
						type: 'image', 
						src: '../assets/img/perforce/sean.png', 
						aspectRatioWidth: 4, 
						aspectRatioHeight: 3 
					}}
					col3="My role on this project involved creating the visual designs and creating the prototype which we conducted user testing with. In the user research phase I worked closely with another designer to help schedule and facilitate most of the sessions. I also led group synthesis sessions at the end of the project." 
					col4="With the our new design, the unified system is more efficient. It eliminates the designer’s need to rely on creating versions manually of their files. "
					/>
				</ScrollSection>


				<ScrollSection 
				name={sections[2]}
				disableSectionNumber
				sections={sections} 
				activeSection={activeSection}>
					<ProjectDetailsBlock 
					role="User Experience Designer"
					date="Summer, 2015"
					client="Perforce UX"
					team={["Janet Taylor", "Rebecca Jablonski", "Sean Ardley", "David Taylor"]} />
				</ScrollSection>


				<ScrollSection 
				name={sections[2]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<ProjectSectionBlock 
					title="Sync N’ Share"
					description1="The design team with Perforce saw an opportunity to create a Dropbox-like versioning tool for techincal-minded designers."
					description2="We designed two different application flows: Manual & Auto mode but which worked best for our target user group?"
					media={{ type: "video", src: "assets/img/perforce/helix-sync-uploading.mp4" }}
					/>
				</ScrollSection>


				<ScrollSection 
				name={sections[3]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<ProjectSectionBlock 
					title="Auto Sync"
					description1="In our first round of research we we're looking to learn what mode of the product worked best for them. Auto sync mode worked similar to dropbox – new versions of assets were automatically created and shared."
					media={{ type: "video", src: "assets/img/perforce/auto.mp4" }}
					/>
				</ScrollSection>


				<ScrollSection 
				name={sections[4]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}>
					<ProjectSectionBlock 
					title="Manual Sync"
					description1="Manual sync mode functioned similar to a tools like github – new versions of assets were explicitly created and shared along with a quick message to your team telling them what changed."
					media={{ type: "video", src: "assets/img/perforce/manual-sync-flow.mp4" }}
					/>
				</ScrollSection>


				<ScrollSection 
				black
				sections={sections} 
				activeSection={activeSection}>
					<ProjectUpNextBlock name="Helix Cloud" to="helix-cloud"/>
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
	perforce1: () => dispatch(perforce1()),
	perforce2: () => dispatch(perforce2()),
	cisco: () => dispatch(cisco()),
	protohack: () => dispatch(protohack()),
	setPanel: (str) => dispatch(setPanel(str)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HelixSync)
