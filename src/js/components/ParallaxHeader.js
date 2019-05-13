import React, {Component} from "react"
import { Parallax } from "react-parallax"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import NavToggle from "./NavToggle"
import Sidebar from "./Sidebar"
import GridLines from "./GridLines"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import detectMobile from "../services/detectMobile"
import palette from "../services/palette"


export default class ParallaxHeader extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isMobile: detectMobile(),
			isAnimating: detectMobile(),
			scrollAmount: 0,
		}
	}

	componentDidMount() {
		document.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.detectMobile);
		// if (!this.state.isMobile) {
		// 	setTimeout(() => {
		// 		this.setState({ isAnimating: false });
		// 	}, 2400)	
		// }
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.detectMobile);
	}

	detectMobile = (event) => {
		this.setState({
			isMobile: detectMobile(),
		})
	}

	handleScroll = (event) => {
		this.setState({
			scrollAmount: window.pageYOffset
		});
	}


	render() {

		const { bgImage, bgColor, headerText, strength, name, onSetActive, sections, activeSection } = this.props;
		const { isMobile, isAnimating } = this.state;

		const imageUrl = bgImage ? bgImage : "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

		const color = bgColor ? hexToRgb(bgColor) : hexToRgb("#131112");

		let str = strength ? strength : 600;
		isMobile ? (str /= 2) : null

		const classnames = classNames({
			"react-parallax-contents" : true,
			// "react-parallax-contents--animating" : isAnimating,			
		})

		const style = {
			opacity: Math.min(Math.max(0, (1 - (this.state.scrollAmount * 0.005))), 1),
			transform: `translateY(${Math.min(Math.max(0, this.state.scrollAmount * 0.5), 120)}px) skewY(${Math.min(Math.max(-6, this.state.scrollAmount * -0.05), 0)}deg)`,
		};

		let updatedText = [];

		headerText.forEach((item, idx) => {
			typeof(item) == "string" ? updatedText[idx] = splitWord(item, style) : updatedText[idx] = React.cloneElement(item, { style: style, key: idx })
		})

		// const opacity = Math.min(Math.max(0, (1 - (this.state.scrollAmount * 0.0025))), 1);
		// const transform = `translateY(${-100 * window.pageYOffset}px)`;


		return (
			<div>
				<Parallax 
				bgImage={imageUrl} 
				blur={null} 
				strength={str}
				renderLayer={percentage => {
					return (
						<div className={classnames} style={{ backgroundColor: `rgba(${color.r}, ${color.b}, ${color.g}, ${percentage + 0.1})` }}></div>
					)
				}}>
				<div className="grid">
					{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
					<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
						<h1 className="no-mb">{updatedText}</h1>
					</div>
				</div>

				<div className="clip-wrapper">
					<Sidebar sections={sections} activeSection={activeSection}/>
					<NavToggle black={false}/>
				</div>
				</Parallax>
				<Link style={{display: "none"}} to={name} spy={true} smooth={"easeOutCubic"} duration={1200} hashSpy={true} offset={0} onSetActive={onSetActive}/>
			</div>
		);
	}
}