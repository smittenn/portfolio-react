import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import IntersectionVisible from "react-intersection-visible"
import hexToRgb from "../services/hexToRgb"

export default class  ScrollSection extends Component {

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

		const { name, onSetActive, black, bgImage, bgColor } = this.props;

		const classnames = classNames({
			"black": this.props.black,
			"grey": this.props.grey
		})

		const color = bgColor ? hexToRgb(bgColor) : hexToRgb("#232021");
		
		return (
			<Element name={name}>
				<IntersectionVisible 
				onShow={(i) => i[0].target.classList.add("active-section")} 
				onHide={(i) => i[0].target.classList.remove("active-section")}
				>
					<section className={classnames} style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundColor: `rgba(${color.r}, ${color.b}, ${color.g}, .6`} : null}>
						{ this.props.children }
					</section>
					<Link style={{display: "none"}} to={name} spy={true} smooth={true} hashSpy={true} offset={0} onSetActive={onSetActive}>
					</Link>
				</IntersectionVisible>
			</Element>
		);
	}
}