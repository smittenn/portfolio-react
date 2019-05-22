import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import { openTakeover, closeTakeover } from "../actions/navTakeover"
import { openPrimaryPanel, closePrimaryPanel } from "../actions/primaryPanel"
import { openSecondaryPanel, closeSecondaryPanel } from "../actions/secondaryPanel"
import { hoverToggle, unhoverToggle } from "../actions/navToggle"
import { setCursorHover, setCursorUnhover } from "../actions/cursor"

import splitLetter from '../services/splitLetter'

class Nav extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isToggleHovered: false,
			indexHovered: this.getActiveIndex(),
			isMobile: window.innerWidth <= 800,
		}
	}

	componentDidMount() {
		// document.addEventListener('mousedown', this.handleClickOutside);
		window.addEventListener('resize', this.detectMobile);
	}

	componentWillUnmount() {
		// document.removeEventListener('mousedown', this.handleClickOutside);
		window.removeEventListener('resize', this.detectMobile);
	}

	detectMobile = (event) => {
		this.setState({
			isMobile: window.innerWidth <= 800,
		})
	}

	// handleClickOutside = (event) => {
	// 	if (this.refs.notPanels.contains(event.target)) {
	// 		this.props.closeTakeover();
	// 		this.props.closeSecondaryPanel();
	// 	}
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

		while ((elem = elem.previousSibling) != null) { i++; }

		return i;
	}

	getActiveIndex = () => {
		switch (this.props.abbreviation) {
			case 'H':
				return 0;
			case 'P1':
				return 1;
			default:
				return 1;
		}
	}


	render() {
		const { isMobile, indexHovered } = this.state;
		const { abbreviation, count } = this.props;

		const classnames = classNames({
			"nav-takeover": true,
			"nav-takeover--menuOpen": this.props.isTakeoverOpen,
			"nav-takeover--primaryPanelOpen": this.props.isPrimaryPanelOpen,
			"nav-takeover--secondaryPanelOpen": this.props.isSecondaryPanelOpen,
		})

		const lineAnimation = {
			transform: 'translate3d(-1px, ' + (isMobile ? 96 : 108) * (indexHovered + 0) + 'px, 0)',
			opacity: (this.props.isTakeoverOpen ? 1 : 0)
		}

		const navData = {
			primary : [
				{
					name: "Home",
					to: "/",
					abbreviation: "H",
				},
				{
					name: "Projects",
				},
				{
					name: "Process",
					to: "/process",
					abbreviation: "P",
				},
				{
					name: "About Me",
					to: "about-me",
					abbreviation: "A",
				},
				{
					name: "Resume",
					to: "/resume",
					abbreviation: "R",
				},
			],
			secondary: [
				{ 
					name: "American Made",
					to: "/american-made",
				},
				{ 
					name: "V.ai Player",
					to: "/vai",
				},
				{ 
					name: "Translator",
					to: "/translator",
				},
				{ 
					name: "JJ Home Intranet",
					to: "/jnj-home",
				},
				{ 
					name: "JJ Medical Devices",
					to: "/jnj-mdc",
				},
				{ 
					name: "Micro App Interactions",
					to: "/micro-app-interactions",
				},
				{ 
					name: "Micro App Templates",
					to: "/micro-app-templates",
				},
				{ 
					name: "Perforce",
					to: "/perforce",
				},
				{ 
					name: "Cisco Mate",
					to: "/cisco",
				},
				{ 
					name: "Protohack",
					to: "/protohack",
				},
			]
		}

		const secondaryNavItems = navData.secondary.map((item, i) => 
			<li key={i}>
				<NavLink to={item.to} onMouseOver={(e) => { this.setIndexHovered(e); this.props.setCursorHover() }}
				 onClick={this.setMenuClosed}>
					<h4 className={classNames({ 'hover': i == indexHovered })}>{item.name}</h4>
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
						<h3 className={classNames({ 'active': abbreviation == item.abbreviation, 'hover': i == indexHovered })}>{item.name}</h3>
					</NavLink>
				</li>
			) : (
				<li key={i} 
				onMouseOver={(e) => { this.setIndexHovered(e); this.props.setCursorHover() }} 
				onMouseLeave={ this.props.setCursorUnhover } 
				onClick={this.props.isSecondaryPanelOpen ? this.setCloseSecondaryPanel : this.setOpenSecondaryPanel}>
					<h3 className={classNames({ 'active': abbreviation.match(/[0-9]/g), 'hover': i == indexHovered })}>{item.name}</h3>
				</li>
			)
		)

		return (
			<div>
				<nav className={classnames}>
					<div className="nav-takeover__main">
						<div onClick={this.setMenuClosed}/>
						<div className="nav-takeover__panels">
							<div className="nav-takeover__panel">
								<ul className="nav-takeover__items--secondary">
									<li onClick={this.setCloseSecondaryPanel}>
										<h3><i className="iconcss icon-arrow-right"></i></h3>
									</li>
									{ secondaryNavItems }
								</ul>
								<ul className="nav-takeover__items--primary">
									{ primaryNavItems }
								</ul>
								<div className="nav-takeover__line-container">
									<div style={ lineAnimation } className="nav-takeover__line"></div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isTakeoverOpen: state.isTakeoverOpen,
	isPrimaryPanelOpen: state.isPrimaryPanelOpen,
	isSecondaryPanelOpen: state.isSecondaryPanelOpen,
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


export default connect(mapStateToProps, mapDispatchToProps)(Nav)



