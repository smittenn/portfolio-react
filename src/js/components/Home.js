import React, {Component} from 'react'
import { Parallax } from "react-parallax"
import { Motion, spring, presets } from 'react-motion'
import { ScrollProvider, Scroller, ScrollLink } from 'react-skroll'

import Nav from './Nav';
import GridLines from './GridLines'

import detectMobile from '../services/detectMobile'


export default class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isMobile: detectMobile(),
		}
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

		const image1 = "./assets/img/mountain.gif";
		
		// console.log(this.props);

		return (
			<div>
				<div name="Hero"><Parallax 
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
				</Parallax></div>
				{<section name="Introduction">
					{<div className="grid">
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<h2>Hi there, I’m Eric.</h2>
							<h3>I’m a designer with a nack for writing code. Here are some things I’ve worked on.</h3>
							<p>I’ve built this site as a way to flex my coding skills. My design philosophy is about keeping it simple, the best design solution is usually the simplest and most direct. When im not designing or writing code, I’m taking photos with friends or cycling.</p>
						</div>
						<div className="grid__item grid__item--col-1"/>
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							{<img src="../assets/img/me3.jpg"/>}
						</div>
					</div>}
				</section>}
				<GridLines/>
			</div>
		);
	}
}