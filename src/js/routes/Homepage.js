import React, {Component} from "react"
import { connect } from "react-redux"

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"
import { setPanel } from "../actions/panel"

import DelayLink from "../components/DelayLink"
import ParallaxBackground from "../components/ParallaxBackground"
import ScrollSection from "../components/ScrollSection"
import { HeroBlock } from "../components/blocks/HeroBlock"
import ProjectCard from "../components/ProjectCard"
import TextLink from "../components/TextLink"

import Carousel from "../components/Carousel"
import Image from "../components/Image"
import ProcessDiagram from "../components/ProcessDiagram"

import processData from "../data/process"
import navData from "../data/nav"
import { about } from "../data/about"

import splitWord from "../services/splitWord"
import pad from "../services/pad"


class Homepage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			projects: [],
			activeSection: "hello",
			sections: [
				"hello",
				"about",
				"process",
				"works",
				"social",
			],
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.home();
		this.props.reset();
		this.props.setPanel("All Pages");

		this.formatData(navData);
	}


	setActiveSection = (idx) => {
		this.setState({
			activeSection: this.state.sections[idx],
		})
		this.props.setCounter(idx + 1);
	}


	formatData = (data) => {
		data.items.forEach(child => {
			if (child.media != null) {
				this.setState(prevState => ({
					projects: prevState.projects.concat(child)
				}));
			}
			if (child.items != null) {
				this.formatData(child);
			} 
		})
	}


	render() {
		const { activeSection, sections, projects } = this.state;

		const formattedRole = about.role.split(" ").map(word => <span><span className="outline">{word} </span></span>)
		const formattedTagline = [`${about.name} is an `, ...formattedRole, `in ${about.location}.`]

		const processPreview = processData.data.slice(0, 3).map((item, i) => (
			<div className="grid__row mb0">
				<div className="grid__item grid__item--col-12">
					<p className="mb0">{pad(i + 1, 2) + '. '}</p>
					<h4 className="mb0">{item.title}</h4>
					<blockquote>{item.body}</blockquote>
				</div>
			</div>
		))

		return (
			<article>
				<ScrollSection
				name={sections[0]}
				black
				fullHeight
				sections={sections}
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(0); }}
				background={<ParallaxBackground>
					<div className="grid" style={{ alignItems: 'center' }}>
						<div className="grid__item grid__item--col-6 grid__item--col-3-medium"/>
						<div className="grid__item grid__item--col-5 grid__item--col-9-medium">
							<Carousel disableNavigation={this.props.isMobile ? true : false} stacking>
								<Image src="../assets/img/ferris-wheel.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
								<Image src="../assets/img/graffiti.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
								<Image src="../assets/img/banner-1x1.jpg" aspectRatioWidth={1} aspectRatioHeight={1} alt="Some palm trees in the early morning"/>
							</Carousel>
						</div>
					</div>
				</ParallaxBackground>}>
					<HeroBlock
					headerText={formattedTagline}/>
				</ScrollSection>

				<ScrollSection
				name={sections[1]}
				right
				fullHeight={this.props.isMobile ? true : false}
				sections={sections}
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-5 grid__item--hide-bp-medium">
							<Carousel bottomNav stacking>
								<Image src="../assets/img/me7.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
								<Image src="../assets/img/bike.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
								<Image src="../assets/img/fence.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
							</Carousel>
						</div>
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<div className="grid__row mb0">
								<div className="grid__item grid__item--col-12 grid__item--col-10-medium">
									<h2 className="h2">{splitWord("Hello There")}</h2>
								</div>
								<div className="grid__item grid__item--col-12 grid__item--col-12-medium">
									<blockquote className="">
										{splitWord(`I’m a technical, detail-oriented creative who blurs the line between designer and developer. My design approach is about keeping it minimal and functional. When I’m not designing, you can find me out taking photos or riding my bike.`)}
									</blockquote>
									<h5 className="mb0">
										<TextLink isBlack hideUnderline>
											<DelayLink to="about-me">{splitWord('Learn More')}</DelayLink>
										</TextLink>
									</h5>
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
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<div className="grid__row mb0">
								<div className="grid__item grid__item--col-12 grid__item--col-10-medium">
									<h2 className="h2">{splitWord("Code × Design")}</h2>
								</div>
								<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
									<blockquote className="">
										{splitWord(`I specialize in HTML prototypes, design systems, motion graphics and front-end code. I prefer to prototype in the browser. I believe good process is key to creating successful designs.`)}
									</blockquote>
									<h5 className="mb0">
										<TextLink isBlack hideUnderline>
											<DelayLink to="process">{splitWord('Learn More')}</DelayLink>
										</TextLink>
									</h5>
								</div>
							</div>
						</div>
						<div className="grid__item grid__item--col-5 grid__item--hide-bp-medium">
							<ProcessDiagram/>
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
							<h4>Select Works</h4>
						</div>
					</div>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<div className="spacer spacer__sm"/>
						</div>
					</div>
					<ProjectCard items={projects}/>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<div className="spacer spacer__md"/>
						</div>
					</div>
					{<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<h5 className="">
								<TextLink isBlack hideUnderline>
									<DelayLink to="work">See All Works</DelayLink>
								</TextLink>
							</h5>
						</div>
					</div>}
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
							<h4>Follow</h4>
							<div className="spacer spacer__md"/>
						</div>
					</div>
					<ProjectCard items={[
						{
							name: "Github",
							to: "//github.com/smittenn"
						},
						{
							name: "Codepen",
							to: "//codepen.io/erchsm"
						},
						{
							name: "Dribbble",
							to: "//dribbble.com/erchsm"
						},
						{
							name: "Instagram",
							to: "//www.instagram.com/smitttennn"
						},
						{
							name: "Spotify",
							to: "//open.spotify.com/user/erchsm"
						},
						{
							name: "Flickr",
							to: "//www.flickr.com/photos/erchsm"
						}
					]}/>

					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<div className="spacer spacer__md"/>
						</div>
					</div>
				</ScrollSection>
			</article>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isMobile: state.isMobile,
	windowHeight: state.windowHeight,
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
