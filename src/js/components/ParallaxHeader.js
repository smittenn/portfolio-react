import React, {Component} from "react"
import { Parallax } from "react-parallax"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import { connect } from 'react-redux'

import NavToggle from "./NavToggle"
import Sidebar from "./Sidebar"
import GridLines from "./GridLines"
import ScrollArrow from "./ScrollArrow"

import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"
import detectMobile from "../services/detectMobile"
import palette from "../services/palette"


class ParallaxHeader extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isAnimating: detectMobile(),
			scrollAmount: 0,
			isHidden: false,
		}
	}

	componentDidMount() {
		document.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.handleScroll);
	}


	handleScroll = (event) => {
		(document.body.scrollTop > (window.innerHeight / 4)) ? this.setState({ isHidden: true }) : this.setState({ isHidden: false });
		// this.setState({
		// 	scrollAmount: window.pageYOffset
		// });
	}


	render() {

		const { bgImage, bgColor, headerText, strength, name, nextName, onSetActive, sections, activeSection } = this.props;
		const { isAnimating } = this.state;

		const imageUrl = bgImage ? bgImage : "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

		const color = bgColor ? hexToRgb(bgColor) : hexToRgb(palette("brand-black"));

		// let str = strength ? strength : 600;
		// this.props.isMobile ? (str /= 2) : null

		const classnames = classNames({
			"parallax-header" : true,
			"parallax-header--hidden" : this.state.isHidden,
			"grid": true,
		})

		// const style = {
		// 	opacity: Math.min(Math.max(0, (1 - (this.state.scrollAmount * 0.005))), 1),
		// 	transform: `translateY(${Math.min(Math.max(-120, this.state.scrollAmount * -0.5), 0)}px) skewX(${Math.min(Math.max(-6, this.state.scrollAmount * -0.05), 0)}deg)`,
		// };

		const style = {}

		let updatedText = [];

		headerText.forEach((item, idx) => {
			typeof(item) == "string" ? updatedText[idx] = splitWord(item, style) : updatedText[idx] = React.cloneElement(item, { style: style, key: idx })
		})

		// const opacity = Math.min(Math.max(0, (1 - (this.state.scrollAmount * 0.0025))), 1);
		// const transform = `translateY(${-100 * window.pageYOffset}px)`;


		return (
			<div className={classnames}>
				<div className="grid__item grid__item--col-1 grid__item--col-hide-bp-medium"/>
				<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
					<h1 className="no-mb">{updatedText}</h1>
				</div>
			</div>				
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(ParallaxHeader)