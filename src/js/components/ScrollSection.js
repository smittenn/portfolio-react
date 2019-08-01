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
import GridLines from "../components/GridLines"
import ClipWrapper from "../components/ClipWrapper"

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
			<Element name={name} className={classnames}>
				<IntersectionVisible 
				onShow={(i) => i[0].target.classList.add("active-section")} 
				onHide={(i) => i[0].target.classList.remove("active-section")}
				>

					<section style={style}>
						<GridLines/>
						{ this.props.children }
					</section>

					<ClipWrapper name={name} onSetActive={onSetActive} black={black} sections={sections} activeSection={activeSection} />

				</IntersectionVisible>
			</Element>
		);
	}
}