import React, {Component} from 'react'
import { Parallax } from 'react-parallax'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll";

import { reset, setCounter } from '../actions/counter'
import { home } from '../actions/abbreviation'
import { setNavWhite, setNavBlack } from '../actions/color'

import Nav from './Nav';
import GridLines from './GridLines'

// import detectMobile from '../services/detectMobile'


class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeSection: 'hello',
			pageSections: [
			'hello',
			'about',
			'projects',
			],
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		// window.location = window.location.href.split('#')[0];

		this.props.home();
		this.props.reset();
		this.props.setNavWhite();
	}

	debounce = (fn, delay) => {
		let timer = null;
		return () => {
			const context = this;
			const args = arguments;
			clearTimeout(timer);
			timer = setTimeout(() => {
				fn.apply(context, args);
			}, delay);
		}
	}

	// function debounce(a,b,c){var d,e;return function(){function h(){d=null,c||(e=a.apply(f,g))}var f=this,g=arguments;return clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e}}

	splitText = (text) => (
		text.split(' ').map((item, index) =>
			<span key={index}>{item}{ (index != text.split(' ').length) ? '\u00A0' : null}</span>
		)
	)

	wheel = (e) => {
		if (this.state.activeSection == 'hello' && e.deltaY > 0) {
				scroller.scrollTo('about', {
				duration: 300,
				delay: 0,
				smooth: true,
				offset: 0, 
			})
		}
		if (this.state.activeSection == 'about' && e.deltaY < 0) {
			scroller.scrollTo('hello', {
				duration: 300,
				delay: 0,
				smooth: true,
				offset: 0, 
			})
		}
		if (this.state.activeSection == 'about' && e.deltaY > 0) {
			scroller.scrollTo('projects', {
				duration: 300,
				delay: 0,
				smooth: true,
				offset: 0, 
			})
		}
		if (this.state.activeSection == 'projects' && e.deltaY < 0) {
			scroller.scrollTo('about', {
				duration: 300,
				delay: 0,
				smooth: true,
				offset: 0, 
			})
		}
		console.log(e);
	}
		
	setActiveSection = (name) => {
		this.setState({
			activeSection: name
		})
	}

	render() {

		{/* percentage => (
			<div className="grid" style={{opacity: `${1 -  (percentage * percentage)}`}}>
			</div>
		)*/}

		const { activeSection } = this.state;

		const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
		
		return (
			<div onWheel={(e) => {e.preventDefault(); this.debounce(this.wheel(e), 100)}}>
				<Element name="hello" className={classNames({ 'active-section' : activeSection == 'hello'})}><Parallax 
				bgImage={image1} 
				blur={null} 
				strength={400}
				renderLayer={null}
				>
					<div className="grid">
						<div className="grid__item grid__item--col-9 grid__item--col-12-medium">
							<h1 className="white">{this.splitText("Eric C. Smith is a Creative Developer in New York City")}</h1>
						</div>
					</div>
					<Link style={{display: 'none'}} to="hello" spy={true} smooth={true} hashSpy={true} onSetActive={() => {this.props.setCounter(1); this.props.setNavWhite(); this.setActiveSection('hello');}}>
						<i className="iconcss icon-caret-down-lg"></i>
					</Link>
					<Link to="about" spy={true} smooth={true} hashSpy={true} onSetActive={() => {this.props.setCounter(2); this.props.setNavBlack();  this.setActiveSection('about');}}>
						<i className="iconcss icon-caret-down-lg"></i>
					</Link>
					<Link style={{display: 'none'}} to="projects" spy={true} smooth={true} hashSpy={true} onSetActive={() => {this.props.setCounter(3); this.props.setNavWhite();  this.setActiveSection('projects');}}>
						<i className="iconcss icon-caret-down-lg"></i>
					</Link>
				</Parallax></Element>
				<Element name="about" className={classNames({ 'active-section' : activeSection == 'about'})}>
					<section>
						<div className="grid">
							<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
								<h1 className="mb">{this.splitText("Form & Function")}</h1>
								<p>
									{this.splitText("Hi there, my name is Eric. I am a Creative Developer and Designer. Here are some things I’ve worked on.")}
									<br/><br/>
									{this.splitText("My design philosophy is about keeping it simple, the best design solution is the simplest and most direct. When im not writing code, I’m taking photos with friends or cycling.")}
								</p>
							</div>
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--row grid__item--col-7 grid__item--col-4-medium">
								<div style={{transform: 'translateY(-40%)'}} className="grid__item grid__item--col-4"><img src="../assets/img/me-4x3.jpg"/></div>
								<div style={{transform: 'translateY(40%)'}} className="grid__item grid__item--col-4"><img src="../assets/img/lands-end-4x3.jpg"/></div>
								<div style={{transform: 'translateY(-20%)'}} className="grid__item grid__item--col-4"><img src="../assets/img/mist-3x4.jpg"/></div>
							</div>
						</div>
					</section>
				</Element>
				<Element name="projects" className={classNames({ 'active-section' : activeSection == 'projects'})}>
					<section className="black">
						<div className="grid">
							<div className="grid__item grid__item--col-6"/>
							<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
								<h2 className="white mb">{this.splitText("I specialize in creating prototypes, visual design & front-end code.")}</h2>
								<p className="white">{this.splitText("Here are some of the recent projects I've worked on. Some of the clients that I have worked for are Warner Bros. Music, Perforce, Minted, BMW, Cisco, NBC Universal, Johnson & Johnson and many more.")}</p>
							</div>
						</div>
					</section>
				</Element>
				<GridLines/>
			</div>
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
	setNavWhite: () => dispatch(setNavWhite()),
	setNavBlack: () => dispatch(setNavBlack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)