import React, {Component} from "react"
import { Parallax } from "react-parallax"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"


import splitWord from "../services/splitWord"
import splitLetter from "../services/splitLetter"
import hexToRgb from "../services/hexToRgb"

import detectMobile from "../services/detectMobile"


export default class ParallaxHeader extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isMobile: detectMobile(),
			isAnimating: true,
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.detectMobile);
		setTimeout(() => {
             this.setState({ isAnimating: false });
        }, 2400)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.detectMobile);
	}

	detectMobile = (event) => {
		this.setState({
			isMobile: detectMobile(),
		})
	}

		
	render() {

		const { bgImage, bgColor, headerText, strength, name, onSetActive } = this.props;
		const { isMobile, isAnimating } = this.state;

		const imageUrl = bgImage ? bgImage : "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

		const color = bgColor ? hexToRgb(bgColor) : hexToRgb("#232021");

		let str = strength ? strength : 600;
		isMobile ? (str /= 2) : null

		const classnames = classNames({
			"react-parallax-contents" : true,
			"react-parallax-contents--animating" : isAnimating,			
		})

		return (
			<div>
				<Parallax 
				bgImage={imageUrl} 
				blur={null} 
				strength={str}
				renderLayer={percentage => {
					const style = { 
						opacity: -(3 * percentage) + 2.5, 
						transform: `skewY(${((10 * percentage) - 5)}deg) translate3d(0,${(400 * (1 - percentage)) - 200}px,0)`
					}
					let updatedText = [];
					headerText.forEach((item, idx) => {
						typeof(item) == "string" ? updatedText[idx] = splitWord(item, style) : updatedText[idx] = React.cloneElement(item, { style: style, key: idx })
					})
					return (
						<div className={classnames} style={{ backgroundColor: `rgba(${color.r}, ${color.b}, ${color.g}, ${percentage})` }}>
							<div className="grid">
								<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
									<h1 className="no-mb">{updatedText}</h1>
								</div>
							</div>
						</div>
					)
				}}>
				</Parallax>
				<Link style={{display: "none"}} to={name} spy={true} smooth={true} hashSpy={true} offset={0} onSetActive={onSetActive}/>
			</div>
		);
	}
}

