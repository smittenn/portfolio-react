import React, {Component} from "react"
import { Parallax } from "react-parallax"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"


import splitWord from "../services/splitWord"
import hexToRgb from "../services/hexToRgb"

// import detectMobile from "../services/detectMobile"


export default class ParallaxHeader extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	componentDidUpdate(prevProps) {
	}

		
	render() {

		const { bgImage, bgColor, headerText, strength } = this.props;

		const imageUrl = bgImage ? bgImage : "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

		const color = bgColor ? hexToRgb(bgColor) : hexToRgb("#232021");

		const str = strength ? strength : 600;
		
		return (
			<Parallax 
			bgImage={imageUrl} 
			blur={null} 
			strength={str}
			renderLayer={percentage => (
				<div className="react-parallax-contents" style={{ backgroundColor: `rgba(${color.r}, ${color.b}, ${color.g}, ${percentage})` }}>
					<div className="grid">
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<h1>{splitWord(headerText, { opacity: -(3 * percentage) + 2.5, transform: `skewY(${((10 * percentage) - 5)}deg) translate3d(0,${(-400 * (1 - percentage)) + 200}px,0)`})}</h1>
						</div>
					</div>
				</div>
			)}>
			</Parallax>
		);
	}
}

