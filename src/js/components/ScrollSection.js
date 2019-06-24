import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import IntersectionVisible from "react-intersection-visible"

import NavToggle from "./NavToggle"
import Sidebar from "./Sidebar"
import ScrollArrow from "./ScrollArrow"
import GridLines from "../components/GridLines"

import palette from "../services/palette"

export default class ScrollSection extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidUpdate(prevProps) {}

	render() {

		const { name, onSetActive, black, style, sections, activeSection, fullHeight } = this.props;

		const classnames = classNames({
			"black": this.props.black,
			"grey": this.props.grey
		})

		fullHeight ? Object.assign(style, { height: 'calc(100vh + 1px', display: 'flex', justifyContent: 'center' }) : null

		const logoStyle = { 
			color: black ? palette('brand-white') : palette('brand-black'),
		}
		
		return (
			<Element name={name}>
				<IntersectionVisible 
				onShow={(i) => i[0].target.classList.add("active-section")} 
				onHide={(i) => i[0].target.classList.remove("active-section")}
				>

					<section className={classnames} style={style}>
						<GridLines/>
						{ this.props.children }
					</section>

					<div className="clip-wrapper">
						<Link style={name == sections[0] || name == sections[1] ? null : {display: "none"}} to={name} spy={true} smooth={"easeOutCubic"} duration={1200} hashSpy={false} offset={0} onSetActive={onSetActive}>
							<ScrollArrow black={!black}/>
						</Link>

						<Sidebar 
						isBlack={!black}
						sections={sections} 
						activeSection={activeSection}
						/>

						<div className="logo"><h7 className="uppercase" style={logoStyle}>{activeSection}.</h7></div>

						<NavToggle black={!black}/>
					</div>
				</IntersectionVisible>
			</Element>
		);
	}
}