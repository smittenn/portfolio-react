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
			isOpen: false
		}
	}

	handleMouseEnter = () => {
		this.setState({
			isOpen: true,
		})
	}

	handleMouseLeave = () => {
		this.setState({
			isOpen: false,
		})			
	}


	render() {

		const { isOpen } = this.state;
		const { color, sections, activeSection } = this.props;

		const classnames = classNames({
			"sidebar-container": true,
			"sidebar-container--white": color == "WHITE",
			"sidebar-container--black": color == "BLACK",
			"sidebar-container--hover": isOpen,
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
			<div className={classnames} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
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
