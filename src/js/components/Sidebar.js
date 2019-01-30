import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import classNames from 'classnames'
import { connect } from 'react-redux'

import pad from '../services/pad'

class Sidebar extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {

		// const { activeSection, pageSections } = this.state;
		const { color, sections, activeSection } = this.props;

		const classnames = classNames({
			"sidebar-container": true,
			"white": color == "WHITE",
			"black": color == "BLACK",
		})

		const sidebarItems = sections.map((section, i) => 
			<li key={i} className="sidebar-item">
				<Link to={section} smooth={true} className={classNames({ "active": sections[i] == activeSection })}>
					<p className="sidebar-number">{pad(i + 1, 2)}.</p>
					<div className="sidebar-dash"></div>
					<p className="sidebar-label">{section}</p>
					<div className="sidebar-border"></div>
				</Link>
			</li>
		)
		
		return (
			<div className={classnames}>
				<ul className="sidebar">
					{sidebarItems}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	color: state.color,
})

export default connect(mapStateToProps)(Sidebar)
