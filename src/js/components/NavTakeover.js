import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import Icon from "../components/Icon"
import GridLines from "../components/GridLines"
import TextLink from "../components/TextLink"

import { openTakeover, closeTakeover } from "../actions/navTakeover"
import { openPrimaryPanel, closePrimaryPanel } from "../actions/primaryPanel"
import { openSecondaryPanel, closeSecondaryPanel } from "../actions/secondaryPanel"
import { hoverToggle, unhoverToggle } from "../actions/navToggle"
import { setCursorHover, setCursorUnhover } from "../actions/cursor"
import { setPanel } from "../actions/panel"

import navData from '../data/nav'
import navData2 from '../data/nav2'

import splitLetter from '../services/splitLetter'
import palette from '../services/palette'
import toKebabCase from '../services/toKebabCase'
import toCamelCase from '../services/toCamelCase'

class NavTakeover extends Component {

	constructor(props) {
		super(props);

		this.state = {
			indexHovered: null,
			menus: [],
			activeMenu: null
		}
	}

	componentDidMount() {
		this.formatData(navData2);

		this.state.menus.forEach((menu, i) => {
			if (toCamelCase(menu.name) == this.props.openNavPanel) {
				this.setState({
					activeMenu: menu
				})
			}
		})

		// console.log(this.state.menus[this.props.openNavPanel]);

		// const data = isPrimaryPanelOpen ? navData.primary : navData.secondary;

		// data.forEach((item, i) => {
		// 	if (this.props.abbreviation == item.abbreviation) { 
		// 		this.setState({
		// 			indexHovered: i
		// 		});
		// 	}
		// });
	}

	setMenuClosed = () => {
		this.props.closeTakeover();
		this.props.setCursorUnhover();
		// this.props.closeSecondaryPanel();

		setTimeout(() => { this.props.unhoverToggle(); }, 1200)
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

	formatData = (data) => {
		this.setState(prevState => ({
			menus: prevState.menus.concat(data)
		}));
		/*if (toCamelCase(data.name) == this.props.openNavPanel) {
			this.setState({
				activeMenu: data
			})
		}*/
		data.items.forEach(child => {
			child.parent = data;
			if (child.items != null) {
				this.formatData(child);
			} 
		})
	}

	createPanels = (menus) => (
		menus.map((menu, i) => (
			<ul key={i} className={classNames({
				"m0": true,
				"nav-takeover__items": true,
				"nav-takeover__items--active": toCamelCase(menu.name) == this.props.openNavPanel })}>
				{ menu.items.map((item, j) => (
					item.items != null ? (
						<li key={j}>
							<a onMouseOver={(e) => { this.setIndexHovered(e); this.props.setCursorHover() }} 
							onMouseLeave={ this.props.setCursorUnhover } 
							onClick={ () => this.props.setPanel(item.name) }>
								<h3 className={classNames({ 'active': this.props.abbreviation.match(/[0-9]/g), 'hovered': j == this.state.indexHovered, 'mb0': true })}>{item.name}</h3>
							</a>
						</li>	
					) : (
						<li key={j}>
							{ this.handleExternalLinks(item, j) }
						</li>
					)
				)) }
			</ul>
		))
	)

	handleExternalLinks = (item, idx) => (

		(/^\/\//).test(item.to) ? (
			<a href={item.to} target="_blank"
			onMouseOver={(e) => { this.setIndexHovered(e); this.props.setCursorHover() }} 
			onMouseLeave={ this.props.setCursorUnhover }>
				<h3 className={classNames({ 'active': this.props.abbreviation == item.abbreviation, 'hovered': idx == this.state.indexHovered, 'mb0': true })}>{item.name}</h3>
			</a>
		) : (
			<NavLink to={item.to} 
			onMouseOver={(e) => { this.setIndexHovered(e); this.props.setCursorHover() }} 
			onMouseLeave={ this.props.setCursorUnhover } 
			onClick={this.setMenuClosed}>
				<h3 className={classNames({ 'active': this.props.abbreviation == item.abbreviation, 'hovered': idx == this.state.indexHovered, 'mb0': true })}>{item.name}</h3>
			</NavLink>
		)
	)

	createBreadcrumbs = (menus) => (
		menus.map((menu, i) => (
			(toCamelCase(menu.name) == this.props.openNavPanel) ? (
				<h6 className="nav-takeover__breadcrumbs uppercase" key={i}>
					{ menu.name }
					{ this.createBreadcrumbItem(menu) }
				</h6>
			) : null
		))
	)

	createBreadcrumbItem = (menu) => (
		menu.hasOwnProperty('parent') ? (
			<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
				<Icon icon='caret' size={16} color={palette("brand-black")}/>
				<div onClick={() => { this.props.setPanel(menu.parent.name); this.props.setCursorUnhover(); }}>
					<TextLink hideUnderline>{menu.parent.name}</TextLink>
				</div>
				{ this.createBreadcrumbItem(menu.parent) }
			</div>
		) : null
	)

	createArrowNavigation = (menus) => (
		menus.map((menu, i) => (
			(toCamelCase(menu.name) == this.props.openNavPanel) ? (
				<div className="nav-takeover__controls" key={i}>
					<div style={{ transform: 'scaleX(-1)' }} 
					onClick={i != 0 ? () => { this.props.setPanel(menu.parent.name); this.props.setCursorUnhover(); } : null} 
					onMouseOver={i != 0 ? this.props.setCursorHover : null} 
					onMouseLeave={this.props.setCursorUnhover} 
					className={classNames({ 'disabled': i == 0 })}>
						<Icon icon='arrow' size={60} color={palette("brand-black")}/>
					</div>
					<div onClick={menu.items[this.state.indexHovered] && menu.items[this.state.indexHovered].hasOwnProperty('items') ? () => { this.props.setPanel(menu.items[this.state.indexHovered].name); this.props.setCursorUnhover(); } : null} 
					onMouseOver={menu.items[this.state.indexHovered] && menu.items[this.state.indexHovered].hasOwnProperty('items') ? this.props.setCursorHover : null} 
					onMouseLeave={this.props.setCursorUnhover} 
					className={classNames({ 'disabled': !(menu.items[this.state.indexHovered] && menu.items[this.state.indexHovered].hasOwnProperty('items'))})}>
						<Icon icon='arrow' size={60} color={palette("brand-black")}/>
					</div>
				</div>
			) : null
		))
	)

	render() {				
		let { indexHovered } = this.state;
		const { abbreviation, count, isTakeoverOpen, isPrimaryPanelOpen, isSecondaryPanelOpen } = this.props;

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


		console.log(this.state.activeMenu);


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
									{ this.createBreadcrumbs(this.state.menus) }
									{ this.createPanels(this.state.menus) }
								</div>
							</div>
						</div>
						{ this.createArrowNavigation(this.state.menus) }
						{/*<div className="nav-takeover__controls">
							<div style={{ transform: 'scaleX(-1)' }} onClick={() => { this.setCloseSecondaryPanel(); this.props.setCursorUnhover(); }} onMouseOver={this.props.isSecondaryPanelOpen ? this.props.setCursorHover : null} onMouseLeave={this.props.setCursorUnhover}>
								<Icon icon='arrow' size={60} color={brandBlack} disabled={this.props.isPrimaryPanelOpen}/>
							</div>
							<div onClick={() => { this.setOpenSecondaryPanel(); this.props.setCursorUnhover();}} onMouseOver={this.props.isPrimaryPanelOpen ? this.props.setCursorHover : null} onMouseLeave={this.props.setCursorUnhover}>
								<Icon icon='arrow' size={60} color={brandBlack} disabled={this.props.isSecondaryPanelOpen}/>
							</div>
						</div>*/}
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
	openNavPanel: state.openNavPanel,
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
	setPanel: (n) => dispatch(setPanel(n)),
})


export default connect(mapStateToProps, mapDispatchToProps)(NavTakeover)