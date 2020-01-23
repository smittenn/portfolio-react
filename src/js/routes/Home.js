import React, {Component} from "react"
import { connect } from "react-redux"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import {NavLink} from 'react-router-dom'

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"

import ScrollSection from "../components/ScrollSection"
import ParallaxHeader from "../components/ParallaxHeader"
import ScrollArrow from "../components/ScrollArrow"
import ProjectCard from "../components/ProjectCard"
import TextLink from "../components/TextLink"

import Sidebar from "../components/Sidebar"

import Image from "../components/Image"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"


class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeSection: "hello",
			sections: [
				"hello",
				"about",
				"process",
				"projects",
				"social",
			],
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.home();
		this.props.reset();
	}

	componentWillUnmount() {
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
				name: "American Made",
				href: "/american-made",
				tags: [ "UI", "Interactive" ],
				img: "../assets/img/american-made/columbia.gif",
				aspectRatioWidth: 2,
				aspectRatioHeight: 1,
			},
			{
				name: "V.ai Player",
				href: "/vai",
				tags: [ "UX", "Interactive" ],
				img: "../assets/img/vai/mobile-16x9.png",
				aspectRatioWidth: 16,
				aspectRatioHeight: 9,
			},
			{
				name: "Translator",
				href: "/translator",
				tags: [ "UX", "User Testing" ],
				img: "../assets/img/translator/usertesting.svg",
				aspectRatioWidth: 16,
				aspectRatioHeight: 9,
			},
			{
				name: "Wrap Interactions",
				href: "/micro-app-interactions",
				tags: [ "Interactive", "Mobile" ],
				img: "../assets/img/card-components/share-animation-zoomed-out.gif",
				aspectRatioWidth: 4,
				aspectRatioHeight: 3,
			},
			{
				name: "Wrap Templates",
				href: "/micro-app-templates",
				tags: [ "Visual Design", "Mobile" ],
				img: "../assets/img/card-components/perspective-cards.jpg",
				aspectRatioWidth: 8,
				aspectRatioHeight: 5,
			},
			{
				name: "J&J Home",
				href: "/jnj-home",
				tags: [ "Visual Design", "Mobile" ],
				img: "../assets/img/jnj-home/connected.svg",
				aspectRatioWidth: 16,
				aspectRatioHeight: 9,

			},
			{
				name: "J&J MDC",
				href: "/jnj-mdc",
				tags: [ "Design System", "UX" ],
				img: "../assets/img/jnj-mdc/ladies.jpg",
				aspectRatioWidth: 16,
				aspectRatioHeight: 9,

			},
			{
				name: "Perforce",
				href: "/perforce",
				tags: [ "Product Design", "UX", "UI" ],
				img: "../assets/img/perforce/banner.jpg",
				aspectRatioWidth: 16,
				aspectRatioHeight: 9,

			},

		]

		const { activeSection, sections } = this.state;

		const brandBlack = hexToRgb(palette("brand-black"));
		const brandRed = hexToRgb(palette("brand-red"));
		
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
						linear-gradient(
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .6),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .6)
						),
						url(../assets/img/leaf.gif)
					`, 
					backgroundSize: 'cover',
				}}  
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxHeader 
					headerText={[`Eric C. Smith is a digital`, <span><span className="outline">Interactive&nbsp;</span></span>, <span><span className="outline">Designer&nbsp;</span></span>, `in New York City.`]} 
					/>
				</ScrollSection>


				<ScrollSection 
				name={sections[1]} 
				fullHeight
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							{/*<div className="spacer spacer__sm"/>*/}
							<h2>{splitWord("Hello There")}</h2>
							<blockquote className="">
								{splitWord(`I’m a technical, detail-oriented creative who blurs the line between designer and developer. My design aesthetic is about keeping it minimal and functional. When I’m not designing, you can find me outdoors taking photos with friends.`)}
							</blockquote>
							<h5 className="mb0">
								<TextLink isBlack hideUnderline>
									<NavLink to="about-me">{splitWord('Learn More')}</NavLink>
								</TextLink>
							</h5>
						</div>
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-6 grid__item--hide-bp-medium">
							<div className="grid__row mb0">
								<div className="grid__item grid__item--col-4">
									{/*<div className="spacer spacer__sm"/>*/}
									<Image src="../assets/img/lands-end-3x4.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
								</div>
								<div className="grid__item grid__item--col-4 shift--left">
									<div className="spacer spacer__lg"/>
									<Image src="../assets/img/me-3x4.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
									{/*<div className="spacer spacer__sm"/>*/}
								</div>
								<div className="grid__item grid__item--col-4 shift--left">
									<div className="spacer spacer__md"/>
									<Image src="../assets/img/mist-3x4.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
								</div>
							</div>
						</div>
					</div>
				</ScrollSection>


				<ScrollSection 
				name={sections[2]}
				sections={sections}
				fullHeight
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-6 grid__item--hide-bp-medium">
							<div className="grid__row m0">
								<div className="grid__item grid__item--col-4">
									{/*<div className="spacer spacer__sm"/>*/}
									<Image src="../assets/img/roof.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
								</div>
								<div className="grid__item grid__item--col-4 shift--left">
									<div className="spacer spacer__lg"/>
									<Image src="../assets/img/brooklyn-3x4.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
									{/*<div className="spacer spacer__md"/>*/}
								</div>
								<div className="grid__item grid__item--col-4 shift--left">
									<div className="spacer spacer__md"/>
									<Image src="../assets/img/window.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
								</div>
							</div>
						</div>

						{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							{/*<div className="spacer spacer__sm"/>*/}
							<h2>{splitWord("Code x Design")}</h2>
							<blockquote className="">
								{splitWord(`I specialize in HTML prototypes, visual design, motion graphics and front-end code. I prefer to prototype in the browser. You can learn more about my ideal design process below.`)}
							</blockquote>
							<h5 className="mb0">
								<TextLink isBlack hideUnderline>
									<NavLink to="process">{splitWord('Learn More')}</NavLink>
								</TextLink>
							</h5>
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
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<h4>Select Projects</h4>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<div className="spacer spacer__md"/>
							<ProjectCard name={projects[0].name} href={projects[0].href} tags={projects[0].tags}>
								<Image src={projects[0].img} aspectRatioWidth={projects[0].aspectRatioWidth} aspectRatioHeight={projects[0].aspectRatioHeight}/>
							</ProjectCard>
							<ProjectCard name={projects[1].name} href={projects[1].href} tags={projects[1].tags}>
								<Image src={projects[1].img} aspectRatioWidth={projects[1].aspectRatioWidth} aspectRatioHeight={projects[1].aspectRatioHeight}/>
							</ProjectCard>
							<ProjectCard name={projects[2].name} href={projects[2].href} tags={projects[2].tags}>
								<Image src={projects[2].img} aspectRatioWidth={projects[2].aspectRatioWidth} aspectRatioHeight={projects[2].aspectRatioHeight}/>
							</ProjectCard>
							<ProjectCard name={projects[3].name} href={projects[3].href} tags={projects[3].tags}>
								<Image src={projects[3].img} aspectRatioWidth={projects[3].aspectRatioWidth} aspectRatioHeight={projects[3].aspectRatioHeight}/>
							</ProjectCard>
							<ProjectCard name={projects[4].name} href={projects[4].href} tags={projects[4].tags}>
								<Image src={projects[4].img} aspectRatioWidth={projects[4].aspectRatioWidth} aspectRatioHeight={projects[4].aspectRatioHeight}/>
							</ProjectCard>
							<ProjectCard name={projects[5].name} href={projects[5].href} tags={projects[5].tags}>
								<Image src={projects[5].img} aspectRatioWidth={projects[5].aspectRatioWidth} aspectRatioHeight={projects[5].aspectRatioHeight}/>
							</ProjectCard>
							<ProjectCard name={projects[6].name} href={projects[6].href} tags={projects[6].tags}>
								<Image src={projects[6].img} aspectRatioWidth={projects[6].aspectRatioWidth} aspectRatioHeight={projects[6].aspectRatioHeight}/>
							</ProjectCard>
							<ProjectCard name={projects[7].name} href={projects[7].href} tags={projects[7].tags}>
								<Image src={projects[7].img} aspectRatioWidth={projects[7].aspectRatioWidth} aspectRatioHeight={projects[7].aspectRatioHeight}/>
							</ProjectCard>
							<div className="spacer spacer__md"/>
						</div>
					</div>
					{/*<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<h5 className="">
								<TextLink isBlack hideUnderline>
									<NavLink to="process">See All Projects</NavLink>
								</TextLink>
							</h5>
						</div>
					</div>*/}
				</ScrollSection>


				<ScrollSection 
				name={sections[4]} 
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<h4>Social</h4>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<div className="spacer spacer__md"/>
							<h2 className="">
								<TextLink isBlack hideUnderline>
									<a target="_blank" href="//github.com/erchsm">Github</a>
								</TextLink>
							</h2>
							<h2 className="">
								<TextLink isBlack hideUnderline>
									<a target="_blank" href="//codepen.io/erchsm">Codepen</a>
								</TextLink>
							</h2>
							<h2 className="">
								<TextLink isBlack hideUnderline>
									<a target="_blank" href="//dribbble.com/erchsm">Dribbble</a>
								</TextLink>
							</h2>
							<h2 className="">
								<TextLink isBlack hideUnderline>
									<a target="_blank" href="//www.instagram.com/e.smitten">Instagram</a>
								</TextLink>
							</h2>
							<h2 className="">
								<TextLink isBlack hideUnderline>
									<a target="_blank" href="//www.flickr.com/photos/erchsm">Flickr</a>
								</TextLink>
							</h2>
						</div>
						{/*<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<div className="spacer spacer__md"/>
						</div>*/}
						<div className="spacer spacer__md"/>
					</div>
				</ScrollSection>

				{/*<ScrollSection 
				name={sections[3]} 
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-5 grid__item--col-11-medium">
							<div className="spacer spacer__md"/>
							<h2>{splitWord("Play & Experiment")}</h2>
							<blockquote>
								{splitWord(`I enjoy trying out new tools and technologies to express myself creatively and broaden my horizons. In my free time I create visual art with code. This can lead to interesting and sometimes strange output.`)}
							</blockquote>
						</div>
					</div>
				</ScrollSection>*/}

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)