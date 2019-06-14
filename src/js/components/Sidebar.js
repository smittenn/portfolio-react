import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import classNames from 'classnames'
import { connect } from 'react-redux'

import { openSidebar, closeSidebar } from '../actions/sidebar'
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

		const { isBlack, sections, activeSection } = this.props;

		const classnames = classNames({
			"sidebar": true,
			"sidebar--white": !isBlack,
			"sidebar--black": isBlack,
			"sidebar--open": this.props.isSidebarOpen,
		})

		const sidebarItems = sections.map((section, i) => 
			<li key={i} className="sidebar__item" >
				<Link to={ this.props.isSidebarOpen ? section : "" } smooth={"easeOutQuint"} duration={1200} className={classNames({ "active": sections[i] == activeSection })} onClick={this.props.isMobile ? this.props.closeSidebar : null}>
					{ i == 0 ? <div className="sidebar__border sidebar__border--top"/> : null }
					<h7 className="sidebar__number uppercase">{pad(i + 1, 2)}.</h7>
					<div className="sidebar__dash"></div>
					<h7 className="sidebar__label uppercase">{section}</h7>
					<div className="sidebar__border"/>
				</Link>
			</li>
		)
		
		return (
			<div className={classnames} ref="sidebar">
				<ul className="sidebar__inner" onClick={this.props.isSidebarOpen ? null : this.props.openSidebar} onMouseEnter={this.props.isMobile ? null : this.props.openSidebar} onMouseLeave={this.props.isMobile ? null : this.props.closeSidebar}>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
