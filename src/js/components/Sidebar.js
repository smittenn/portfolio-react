import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import classNames from 'classnames'
import { connect } from 'react-redux'

import { openSidebar, closeSidebar } from '../actions/sidebar'
import { setCursorHover, setCursorUnhover } from "../actions/cursor"

import createNewId from '../services/createNewId'

import pad from '../services/pad'

class Sidebar extends Component {

	constructor(props) {
		super(props);
	}


	handleClickOutside = (event) => {
		if (!this.refs.sidebar.contains(event.target)) {
			// console.log(this.refs);
			// this.props.closeSidebar();
		}
	}

	render() {

		const { sections, activeSection } = this.props;

		const classnames = classNames({
			"sidebar": true,
			"sidebar--open": this.props.isSidebarOpen,
		})

		const sidebarItems = sections.map((section, i) => 
			<li key={i} className="sidebar__item">
				<Link to={ this.props.isSidebarOpen ? section : "" } smooth={"easeOutQuint"} duration={1200} className={classNames({ "active": sections[i] == activeSection })} onClick={this.props.isMobile ? this.props.closeSidebar : this.props.setCursorUnhover} onMouseEnter={ this.props.setCursorHover }  onMouseLeave={ this.props.setCursorUnhover } >
					{ i == 0 ? <div className="sidebar__border sidebar__border--top"/> : null }
					<h6 className="sidebar__number uppercase">{pad(i + 1, 2)}.</h6>
					<div className="sidebar__dash"></div>
					<h6 className="sidebar__label uppercase">{section}<span>·</span></h6>
					<div className="sidebar__border"/>
				</Link>
			</li>
		)
		
		return (
			<div className={classnames} ref="sidebar">
				<ul className="m0 sidebar__inner" onClick={this.props.isSidebarOpen ? null : this.props.openSidebar} onMouseEnter={this.props.isMobile ? null : this.props.openSidebar} onMouseLeave={this.props.isMobile ? null : this.props.closeSidebar}>
					{sidebarItems}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isSidebarOpen: state.isSidebarOpen,
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	openSidebar: () => dispatch(openSidebar()),
	closeSidebar: () => dispatch(closeSidebar()),
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
