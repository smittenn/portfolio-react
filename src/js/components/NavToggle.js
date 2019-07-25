import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import { openTakeover, closeTakeover } from "../actions/navTakeover"
import { hoverToggle, unhoverToggle } from "../actions/navToggle"
import { setCursorHover, setCursorUnhover } from "../actions/cursor"
import { openPrimaryPanel, closePrimaryPanel } from "../actions/primaryPanel"
import { openSecondaryPanel, closeSecondaryPanel } from "../actions/secondaryPanel"

import splitLetter from '../services/splitLetter'
import pad from '../services/pad'

class NavToggle extends Component {

	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false,
			secondaryPanelOpen: false,
			countIsIncreasing: false,
			countIsDecreasing: false,
		}
	}

	openNav = () => {
		this.props.openTakeover();
		this.props.setCursorUnhover();
		// this.props.closeSecondaryPanel();		
	}

	closeNav = () => {
		this.props.closeTakeover();
		// this.props.closeSecondaryPanel();

		(this.props.isMobile ? setTimeout(() => { this.props.unhoverToggle(); }, 1200) : null)		
	}

	setCloseSecondaryPanel = () => {
		this.props.openPrimaryPanel();
		this.props.closeSecondaryPanel();
	}


	// componentDidUpdate(prevProps) {
	// 	if (prevProps.count != this.props.count) { 
	// 		this.setState({
	// 			countIsIncreasing: (prevProps.count < this.props.count),
	// 			countIsDecreasing: (prevProps.count > this.props.count),
	// 		})
	// 		setTimeout(() => {this.setState({ countIsIncreasing: false, countIsDecreasing: false })}, 600);
	// 	}
	// }


	render() {
		const { secondaryPanelOpen, countIsIncreasing, countIsDecreasing } = this.state;


		const classnames = classNames({
			"nav-toggle": true,
			"nav-toggle--hovering": this.props.isToggleHovered,
			"nav-toggle--menuOpen": this.props.isTakeoverOpen,
			"nav-toggle--secondaryPanelOpen": this.props.isSecondaryPanelOpen,
			"nav-toggle--countIsIncreasing": countIsIncreasing,
			"nav-toggle--countIsDecreasing": countIsDecreasing,
		})


		return (
			<div className={classnames} 
			onMouseEnter={this.props.isTakeoverOpen ? null : (() => { this.props.hoverToggle(); this.props.setCursorHover();}) } 
			onMouseLeave={this.props.isTakeoverOpen ? this.props.setCursorUnhover : (() => { this.props.unhoverToggle(); this.props.setCursorUnhover(); })}
			onClick={this.props.isTakeoverOpen ? null : this.openNav}>
				<h6 className="nav-toggle__abbreviation">{this.props.abbreviation}</h6>
				<div className="nav-toggle__hamburger">
					<div className="nav-toggle__line"/>
					<div className="nav-toggle__line"/>
					<div className="nav-toggle__line"/>
				</div>
				<h6 className="nav-toggle__count">{splitLetter(pad(this.props.count, 2).toString())}</h6>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isMobile: state.isMobile,
	isTakeoverOpen: state.isTakeoverOpen,
	isToggleHovered: state.isToggleHovered,
	isSecondaryPanelOpen: state.isSecondaryPanelOpen,
})

const mapDispatchToProps = dispatch => ({
	openTakeover: () => dispatch(openTakeover()),
	closeTakeover: () => dispatch(closeTakeover()),
	hoverToggle: () => dispatch(hoverToggle()),
	unhoverToggle: () => dispatch(unhoverToggle()),
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
	openPrimaryPanel: () => dispatch(openPrimaryPanel()),
	openSecondaryPanel: () => dispatch(openSecondaryPanel()),
	closeSecondaryPanel: () => dispatch(closeSecondaryPanel()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavToggle)



