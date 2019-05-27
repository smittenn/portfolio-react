import React, {Component} from "react"
import { connect } from "react-redux"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"

import ScrollSection from "../components/ScrollSection"
import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"
import ProjectCard from "../components/ProjectCard"

import Sidebar from "../components/Sidebar"

import Image from "../components/Image"

import splitWord from "../services/splitWord"

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeSection: "hello",
			sections: [
				"hello",
				"about",
				"projects",
				"experiments",
				"social",
			],
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		window.addEventListener('resize', this.detectMobile);

		this.props.home();
		this.props.reset();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.detectMobile);
	}

	detectMobile = (event) => {
		this.setState({
			isMobile: window.innerWidth <= 800,
		})
	}
		
	setActiveSection = (idx) => {
		this.setState({
			activeSection: this.state.sections[idx],
		})
		this.props.setCounter(idx + 1);
	}

	render() {

		const projects = [
			{
				name: "American Made Film Site",
				href: "/american-made",
				tags: [ "UI", "Interactive" ],
				img: "../assets/img/american-made/banner.gif"
			},
			{
				name: "V.ai Player",
				href: "/vai",
				tags: [ "UX", "Interactive" ],
				img: "../assets/img/vai/eye.gif",
			},
			{
				name: "Translator",
				href: "/translator",
				tags: [ "UX", "Design System" ],
				img: "../assets/img/translator/banner.png",
			},
			{
				name: "Micro App Interactions",
				href: "/micro-app-interactions",
				tags: [ "Interactive", "Mobile" ],
				img: "../assets/img/card-components/share-animation.gif",
				aspectRatioWidth: 4,
				aspectRatioHeight: 3,
			},
			{
				name: "Micro App Templates",
				href: "/micro-app-templates",
				tags: [ "Visual Design", "Mobile" ],
				img: "../assets/img/card-components/banner-alt.jpg",
				aspectRatioWidth: 7,
				aspectRatioHeight: 6,
			},
			{
				name: "J&J Home",
				href: "/jnj-home",
				tags: [ "Visual Design", "Mobile" ],
				img: "../assets/img/jnj-home/onboarding-mobile.png"
			},

		]

		const { activeSection, sections } = this.state;
		
		return (
			<article>
				<Element 
				name={sections[0]} 
				className={classNames({ "active-section" : activeSection == sections[0]})}>
					<ParallaxHeader 
					name={sections[0]}
					sections={sections}
					activeSection={activeSection}
					headerText={[`Eric C. Smith is an`, <span className="outline"><span>Interactive </span></span>, <span className="outline"><span>Designer </span></span>, `in New York City.`]} 
					bgImage={"../assets/img/terrain.gif"} 
					onSetActive={() => { this.setActiveSection(0); }}
					/>
				</Element>

				<ScrollSection 
				name={sections[1]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-4 grid__item--col-11-medium">
							<div className="spacer spacer__md"/>
							<h2>{splitWord("Form & Function")}</h2>
							<blockquote>
								{splitWord(`My design philosophy is about keeping it minimal and functional, the best design solution is the simplest and most direct. When I’m not designing, you can find me outdoors taking photos with friends.`)}
							</blockquote>
						</div>
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-2 grid__item--col-4-medium">
							<div className="spacer spacer__sm"/>
							<Image src="../assets/img/lands-end-4x3.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
						<div className="grid__item grid__item--col-2 grid__item--col-4-medium">
							<div className="spacer spacer__lg"/>
							<Image src="../assets/img/me-4x3.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
							<div className="spacer spacer__md"/>
						</div>
						<div className="grid__item grid__item--col-2 grid__item--col-4-medium">
							<div className="spacer spacer__md"/>
							<Image src="../assets/img/mist-3x4.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[2]} 
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-7 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-4 grid__item--col-11-medium">
							<div className="spacer spacer__sm"/>
							{<h2>{splitWord("Visual & Motion")}</h2>}
							<blockquote>
								{splitWord(`I design right in the browser. I specialize in working on HTML prototypes, visual design, motion graphics and front-end code. Here are some of the recent projects I’ve worked on.`)}
								<br/><br/>
								{/*splitWord(`Some of the clients that I have worked for include Warner Brothers Music, Perforce, Minted, BMW, Cisco, NBC Universal, Johnson & Johnson and many more.`)*/}
							</blockquote>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<div className="spacer spacer__sm"/>
							<ProjectCard name={projects[0].name} href={projects[0].href} tags={projects[0].tags}>
								<Image src={projects[0].img} aspectRatioWidth={1} aspectRatioHeight={1}/>
							</ProjectCard>
							<ProjectCard name={projects[2].name} href={projects[2].href} tags={projects[2].tags}>
								<Image src={projects[2].img} aspectRatioWidth={2} aspectRatioHeight={1}/>
							</ProjectCard>
							<ProjectCard name={projects[4].name} href={projects[4].href} tags={projects[4].tags}>
								<Image src={projects[4].img} aspectRatioWidth={projects[4].aspectRatioWidth} aspectRatioHeight={projects[4].aspectRatioHeight}/>
							</ProjectCard>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<div className="spacer spacer__md"/>
							<ProjectCard name={projects[1].name} href={projects[1].href} tags={projects[1].tags}>
								<Image src={projects[1].img} aspectRatioWidth={3} aspectRatioHeight={2}/>
							</ProjectCard>
							<ProjectCard name={projects[3].name} href={projects[3].href} tags={projects[3].tags}>
								<Image src={projects[3].img} aspectRatioWidth={projects[3].aspectRatioWidth} aspectRatioHeight={projects[3].aspectRatioHeight}/>
							</ProjectCard>
							<ProjectCard name={projects[5].name} href={projects[5].href} tags={projects[5].tags}>
								<Image src={projects[5].img} aspectRatioWidth={1} aspectRatioHeight={1}/>
							</ProjectCard>
						</div>
					</div>
				</ScrollSection>

				<ScrollSection 
				name={sections[3]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-4 grid__item--col-11-medium">
							<div className="spacer spacer__md"/>
							<h2>{splitWord("Experiments")}</h2>
							<blockquote>
								{splitWord(`My design philosophy is about keeping it minimal and functional, the best design solution is the simplest and most direct. When I’m not designing, you can find me outdoors taking photos with friends.`)}
							</blockquote>
						</div>
					</div>
				</ScrollSection>



				{<Link to={sections[1]} spy={true} smooth={"easeOutQuint"} duration={1200} offset={0} onSetActive={() => { setCounter(2); this.setActiveSection(1); }}>
					<ScrollArrow label="Learn More"/>
				</Link>}

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)