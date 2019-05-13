import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import { openTakeover, closeTakeover } from "../actions/navTakeover"
import { hoverToggle, unhoverToggle } from "../actions/navToggle"
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
		// this.props.closeSecondaryPanel();		
	}

	closeNav = () => {
		this.props.closeTakeover();
		// this.props.closeSecondaryPanel();		
	}


	render() {
		const { secondaryPanelOpen, countIsIncreasing, countIsDecreasing } = this.state;
		const { black } = this.props;


		const classnames = classNames({
			"nav-toggle": true,
			"nav-toggle--white": !black,
			"nav-toggle--hovering": this.props.isToggleHovered,
			"nav-toggle--menuOpen": this.props.isTakeoverOpen,
			"nav-toggle--countIsIncreasing": countIsIncreasing,
			"nav-toggle--countIsDecreasing": countIsDecreasing,
		})


		return (
			<div className={classnames} onMouseEnter={this.props.hoverToggle} onMouseLeave={this.props.isTakeoverOpen ? null : this.props.unhoverToggle}
				onClick={this.props.isTakeoverOpen ? this.closeNav : this.openNav}>
				<h6 className="nav-toggle__abbreviation">{this.props.abbreviation}</h6>
				<div className="nav-toggle__hamburger">
					<div className="line"/>
					<div className="line"/>
					<div className="line"/>
				</div>
				<h6 className="nav-toggle__count">{splitLetter(pad(this.props.count, 2).toString())}</h6>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isTakeoverOpen: state.isTakeoverOpen,
	isToggleHovered: state.isToggleHovered,
})

const mapDispatchToProps = dispatch => ({
	openTakeover: () => dispatch(openTakeover()),
	closeTakeover: () => dispatch(closeTakeover()),
	hoverToggle: () => dispatch(hoverToggle()),
	unhoverToggle: () => dispatch(unhoverToggle()),
	openSecondaryPanel: () => dispatch(openSecondaryPanel()),
	closeSecondaryPanel: () => dispatch(closeSecondaryPanel()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavToggle)



