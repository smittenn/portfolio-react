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
import Icon from "../components/Icon"

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
				{ name == "resume" ? <div className="left-rail">
					<TextLink hideUnderline><a href="assets/img/resume/ericsmith-resume.png" target="_blank"><h3 className="mb0"><Icon icon='download' size={48} color={palette('brand-black')}/></h3></a></TextLink>
				</div> : null}


				{ sections.length > 1 ? [
					<Link style={{display: 'none'}} to={name} spy={true} smooth={"easeOutCubic"} duration={1200} hashSpy={false} offset={0} onSetActive={onSetActive} key={0}/>,
					,
					((name == sections[0]) ? (
						<ScrollArrow to={sections[1]} onSetActive={onSetActive} key={1}/>
					) : null)
					,
					((name == sections[1]) ? (
						<ScrollArrow to={name} onSetActive={onSetActive} key={2}/>
					) : null)
					,
					<Sidebar 
					sections={sections} 
					activeSection={activeSection}
					key={3}
					/>
				] : null }

				{/*<svg viewBox="0 0 96 96" width="96px" height="96px">
					<defs>
						<path id="curve" d="M 84 48 A 12 12 0 1 1 12 48 A 12 12 0 1 1 84 48"/>
					</defs>
					<text width="96" dangerouslySetInnerHTML={{__html: textPath }}></text>
				</svg>*/}


				<NavToggle/>
			</div>
		);
	}
}