import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import Icon from "../components/Icon"
import GridLines from "../components/GridLines"

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

		return i;
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
			transform: 'translate3d(0, ' + (this.props.isMobile ? 72 : 112) * (indexHovered + 0) + 'px, 0)',
			opacity: (isTakeoverOpen ? 1 : 0)
		}

		const secondaryNavItems = navData.secondary.map((item, i) => 
			<li key={i}>
				<NavLink to={item.to} 
				onMouseOver={(e) => { this.setIndexHovered(e); this.props.setCursorHover() }}
				onMouseLeave={ this.props.setCursorUnhover } 
				onClick={this.setMenuClosed}>
					<h3 className={classNames({ 'hovered': i == indexHovered })}>{item.name}</h3>
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
					<div className="nav-takeover__overlay"/>
					<div className="nav-takeover__panel">
						<GridLines/>
						<div className="grid">
							<div className="grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item--col-10 grid__item--col-12-medium" style={{ display: 'flex' }}>
								<div className="nav-takeover__line-container" style={this.refs.secondary ? { height: this.refs.secondary.clientHeight + 'px' } : null}>
									<div style={ lineAnimation } className="nav-takeover__line"></div>
								</div>
								<div className="nav-takeover__item-container" ref="container" style={this.refs.secondary ? { height: this.refs.secondary.clientHeight + 'px' } : null}>
									<ul className="m0 nav-takeover__items--secondary" ref="secondary">
										{/*<li className="nav-takeover__arrow" onClick={() => { this.setCloseSecondaryPanel(); this.refs.container.scroll(0,0); }} onMouseOver={this.props.setCursorHover} onMouseLeave={this.props.setCursorUnhover}>
											<h3><Icon icon='arrow' size={60} color={brandBlack}/></h3>
										</li>*/}
										{ secondaryNavItems }
									</ul>
									<ul className="m0 nav-takeover__items--primary">
										{ primaryNavItems }
									</ul>
								</div>
							</div>
						</div>
						<div className="nav-takeover__controls">
							<div style={{ transform: 'scaleX(-1)' }} onClick={() => { this.setCloseSecondaryPanel(); this.props.setCursorUnhover(); }} onMouseOver={this.props.isSecondaryPanelOpen ? this.props.setCursorHover : null} onMouseLeave={this.props.setCursorUnhover}>
								<Icon icon='arrow' size={60} color={brandBlack} disabled={this.props.isPrimaryPanelOpen}/>
							</div>
							<div onClick={() => { this.setOpenSecondaryPanel(); this.props.setCursorUnhover();}} onMouseOver={this.props.isPrimaryPanelOpen ? this.props.setCursorHover : null} onMouseLeave={this.props.setCursorUnhover}>
								<Icon icon='arrow' size={60} color={brandBlack} disabled={this.props.isSecondaryPanelOpen}/>
							</div>
						</div>
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