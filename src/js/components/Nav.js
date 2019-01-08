import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import splitLetter from '../services/splitLetter'

class Nav extends Component {

	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false,
			secondaryPanelOpen: false,
			isToggleHovered: false,
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

	componentDidUpdate(prevProps) {
		(prevProps.count == this.props.count) ? null : this.setState({ countIsIncreasing: (prevProps.count < this.props.count) })
	}

	detectMobile = (event) => {
		this.setState({
			isMobile: window.innerWidth <= 800,
		})
	}

	handleClickOutside = (event) => {
		if (!this.refs.panels.contains(event.target) && !this.refs.hamburger.contains(event.target)) {
			this.setState({
				menuOpen: false,
				secondaryPanelOpen: false,
				isToggleHovered: false,
			});
		}
	}

	toggleMenuOpen = () => {
		this.setState({
			menuOpen: !this.state.menuOpen,
			secondaryPanelOpen: false,
			notificationsOpen: false,
		})
		this.state.isMobile ? (setTimeout(() => {this.setState({ isToggleHovered: false })}, 600)) : null
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

	handleMouseEnter = () => {
		this.setState({
			isToggleHovered: true,
		})
	}

	handleMouseLeave = () => {
		this.setState({
			isToggleHovered: false,
		})
	}

	pad = (n, width, z) => (
		n.length >= width ? (n + '') : new Array(width - (n + '').length + 1).join(z || '0') + (n + '')
	)

	render() {
		const { menuOpen, secondaryPanelOpen, countIsIncreasing, isToggleHovered } = this.state;
		const { abbreviation, count } = this.props;

		const classnames = classNames({
			"portfolio-nav": true,
			"portfolio-nav--hovering": isToggleHovered,
			"portfolio-nav--white": this.props.color == 'WHITE',
			"portfolio-nav--menuOpen": menuOpen,
			"portfolio-nav--secondaryPanelOpen": secondaryPanelOpen,
			"portfolio-nav--countIsIncreasing": countIsIncreasing,
		})

		return (
			<div>
				<nav className={classnames}>
					<div className="portfolio-nav__toggle" onClick={this.toggleMenuOpen} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} ref="hamburger">
						<h5 className="portfolio-nav__toggle-abbreviation">{abbreviation}</h5>
						<div className="portfolio-nav__hamburger">
							<div className="line"/>
							<div className="line"/>
							<div className="line"/>
						</div>
						<h5 className="portfolio-nav__toggle-num">{splitLetter(this.pad(count, 2).toString())}</h5>
					</div>
					<div className="portfolio-nav__main">
						<div ref="panels">

							<div className="portfolio-nav__panel portfolio-nav__panel--secondary">
								<ul>
									{<li onClick={this.closeSecondaryPanel}><i className="iconcss icon-arrow-right"></i>{/*<h5 className="uppercase">Back</h5>*/}</li>}
									<li onClick={this.toggleMenuOpen}><NavLink to="/american-made"><h3 className={classNames({'active': abbreviation == 'P1' })}>American Made</h3></NavLink></li>
									<li onClick={this.toggleMenuOpen}><NavLink to="/vai"><h3 className={classNames({'active': abbreviation == 'P2' })}>V.ai Player</h3></NavLink></li>
									<li onClick={this.toggleMenuOpen}><NavLink to="/translator"><h3>Translator</h3></NavLink></li>
									<li onClick={this.toggleMenuOpen}><NavLink to="/jnj-mdc"><h3>J&J MDC</h3></NavLink></li>
									<li onClick={this.toggleMenuOpen}><NavLink to="/jnj-home"><h3>J&J Home</h3></NavLink></li>
									<li onClick={this.toggleMenuOpen}><NavLink to="/micro-app-interactions"><h3>Micro App Interactions</h3></NavLink></li>
									<li onClick={this.toggleMenuOpen}><NavLink to="/micro-app-templates"><h3>Micro App Templates</h3></NavLink></li>
									<li onClick={this.toggleMenuOpen}><NavLink to="/perforce"><h3>Perforce</h3></NavLink></li>
									<li onClick={this.toggleMenuOpen}><NavLink to="/cisco"><h3>Cisco MATE</h3></NavLink></li>
									<li onClick={this.toggleMenuOpen}><NavLink to="/protohack"><h3>Protohack</h3></NavLink></li>
								</ul>
							</div>
							<div className="portfolio-nav__panel portfolio-nav__panel--white">
								<ul>
									<li onClick={() => this.toggleMenuOpen()}><NavLink to="/"><h2 className={classNames({'active': abbreviation == 'H' })}>Home</h2></NavLink></li>
									<li onClick={() => this.openSecondaryPanel()}><h2>Projects</h2></li>
		 							<li onClick={this.toggleMenuOpen}><NavLink to="/process"><h2>Process</h2></NavLink></li>
		 							<li onClick={this.toggleMenuOpen}><NavLink to="/about-me"><h2>About me</h2></NavLink></li>
		 							<li onClick={this.toggleMenuOpen}><NavLink to="/resume"><h2>Resume</h2></NavLink></li>
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
})

export default connect(mapStateToProps)(Nav)



