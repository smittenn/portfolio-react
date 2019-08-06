import React, {Component} from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

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

		const classnames = classNames({
			"clip-wrapper": true,
		})

		const textPath = `<textPath xlink:href="#curve">  Home  —  ${ name } —————————————  </textPath>`;

		return (
			<div className={classnames}>
				<Link style={{display: "none"}} to={name} spy={true} smooth={"easeOutCubic"} duration={1200} hashSpy={false} offset={0} onSetActive={onSetActive}/>

				{(name == sections[0]) ? (
					<ScrollArrow to={sections[1]} onSetActive={onSetActive}/>
				) : null}

				{(name == sections[1]) ? (
					<ScrollArrow to={name} onSetActive={onSetActive}/>
				) : null}

				{/*<div className="logo">
					<div className="logo__top">
						<NavLink to="/">
							<h3 className="mb0"><i className="iconcss icon-logo"/></h3>
						</NavLink>
					</div>
					<hr/>
					<div className="logo__bottom">
						{<h7 className="uppercase mb0">{name}</h7>}
					</div>
				</div>*/}

				{/*<svg viewBox="0 0 96 96" width="96px" height="96px">
					<defs>
						<path id="curve" d="M 84 48 A 12 12 0 1 1 12 48 A 12 12 0 1 1 84 48"/>
					</defs>
					<text width="96" dangerouslySetInnerHTML={{__html: textPath }}></text>
				</svg>*/}


				<NavToggle/>

				<Sidebar 
				sections={sections} 
				activeSection={activeSection}
				/>
			</div>
		);
	}
}