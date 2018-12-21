import React, {Component} from 'react'
import { Parallax } from 'react-parallax'
import { connect } from 'react-redux'

import { Link, DirectLink, Element, Events, animateScroll, scrollSpy} from "react-scroll";

import { increment, decrement, reset, setCounter } from '../actions/counter'
import { home } from '../actions/abbreviation'

import Nav from './Nav';
import GridLines from './GridLines'

// import detectMobile from '../services/detectMobile'


class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.home();
		this.props.reset();
	}


	splitText = (text) => {
		return text.split(' ');
	}

	// componentDidMount() {
	// 	window.addEventListener('resize', this.detectMobile);
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('resize', this.detectMobile);
	// }

	// detectMobile = (event) => {
	// 	this.setState({
	// 		isMobile: detectMobile()
	// 	})
	// }

	render() {

		{/* percentage => (
			<div className="grid" style={{opacity: `${1 -  (percentage * percentage)}`}}>
			</div>
		)*/}



		const pageTitle = "Eric C. Smith is a User Experience Designer in New York City";

		const splitTitle = this.splitText(pageTitle).map((item, index) =>
			<span key={index}>{item}{(index != this.splitText(pageTitle).length) ? '\u00A0' : null}</span>
		);

		const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
		
		return (
			<div>
				<Element name="hello"><Parallax 
				bgImage={image1} 
				blur={{ min: -3, max: 6 }} 
				strength={400}
				renderLayer={null}
				>
					<div className="grid">
						<div className="grid__item grid__item--col-9 grid__item--col-12-medium">
							<h1 className="white">{splitTitle}</h1>
						</div>
					</div>
					<Link to="hello" spy={true} smooth={true} hashSpy={true} onSetActive={() => this.props.setCounter(1)}>
						<i className="iconcss icon-caret-down-lg"></i>
					</Link>
					<Link to="about" spy={true} smooth={true} hashSpy={true} onSetActive={() => this.props.setCounter(2)}>
						<i className="iconcss icon-caret-down-lg"></i>
					</Link>
					<Link to="projects" spy={true} smooth={true} hashSpy={true} onSetActive={() => this.props.setCounter(3)}>
						<i className="iconcss icon-caret-down-lg"></i>
					</Link>
				</Parallax></Element>
				<Element name="about">
					<section>
						<div className="grid">
							<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
								<h2>Hi there, I’m Eric.</h2>
								<h3>I’m a designer with a nack for writing code. Here are some things I’ve worked on.</h3>
								<p>I’ve built this site as a way to flex my coding skills. My design philosophy is about keeping it simple, the best design solution is usually the simplest and most direct. When im not designing or writing code, I’m taking photos with friends or cycling.</p>
							</div>
							<div className="grid__item grid__item--col-1"/>
							<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
								{<img src="../assets/img/me3.jpg"/>}
							</div>
						</div>
					</section>
				</Element>
				<Element name="projects">
					<section>
						<div className="grid">
							<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
								<h2>Hi there, I’m Eric.</h2>
								<h3>I’m a designer with a nack for writing code. Here are some things I’ve worked on.</h3>
								<p>I’ve built this site as a way to flex my coding skills. My design philosophy is about keeping it simple, the best design solution is usually the simplest and most direct. When im not designing or writing code, I’m taking photos with friends or cycling.</p>
							</div>
							<div className="grid__item grid__item--col-1"/>
							<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
								{<img src="../assets/img/me3.jpg"/>}
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
	increment: () => dispatch(increment()),
	decrement: () => dispatch(decrement()),
	reset: () => dispatch(reset()),
	setCounter: (n) => dispatch(setCounter(n)),
	home: () => dispatch(home()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)