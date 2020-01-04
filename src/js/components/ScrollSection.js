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
import pad from "../services/pad"
import splitLetter from "../services/splitLetter"

export default class ScrollSection extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {

		const { name, onSetActive, black, style, sections, activeSection, fullHeight, disableSectionNumber } = this.props;

		const classnames = classNames({
			"scrolling-section": true,
			"scrolling-section--black": this.props.black,
			"scrolling-section--grey": this.props.grey
		})

		fullHeight ? Object.assign(style, { height: 'calc(100vh + 1px', display: 'flex', justifyContent: 'center' }) : null

		
		return (
			name ? (
			<Element name={name} className={classnames}>
				<IntersectionVisible 
				onShow={(i) => i[0].target.classList.add("active-section")} 
				onHide={(i) => i[0].target.classList.remove("active-section")}>

					<section style={style}>
						<GridLines/>
						{ !disableSectionNumber ? (
							<div className="grid">
								<div className="grid__item--col-1 grid__item--hide-bp-medium"/>
								<div className="grid__item--col-10 grid__item--col-12-medium">
									<p className="mb0">{splitLetter(pad((sections.indexOf(name) + 1), 2) + ".")}</p>
								</div>
							</div>
						) : null }
						{ this.props.children }
					</section>

					<div className="clip-wrapper">
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

						<NavToggle sections={sections}/>
					</div>
				</IntersectionVisible>
			</Element>
			) : (
			<div className={classnames}>
				<IntersectionVisible 
				onShow={(i) => i[0].target.classList.add("active-section")} 
				onHide={(i) => i[0].target.classList.remove("active-section")}>
					
					<section style={style}>
						<GridLines/>
						{ this.props.children }
					</section>

					<div className="clip-wrapper">
						<Sidebar 
						sections={sections} 
						activeSection={activeSection}/>

						<NavToggle sections={sections}/>
					</div>
				</IntersectionVisible>
			</div>
			)
		);
	}
}