import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import classNames from 'classnames'
import { connect } from 'react-redux'

import { openSidebar, closeSidebar } from '../actions/sidebar'

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


	// openSidebar = () => {
	// 	this.setState({
	// 		isOpen: true,
	// 	})
	// 	console.log('hellop');
	// }

	// closeSidebar = () => {
	// 	this.setState({
	// 		isOpen: false,
	// 	})			
	// }


	render() {

		const { isMobile } = this.state;
		const { isBlack, sections, activeSection } = this.props;

		const classnames = classNames({
			"sidebar-container": true,
			"sidebar-container--white": !isBlack,
			"sidebar-container--black": isBlack,
			"sidebar-container--open": this.props.isSidebarOpen,
		})

		const sidebarItems = sections.map((section, i) => 
			<li key={i} className="sidebar-item">
				<Link to={ this.props.isSidebarOpen ? section : "" } smooth={"easeOutCubic"} duration={1200} className={classNames({ "active": sections[i] == activeSection })}>
					{ i == 0 ? <div className="sidebar-border sidebar-border__top"/> : null }
					<h5 className="sidebar-number">{pad(i + 1, 2)}.</h5>
					<div className="sidebar-dash"></div>
					<h5 className="sidebar-label">{section}</h5>
					<div className="sidebar-border"/>
				</Link>
			</li>
		)
		
		return (
			<div className={classnames}>
				<ul className="sidebar" onMouseEnter={isMobile ? null : this.props.openSidebar} onClick={this.props.openSidebar} onMouseLeave={isMobile ? null : this.props.closeSidebar} ref="sidebar">
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
})

const mapDispatchToProps = dispatch => ({
	openSidebar: () => dispatch(openSidebar()),
	closeSidebar: () => dispatch(closeSidebar()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
