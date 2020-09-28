import React, {Component} from "react"
import { connect } from "react-redux"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import {NavLink} from 'react-router-dom'

import { reset, setCounter } from "../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"

import ParallaxBackground from "../components/ParallaxBackground"
import ScrollSection from "../components/ScrollSection"
import HeroBlock from "../components/blocks/HeroBlock"
import ProjectCard from "../components/ProjectCard"
import TextLink from "../components/TextLink"

import Sidebar from "../components/Sidebar"

import Carousel from "../components/Carousel"
import Image from "../components/Image"
import ProcessDiagram from "../components/ProcessDiagram"

import processData from "../data/process"
import navData from "../data/nav"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import palette from "../services/palette"
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

		const brandBlack = hexToRgb(palette("brand-black"));
		const brandRed = hexToRgb(palette("brand-red"));

		const heroBackgroundImage = this.props.isMobile ? 'banner-5x8' : 'banner-3x2';

		// const circles = document.getElementsByClassName('step__spot-circle');
		// const circleColor = `rgb(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b})`;

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

				{/*
						<div className="grid">
							<div className="grid__item grid__item--col-3 grid__item--col-10-medium shift-left--lg">
								<div className="spacer spacer__lg"/>
								<Image src="../assets/img/standing.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
							</div>
							<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
								<div className="spacer spacer__sm"/>
								<div className="spacer spacer__lg"/>
								<div className="spacer spacer__lg"/>
								<Image src="../assets/img/banner.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
							</div>
							<div className="grid__item grid__item--col-3 grid__item--col-10-medium">
								<Image src="../assets/img/mist.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
							</div>
							<div className="grid__item grid__item--col-3 grid__item--col-10-medium shift-right--lg">
								<div className="spacer spacer__md"/>
								<Image src="../assets/img/ocean.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
							</div>
						</div>
				*/}

				{/*<ParallaxBackground
					style={{ 
						backgroundImage: `
							radial-gradient(
								rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .0),
								rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .0)
							),
							url(../assets/img/${heroBackgroundImage}.jpg)`,
						backgroundPosition: 'top center',
						backgroundSize: 'cover'
					}}
				/>*/}

				{/*<div className="grid">
					<div className="grid__item grid__item--col-6 grid__item--col-2-medium"/>
					<div className="grid__item grid__item--col-5 grid__item--col-10-medium">
						<Image src="../assets/img/banner.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
					</div>
				</div>*/}


				{/* { backgroundImage: 'linear-gradient(180deg, #5e9bca, #decfd6 60%)' } */}

				<ScrollSection
				name={sections[0]}
				black
				fullHeight
				sections={sections}
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(0); }}>
					<ParallaxBackground>
						<div className="grid p0" style={{ alignItems: 'center' }}>
							{<div className="grid__item grid__item--col-6 grid__item--col-4-medium"/>}
							{/*<div className="grid__item grid__item--col-5 grid__item--hide-bp-medium">
								{<div className="spacer spacer__lg"/>}
								<Image src="../assets/img/banner-1x1.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
							</div>*/}
							{/*<div className="grid__item grid__item--col-4 grid__item--col-10-medium shift-right--md">
								<Image src="../assets/img/graffiti.jpg" aspectRatioWidth={4} aspectRatioHeight={5}/>
								<div className="spacer spacer__lg"/>
							</div>*/}
							{/*<div className="grid__item grid__item--col-4 grid__item--col-10-medium shift-right--md">
								<Image src="../assets/img/nyc.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
							</div>*/}
							<div className="grid__item grid__item--col-6 grid__item--col-8-medium">
								{/*<div className="spacer spacer__lg"/>*/}
								<Carousel>
									<Image src="../assets/img/banner-1x1.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
									<Image src="../assets/img/graffiti.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
									<Image src="../assets/img/ferris-wheel.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
								</Carousel>
							</div>
						</div>
					</ParallaxBackground>

					<HeroBlock
					headerText={[`Eric C. Smith is an`, <span><span className="outline">Interactive&nbsp;</span></span>, <span><span className="outline">Designer&nbsp;</span></span>, `in New York City.`]}
					/>

				</ScrollSection>

				<ScrollSection
				name={sections[1]}
				fullHeight={this.props.isMobile ? true : false}
				sections={sections}
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<div className="grid__row mb0">
								<div className="grid__item grid__item--col-12 grid__item--col-10-medium">
									<h2>{splitWord("Hello There")}</h2>
								</div>
								<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
									<blockquote className="">
										{splitWord(`I’m a technical, detail-oriented creative who blurs the line between designer and developer. My design aesthetic is about keeping it minimal and functional. When I’m not designing, you can find me outdoors taking photos with friends.`)}
									</blockquote>
									<h5 className="mb0">
										<TextLink isBlack hideUnderline>
											<NavLink to="about-me">{splitWord('Learn More')}</NavLink>
										</TextLink>
									</h5>
								</div>
							</div>
						</div>
						<div className="grid__item grid__item--col-6 grid__item--hide-bp-medium">
							<div className="grid__row mb0">
								{/*<div className="grid__item grid__item--col-6">
									<Image src="../assets/img/lands-end.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
								</div>*/}
								{<div className="grid__item grid__item--col-6">
									<Image src="../assets/img/mist.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
								</div>}
								<div className="grid__item grid__item--col-6 shift-left--sm">
									<div className="spacer spacer__lg"/>
									<Image src="../assets/img/me.jpg" aspectRatioWidth={1} aspectRatioHeight={1}/>
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
									<h2>{splitWord("Code × Design")}</h2>
								</div>
								<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
									<blockquote className="">
										{splitWord(`I specialize in HTML prototypes, design systems, motion graphics and front-end code. I prefer to prototype in the browser. I believe good process is key to creating successful designs.`)}
									</blockquote>
									<h5 className="mb0">
										<TextLink isBlack hideUnderline>
											<NavLink to="process">{splitWord('Learn More')}</NavLink>
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
							<ProjectCard items={projects} />
							<div className="spacer spacer__md"/>
						</div>
					</div>
					{<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<h5 className="">
								<TextLink isBlack hideUnderline>
									<NavLink to="work">See All Works</NavLink>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)