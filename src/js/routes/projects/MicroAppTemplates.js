import React, {Component} from "react"
import { connect } from "react-redux"

import { reset, setCounter } from "../../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce1, perforce2 } from "../../actions/abbreviation"
import { setPanel } from "../../actions/panel"

import ScrollSection from "../../components/ScrollSection"

import ParallaxBackground from "../../components/ParallaxBackground"
import Image from "../../components/Image"

import { HeroBlock, HeroBlockItem } from "../../components/blocks/HeroBlock"
import ProjectUpNextBlock from "../../components/blocks/ProjectUpNextBlock"
import ProjectDetailsBlock from "../../components/blocks/ProjectDetailsBlock"
import ProjectIntroBlock from "../../components/blocks/ProjectIntroBlock"
import ProjectSectionBlock from "../../components/blocks/ProjectSectionBlock"

import hexToRgb from "../../services/hexToRgb"
import palette from "../../services/palette"

class MicroAppTemplates extends Component {

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.wrap2();
		this.props.reset();
		this.props.setPanel("Wrap Media");
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "intro",
			sections: [
				"intro",
				"about",
				"templates",
				"event",
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
				background={<ParallaxBackground 
				style={{ 
					backgroundImage: `
					  linear-gradient(rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .24), rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .24)),
					  url(../assets/img/card-components/banner-alt.jpg),
					  linear-gradient(#f3f4f8, #f3f4f8)`, 
					backgroundSize: this.props.isMobile ? 'cover' : 'contain',
					backgroundBlendMode: 'normal',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: this.props.isMobile ? '-25% center' : '150% center',
				}}/>}
				onSetActive={() => { this.setActiveSection(0); }}>
					<HeroBlock 
					headerText={[ `At`, <span><span className="outline">Wrap </span></span>, <span><span className="outline">Media </span></span>, `we designed 150+ mobile app templates.`]}
					/>
				</ScrollSection>


				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				disableSectionNumber
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<ProjectIntroBlock 
					col1Top='
						Wrap Media aimed to garner adoption of its web based platfrom by creating self-service templates for our customers. Over the course of a year we created 125+ templates for a variety of use cases. Users could get started by simply forking a template and adding their own content.
						\n\n“Well what is a Wrap?” might the question your asking at this point. A Wrap is a highly-focused, app-like, mobile web experience.'
					col1Bottom="On this particular effort I worked as a designer creating templates. We organized templates for visual style and purpose. Each designer would be put in charge of a single visual style family from end to end in the design process." 
					col2Top="Wraps are mobile web apps and live at a URL. The flexibility of the URL allows a end user to enter the Wrap through many channels including social feeds, e-mail, web advertisement or, like shown below, through SMS. Wrap experiences are essentially a colleciton of cards — a new “page” of the traditional “app” is analagous to a card. The creation and distribution of the experiences was handled through a SAAS application that we developed in-house as well." 
					col2Bottom="The team designed Wraps using cards. We would start from a wireframe laying out each card to get a feel for the story of the wrap. Then move into visual design selecting colors and imagery that matched the style family."
					/>
				</ScrollSection>

				<ScrollSection 
				sections={sections} 
				activeSection={activeSection}>
					<ProjectDetailsBlock role="UX/Visual Designer" date="Fall, 2015" client="Wrap Media" team={["Pete Petras", "Mei Yeh", "Theo Arguna", "Cameron Myers"]} />
				</ScrollSection>

				<ScrollSection 
				black
				name={sections[2]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<ProjectSectionBlock 
					title="Templates"
					description1="Over the course of 6 months, myself and the rest of the design team at Wrap Media created 150+ template micro apps for our customers to use."
					description2="Templates gave our users a starting point in our platform and provided them some inspiration to create their own."
					media={{ type: 'video', src: 'assets/img/app-templates/from-fb.mp4' }}
					/>
				</ScrollSection>


				<ScrollSection 
				name={sections[3]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<ProjectSectionBlock 
					title="Event"
					subtitle="Modern Sans Family"
					media={{ type: 'side-scroller' }}>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/1.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/2.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/3.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/4.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/5.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/6.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/7.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/conference/8.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
					</ProjectSectionBlock>
				</ScrollSection>


				<ScrollSection 
				name={sections[4]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}>
					<ProjectSectionBlock 
					title="Lead Gen"
					subtitle="Bold Modern Family"
					media={{ type: 'side-scroller' }}>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/lead-generation/1.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/lead-generation/2.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/lead-generation/3.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/lead-generation/4.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/lead-generation/5.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/lead-generation/6.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
					</ProjectSectionBlock>
				</ScrollSection>

				<ScrollSection 
				name={sections[5]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(5); }}>
					<ProjectSectionBlock 
					title="Fashion"
					subtitle="Modern Sans Family"
					media={{ type: 'side-scroller' }}>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/1.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/2.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/3.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/4.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/5.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/6.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/7.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/8.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/commerce/9.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
					</ProjectSectionBlock>
				</ScrollSection>

				<ScrollSection 
				name={sections[6]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(6); }}>
					<ProjectSectionBlock 
					title="Agency"
					subtitle="Modern Sans Family"
					media={{ type: 'side-scroller' }}>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/1.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						{/*<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/2.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>*/}
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/3.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/4.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/5.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/6.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
							<Image src="../assets/img/app-templates/agency/7.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
					</ProjectSectionBlock>
				</ScrollSection>

				<ScrollSection 
				black
				sections={sections} 
				activeSection={activeSection}>
					<ProjectUpNextBlock name="Helix Sync" to="helix-sync"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MicroAppTemplates)
