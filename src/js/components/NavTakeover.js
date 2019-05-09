import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import { openTakeover, closeTakeover } from "../actions/navTakeover"
import { openSecondaryPanel, closeSecondaryPanel } from "../actions/secondaryPanel"

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
		if (this.refs.notPanels.contains(event.target)) {
			this.props.closeTakeover();
			this.props.closeSecondaryPanel();
		}
	}

	setMenuClosed = () => {
		if (this.props.isTakeoverOpen) {
			this.props.closeTakeover();
			this.props.closeSecondaryPanel();

			this.state.isMobile ? this.setState({ isToggleHovered: true }) : null
			this.state.isMobile ? setTimeout(() => { this.setState({ isToggleHovered: false }) }, 900) : null
		}
	}
	
	openSecondaryPanel = () => {
		this.setState({
			secondaryPanelOpen: true,
		})
	}

	closeSecondaryPanel = () => {
		this.setState({
			secondaryPanelOpen: false,
		})
	}

	pad = (n, width, z) => (
		n.length >= width ? (n + '') : new Array(width - (n + '').length + 1).join(z || '0') + (n + '')
	)

	setIndexHovered = (event) => {
		const index = this.getChildIndex(event.target);

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
		console.log(this.props.abbreviation)
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

		return (
			<div>
				<nav className={classnames}>
					<div className="nav-takeover__main">
						<div ref="notPanels"/>
						<div className="nav-takeover__panels">
							<div className="nav-takeover__panel nav-takeover__panel--secondary">
								<ul>
									{ isMobile ? (<li onClick={this.props.closeSecondaryPanel}>
										<i className="iconcss icon-arrow-right"></i>
									</li>) : null }
									<li onClick={this.setMenuClosed}><NavLink to="/american-made">
										<h4 className="uppercase">American Made</h4>
									</NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/vai">
										<h4 className="uppercase">V.ai Player</h4>
									</NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/translator">
										<h4 className="uppercase">Translator</h4>
									</NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/jnj-mdc">
										<h4 className="uppercase">J&J MDC</h4>
									</NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/jnj-home">
										<h4 className="uppercase">J&J Home</h4>
									</NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/micro-app-interactions">
										<h4 className="uppercase">Micro App Interactions</h4>
									</NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/micro-app-templates">
										<h4 className="uppercase">Micro App Templates</h4>
									</NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/perforce">
										<h4 className="uppercase">Perforce</h4>
									</NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/cisco">
										<h4 className="uppercase">Cisco MATE</h4>
									</NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/protohack">
										<h4 className="uppercase">Protohack</h4>
									</NavLink></li>
								</ul>
							</div>
							<div className="nav-takeover__panel nav-takeover__panel--primary">
								<ul>
									<li onClick={this.setMenuClosed} onMouseOver={this.setIndexHovered}><NavLink to="/">
										<h2 className={classNames({ 'active': abbreviation == 'H' })}>Home</h2>
									</NavLink></li>
									<li onMouseOver={this.setIndexHovered} onClick={this.props.isSecondaryPanelOpen ? this.props.closeSecondaryPanel : this.props.openSecondaryPanel}>
										<h2 className={classNames({ 'active': abbreviation.match(/[0-9]/g) })}>Projects</h2>
									</li>
		 							<li onMouseOver={this.setIndexHovered} onClick={this.setMenuClosed}><NavLink to="/process">
			 							<h2>Process</h2>
		 							</NavLink></li>
		 							<li onMouseOver={this.setIndexHovered} onClick={this.setMenuClosed}><NavLink to="/about-me">
			 							<h2>About me</h2>
			 						</NavLink></li>
		 							<li onMouseOver={this.setIndexHovered} onClick={this.setMenuClosed}><NavLink to="/resume">
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
})


export default connect(mapStateToProps, mapDispatchToProps)(Nav)



