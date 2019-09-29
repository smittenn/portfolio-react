import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import Icon from "../components/Icon"

import { openTakeover, closeTakeover } from "../actions/navTakeover"
import { openPrimaryPanel, closePrimaryPanel } from "../actions/primaryPanel"
import { openSecondaryPanel, closeSecondaryPanel } from "../actions/secondaryPanel"
import { hoverToggle, unhoverToggle } from "../actions/navToggle"
import { setCursorHover, setCursorUnhover } from "../actions/cursor"

import navData from '../data/nav'

import splitLetter from '../services/splitLetter'
import palette from '../services/palette'

class NavTakeover extends Component {

	constructor(props) {
		super(props);

		this.state = {
			indexHovered: null,
		}
	}

	// componentDidMount() {
	// 	navData.primary.forEach((item, i) => {
	// 		if (this.props.abbreviation == item.abbreviation) { this.setState({ indexHovered : i }) }
	// 	});
	// }

	setMenuClosed = () => {
		this.props.closeTakeover();
		this.props.setCursorUnhover();
		// this.props.closeSecondaryPanel();

		setTimeout(() => { this.props.unhoverToggle(); }, 1200)
	}

	setOpenSecondaryPanel = () => {
		this.props.openSecondaryPanel();
		this.props.closePrimaryPanel();
	}

	setCloseSecondaryPanel = () => {
		this.props.openPrimaryPanel();
		this.props.closeSecondaryPanel();
	}
	
	setIndexHovered = (event) => {
		const index = this.getChildIndex(event.target.parentElement);

		this.setState({
			indexHovered: index,
		});
	}

	getChildIndex = (elem) => {
		let i = 0;

		while ((elem = elem.previousSibling) != null) { i++ }

		return (this.props.isSecondaryPanelOpen ? i - 1 : i);
	}


	render() {
		let { indexHovered } = this.state;
		const { abbreviation, count, isTakeoverOpen, isPrimaryPanelOpen, isSecondaryPanelOpen } = this.props;

		const brandBlack = palette("brand-black");

		if ( indexHovered == null) {
			const data = isPrimaryPanelOpen ? navData.primary : navData.secondary;

			data.forEach((item, i) => {
				if (this.props.abbreviation == item.abbreviation) { indexHovered = i }
			});
		}

		const classnames = classNames({
			"nav-takeover": true,
			"nav-takeover--menuOpen": isTakeoverOpen,
			"nav-takeover--primaryPanelOpen": isPrimaryPanelOpen,
			"nav-takeover--secondaryPanelOpen": isSecondaryPanelOpen,
		})

		const lineAnimation = {
			transform: 'translate3d(0, ' + (this.props.isMobile ? 72 : 100) * (indexHovered + 0) + 'px, 0)',
			opacity: (isTakeoverOpen ? 1 : 0)
		}

		const secondaryNavItems = navData.secondary.map((item, i) => 
			<li key={i}>
				<NavLink to={item.to} 
				onMouseOver={(e) => { this.setIndexHovered(e); this.props.setCursorHover() }}
				onMouseLeave={ this.props.setCursorUnhover } 
				onClick={this.setMenuClosed}>
					<h4 className={classNames({ 'hovered': i == indexHovered })}>{item.name}</h4>
				</NavLink>
			</li>
		)

		const primaryNavItems = navData.primary.map((item, i) => 
			(i != 1) ? (
				<li key={i}>
					<NavLink to={item.to} 
					onMouseOver={(e) => { this.setIndexHovered(e); this.props.setCursorHover() }} 
					onMouseLeave={ this.props.setCursorUnhover } 
					onClick={this.setMenuClosed}>
						<h3 className={classNames({ 'active': abbreviation == item.abbreviation, 'hovered': i == indexHovered, 'mb0': true })}>{item.name}</h3>
					</NavLink>
				</li>
			) : (
				<li key={i} 
				onMouseOver={(e) => { this.setIndexHovered(e); this.props.setCursorHover() }} 
				onMouseLeave={ this.props.setCursorUnhover } 
				onClick={this.props.isSecondaryPanelOpen ? this.setCloseSecondaryPanel : this.setOpenSecondaryPanel}>
					<h3 className={classNames({ 'active': abbreviation.match(/[0-9]/g), 'hovered': i == indexHovered, 'mb0': true })}>{item.name}</h3>
				</li>
			)
		)

		return (
			<nav className={classnames}>
				<div className="nav-takeover__main">
					<div className="nav-takeover__overlay" onClick={this.setMenuClosed}/>
					<div className="nav-takeover__panel">
						<div className="nav-takeover__item-container" ref="container" style={this.refs.secondary ? { height: this.refs.secondary.clientHeight + 'px' } : null}>
							<ul className="nav-takeover__items--secondary" ref="secondary">
								<li className="nav-takeover__arrow" onClick={() => { this.setCloseSecondaryPanel(); this.refs.container.scroll(0,0); }} onMouseOver={this.props.setCursorHover} onMouseLeave={this.props.setCursorUnhover}>
									<h3><Icon icon='arrow' size={60} color={brandBlack}/></h3>
								</li>
								{ secondaryNavItems }
							</ul>
							<ul className="nav-takeover__items--primary">
								{ primaryNavItems }
							</ul>
						</div>
						<div className="nav-takeover__line-container" style={this.refs.secondary ? { height: this.refs.secondary.clientHeight + 'px' } : null}>
							<div style={ lineAnimation } className="nav-takeover__line"></div>
						</div>
						<div className="nav-takeover__spacer"/>
					</div>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isTakeoverOpen: state.isTakeoverOpen,
	isPrimaryPanelOpen: state.isPrimaryPanelOpen,
	isSecondaryPanelOpen: state.isSecondaryPanelOpen,
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	openTakeover: () => dispatch(openTakeover()),
	closeTakeover: () => dispatch(closeTakeover()),
	openPrimaryPanel: () => dispatch(openPrimaryPanel()),
	closePrimaryPanel: () => dispatch(closePrimaryPanel()),
	openSecondaryPanel: () => dispatch(openSecondaryPanel()),
	closeSecondaryPanel: () => dispatch(closeSecondaryPanel()),
	hoverToggle: () => dispatch(hoverToggle()),
	unhoverToggle: () => dispatch(unhoverToggle()),
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})


export default connect(mapStateToProps, mapDispatchToProps)(NavTakeover)



