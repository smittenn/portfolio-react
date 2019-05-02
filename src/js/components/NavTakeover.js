import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import { openTakeover, closeTakeover } from "../actions/navTakeover"

import splitLetter from '../services/splitLetter'

class Nav extends Component {

	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false,
			secondaryPanelOpen: false,
			isToggleHovered: false,
			isMobile: window.innerWidth <= 800,
			countIsIncreasing: false,
			countIsDecreasing: false,
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
			this.setState({
				secondaryPanelOpen: false,
			});
			console.log(event);
			this.props.closeTakeover();
		}
	}

	setMenuClosed = () => {
		if (this.props.isTakeoverOpen) {
			this.setState({
				secondaryPanelOpen: false,
			})
			this.props.closeTakeover();
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

	render() {
		const { menuOpen, secondaryPanelOpen } = this.state;
		const { abbreviation, count } = this.props;

		const classnames = classNames({
			"portfolio-nav": true,
			"portfolio-nav--menuOpen": this.props.isTakeoverOpen,
			"portfolio-nav--secondaryPanelOpen": secondaryPanelOpen,
		})

		return (
			<div>
				<nav className={classnames}>
					<div className="portfolio-nav__main">
						<div ref="notPanels"></div>
						<div className="portfolio-nav__panels">
							<div className="portfolio-nav__panel portfolio-nav__panel--secondary">
								<ul>
									{<li onClick={this.closeSecondaryPanel}><i className="iconcss icon-arrow-right"></i>{/*<h5 className="uppercase">Back</h5>*/}</li>}
									<li onClick={this.setMenuClosed}><NavLink to="/american-made"><h3 className={classNames({ 'active': abbreviation == 'P1' })}>American Made</h3></NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/vai"><h3 className={classNames({ 'active': abbreviation == 'P2' })}>V.ai Player</h3></NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/translator"><h3>Translator</h3></NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/jnj-mdc"><h3>J&J MDC</h3></NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/jnj-home"><h3>J&J Home</h3></NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/micro-app-interactions"><h3>Micro App Interactions</h3></NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/micro-app-templates"><h3>Micro App Templates</h3></NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/perforce"><h3>Perforce</h3></NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/cisco"><h3>Cisco MATE</h3></NavLink></li>
									<li onClick={this.setMenuClosed}><NavLink to="/protohack"><h3>Protohack</h3></NavLink></li>
								</ul>
							</div>
							<div className="portfolio-nav__panel portfolio-nav__panel--white">
								<ul>
									<li onClick={this.setMenuClosed}><NavLink to="/"><h2 className={classNames({ 'active': abbreviation == 'H' })}>Home</h2></NavLink></li>
									<li onClick={this.openSecondaryPanel}><h2 className={classNames({ 'active': abbreviation.match(/[0-9]/g) })}>Projects</h2></li>
		 							<li onClick={this.setMenuClosed}><NavLink to="/process"><h2>Process</h2></NavLink></li>
		 							<li onClick={this.setMenuClosed}><NavLink to="/about-me"><h2>About me</h2></NavLink></li>
		 							<li onClick={this.setMenuClosed}><NavLink to="/resume"><h2>Resume</h2></NavLink></li>
								</ul>
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
})

const mapDispatchToProps = dispatch => ({
	openTakeover: () => dispatch(openTakeover()),
	closeTakeover: () => dispatch(closeTakeover()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Nav)



