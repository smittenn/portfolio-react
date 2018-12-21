import React, {Component} from 'react'
import { Parallax } from 'react-parallax'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { Link, DirectLink, Element, Events, animateScroll, scrollSpy} from "react-scroll";

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
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.home();
		this.props.reset();
		this.props.setNavWhite();
	}


	splitText = (text) => (
		text.split(' ').map((item, index) =>
			<span key={index}>{item}{ (index != text.split(' ').length) ? '\u00A0' : null}</span>
		)
	)

	// componentDidMount() {
	// 	window.addEventListener('resize', this.detectMobile);
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('resize', this.detectMobile);
	// }

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
			<div>
				<Element name="hello" className={classNames({ 'active-section' : activeSection == 'hello'})}><Parallax 
				bgImage={image1} 
				blur={{ min: -3, max: 6 }} 
				strength={400}
				renderLayer={null}
				>
					<div className="grid">
						<div className="grid__item grid__item--col-9 grid__item--col-12-medium">
							<h1 className="white">{this.splitText("Eric C. Smith is a User Experience Designer in New York City.")}</h1>
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
								<h1 className="mb">{this.splitText("Form & Function.")}</h1>
								<p>
									{this.splitText("Hi there, my name is Eric. I am a designer with a nack for writing code. Here are some things I’ve worked on.")}
									<br/><br/>
									{this.splitText("I’ve built this site as a way to flex my coding skills. My design philosophy is about keeping it simple, the best design solution is usually the simplest and most direct. When im not designing or writing code, I’m taking photos with friends or cycling.")}
								</p>
							</div>
							<div className="grid__item grid__item--col-2"/>
							<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
								{<img src="../assets/img/me3.jpg"/>}
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