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
			isOpen: false,
			isMobile: window.innerWidth <= 800,
		}
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
		window.addEventListener('resize', this.detectMobile);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
		window.removeEventListener('resize', this.detectMobile);
	}

	detectMobile = (event) => {
		this.setState({
			isMobile: window.innerWidth <= 800,
		})
	}

	handleClickOutside = (event) => {
		if (!this.refs.sidebar.contains(event.target)) {
			this.setState({
				isOpen: false,
			});
		}
	}


	openSidebar = () => {
		this.setState({
			isOpen: true,
		})
	}

	closeSidebar = () => {
		this.setState({
			isOpen: false,
		})			
	}


	render() {

		const { isOpen, isMobile } = this.state;
		const { color, sections, activeSection, isBlack, isWhite } = this.props;

		const classnames = classNames({
			"sidebar-container": true,
			"sidebar-container--white": color == "WHITE",
			"sidebar-container--black": color == "BLACK",
			"sidebar-container--open": isOpen,
		})

		const sidebarItems = sections.map((section, i) => 
			<li key={i} className="sidebar-item">
				<Link to={ isOpen ? section : "" } smooth={"easeOutCubic"} duration={1200} className={classNames({ "active": sections[i] == activeSection })}>
					<p className="sidebar-number">{pad(i + 1, 2)}.</p>
					<div className="sidebar-dash"></div>
					<p className="sidebar-label">{section}</p>
					<div className="sidebar-border"></div>
				</Link>
			</li>
		)
		
		return (
			<div className={classnames} onMouseEnter={isMobile ? null : this.openSidebar} onClick={this.openSidebar}>
				<ul className="sidebar" onMouseLeave={isMobile ? null : this.closeSidebar} ref="sidebar">
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
