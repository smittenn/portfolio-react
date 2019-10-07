import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import IntersectionVisible  from "react-intersection-visible"
import IntersectionObserver  from "intersection-observer"

import NavToggle from "./NavToggle"
import Sidebar from "./Sidebar"
import ScrollArrow from "./ScrollArrow"
import GridLines from "./GridLines"
import TextLink from "./TextLink"
import Icon from "./Icon"

import palette from "../services/palette"

export default class ScrollSection extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {

		const { name, onSetActive, black, style, sections, activeSection, fullHeight } = this.props;

		const classnames = classNames({
			"scrolling-section": true,
			"scrolling-section--black": this.props.black,
			"scrolling-section--grey": this.props.grey
		})

		fullHeight ? Object.assign(style, { height: 'calc(100vh + 1px', display: 'flex', justifyContent: 'center' }) : null

		const logoStyle = { 
			color: black ? palette('brand-white') : palette('brand-black'),
		}
		
		return (
			name ? (
			<Element name={name} className={classnames}>
				<IntersectionVisible 
				onShow={(i) => i[0].target.classList.add("active-section")} 
				onHide={(i) => i[0].target.classList.remove("active-section")}
				>

					<section style={style}>
						{<GridLines/>}
						{ this.props.children }
					</section>

					{/*<ClipWrapper name={name} onSetActive={onSetActive} black={black} sections={sections} activeSection={activeSection} />*/}
					<div className="clip-wrapper">
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
							key={3}/>
						] : null }

						<NavToggle/>
					</div>
				</IntersectionVisible>
			</Element>
			) : (
			<div className={classnames}>
				<IntersectionVisible 
				onShow={(i) => i[0].target.classList.add("active-section")} 
				onHide={(i) => i[0].target.classList.remove("active-section")}>
					
					<section style={style}>
						{<GridLines/>}
						{ this.props.children }
					</section>

					<div className="clip-wrapper">
						<Sidebar 
						sections={sections} 
						activeSection={activeSection}
						key={3}/>
					</div>
				</IntersectionVisible>
			</div>
			)
		);
	}
}