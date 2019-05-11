import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import { openTakeover, closeTakeover } from "../actions/navTakeover"
import { openSecondaryPanel, closeSecondaryPanel } from "../actions/secondaryPanel"
import { hoverToggle, unhoverToggle } from "../actions/navToggle"

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
		this.props.closeSecondaryPanel();

		setTimeout(() => { this.props.unhoverToggle(); }, 900)
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
		// console.log(this.props.abbreviation)
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
			"nav-takeover--secondaryPanelOpen": this.props.isSecondaryPanelOpen,
		})

		const lineAnimation = {
			transform: 'translate3d(-1px, ' + 108 * (indexHovered + 0) + 'px, 0)',
			opacity: (this.props.isTakeoverOpen ? 1 : 0)
		}

		const navData = {
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
					name: "J&J Home",
					to: "/jnj-home",
				},
				{ 
					name: "J&J Medical Devices",
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
			<li key={i} onClick={this.setMenuClosed}>
				<NavLink to={item.to} onMouseOver={this.setIndexHovered}>
					<h3>{item.name}</h3>
				</NavLink>
			</li>
		)

		return (
			<div>
				<nav className={classnames}>
					<div className="nav-takeover__main">
						<div onClick={this.setMenuClosed}/>
						<div className="nav-takeover__panels">
							<div className="nav-takeover__panel">
								<ul className="nav-takeover__items--secondary">
									<li onClick={this.props.closeSecondaryPanel}>
										<h2><i className="iconcss icon-arrow-right"></i></h2>
									</li>
									{ secondaryNavItems }
								</ul>
								<ul className="nav-takeover__items--primary">
									<li onClick={this.setMenuClosed}><NavLink to="/" onMouseOver={this.setIndexHovered}>
										<h2 className={classNames({ 'active': abbreviation == 'H' })}>Home</h2>
									</NavLink></li>
									<li onMouseOver={this.setIndexHovered} onClick={this.props.isSecondaryPanelOpen ? this.props.closeSecondaryPanel : this.props.openSecondaryPanel}>
										<h2 className={classNames({ 'active': abbreviation.match(/[0-9]/g) })}>Projects</h2>
									</li>
		 							<li onClick={this.setMenuClosed}><NavLink to="/process" onMouseOver={this.setIndexHovered}>
			 							<h2>Process</h2>
		 							</NavLink></li>
		 							<li onClick={this.setMenuClosed}><NavLink to="/about-me" onMouseOver={this.setIndexHovered}>
			 							<h2>About me</h2>
			 						</NavLink></li>
		 							<li  onClick={this.setMenuClosed}><NavLink to="/resume" onMouseOver={this.setIndexHovered}>
			 							<h2>Resume</h2>
		 							</NavLink></li>
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
	color: state.color,
	isTakeoverOpen: state.isTakeoverOpen,
	isSecondaryPanelOpen: state.isSecondaryPanelOpen,
})

const mapDispatchToProps = dispatch => ({
	openTakeover: () => dispatch(openTakeover()),
	closeTakeover: () => dispatch(closeTakeover()),
	openSecondaryPanel: () => dispatch(openSecondaryPanel()),
	closeSecondaryPanel: () => dispatch(closeSecondaryPanel()),
	hoverToggle: () => dispatch(hoverToggle()),
	unhoverToggle: () => dispatch(unhoverToggle()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Nav)



