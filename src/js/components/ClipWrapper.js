import React, {Component} from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import IntersectionVisible from "react-intersection-visible"

import NavToggle from "./NavToggle"
import Sidebar from "./Sidebar"
import ScrollArrow from "./ScrollArrow"
import GridLines from "../components/GridLines"
import TextLink from "../components/TextLink"

import palette from "../services/palette"

export default class ClipWrapper extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {

		const { name, onSetActive, black, sections, activeSection } = this.props;

		const logoStyle = { 
			color: black ? palette('brand-white') : palette('brand-black'),
		}

		const classnames = classNames({
			"clip-wrapper": true,
		})

		return (
			<div className={classnames}>
				<Link style={{display: "none"}} to={name} spy={true} smooth={"easeOutCubic"} duration={1200} hashSpy={false} offset={0} onSetActive={onSetActive}/>

				{(name == sections[0]) ? (
					<ScrollArrow black={!black} to={sections[1]} onSetActive={onSetActive}/>
				) : null}

				{(name == sections[1]) ? (
					<ScrollArrow black={!black} to={name} onSetActive={onSetActive}/>
				) : null}

				<Sidebar 
				isBlack={!black}
				sections={sections} 
				activeSection={activeSection}
				/>

				<div className="logo logo--top">
					<TextLink isBlack={!black} hideUnderline>
						<NavLink to="/">
							<h7 className="uppercase" style={logoStyle}>Home</h7>
						</NavLink>
					</TextLink>
				</div>
				
				<div className="logo logo--bottom"><h7 className="uppercase" style={logoStyle}>{activeSection}</h7></div>

				<NavToggle black={!black}/>
			</div>
		);
	}
}