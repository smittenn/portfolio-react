import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

class Nav extends Component {

	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false,
			secondaryPanelOpen: false,
			secondaryPanelType: 'links',
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
			});
		}
	}

	toggleMenuOpen = () => {
		this.setState({
			menuOpen: !this.state.menuOpen,
			secondaryPanelOpen: false,
			notificationsOpen: false,
		})
	}
	
	openSecondaryPanel = (type) => {
		this.setState({
			secondaryPanelOpen: true,
			secondaryPanelType: type
		})
	}

	closeSecondaryPanel = () => {
		this.setState({
			secondaryPanelOpen: false,
		})
	}


	createCampusesContent = () => (
		<div className="portfolio-nav__panel portfolio-nav__panel--blue">
			<ul>
				<li onClick={this.closeSecondaryPanel}><i className="iconcss icon-arrow-long-left"></i><h4>Back</h4></li>
				<li onClick={this.toggleMenuOpen}><NavLink to="/american-made"><h3>American Made</h3></NavLink></li>
				<li onClick={this.toggleMenuOpen}><NavLink to="/vai"><h3>V.ai Player</h3></NavLink></li>
				<li onClick={this.toggleMenuOpen}><NavLink to="/vai"><h3>Translator</h3></NavLink></li>
				<li onClick={this.toggleMenuOpen}><NavLink to="/vai"><h3>J&J MDC</h3></NavLink></li>
				<li onClick={this.toggleMenuOpen}><NavLink to="/vai"><h3>J&J Home</h3></NavLink></li>
				<li onClick={this.toggleMenuOpen}><NavLink to="/vai"><h3>Micro App Interactions</h3></NavLink></li>
				<li onClick={this.toggleMenuOpen}><NavLink to="/vai"><h3>Micro App Templates</h3></NavLink></li>
				<li onClick={this.toggleMenuOpen}><NavLink to="/vai"><h3>Perforce</h3></NavLink></li>
				<li onClick={this.toggleMenuOpen}><NavLink to="/vai"><h3>Cisco MATE</h3></NavLink></li>
				<li onClick={this.toggleMenuOpen}><NavLink to="/vai"><h3>Givjoy</h3></NavLink></li>
			</ul>
		</div>
	)


	render() {
		const { menuOpen, secondaryPanelOpen, secondaryPanelType, countIsIncreasing } = this.state;

		const classnames = classNames({
			"portfolio-nav": true,
			"portfolio-nav--white": this.props.color == 'WHITE',
			"portfolio-nav--menuOpen": menuOpen,
			"portfolio-nav--secondaryPanelOpen": secondaryPanelOpen,
			"portfolio-nav--countIsIncreasing": countIsIncreasing,
		})

		return (
			<div>
				<nav className={classnames}>

					<div className="portfolio-nav__toggle" onClick={this.toggleMenuOpen} ref="hamburger">
						<h5 className="portfolio-nav__toggle-abbreviation">{this.props.abbreviation}</h5>
						<div className="portfolio-nav__hamburger">
							<div className="line"/>
							<div className="line"/>
							<div className="line"/>
						</div>
						<h5 className="portfolio-nav__toggle-num">{this.props.count}</h5>
					</div>
					<div className="portfolio-nav__main">
						<div ref="panels">
							<div className="portfolio-nav__panel portfolio-nav__panel--white">
								<ul>
									<li onClick={() => {this.toggleMenuOpen()}}><NavLink to="/"><h2>Home</h2></NavLink></li>
									<li onClick={() => this.openSecondaryPanel('links')}><h2 className={classNames({'active': secondaryPanelType == 'links' && secondaryPanelOpen })}>Projects</h2></li>
		 							<li onClick={this.toggleMenuOpen}><NavLink to="/about-me"><h2>Process</h2></NavLink></li>
		 							<li onClick={this.toggleMenuOpen}><NavLink to="/about-me"><h2>About Me</h2></NavLink></li>
		 							<li onClick={this.toggleMenuOpen}><NavLink to="/about-me"><h2>Resume</h2></NavLink></li>
								</ul>
							</div>
							{ this.createCampusesContent() }
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



// import React, {Component} from 'react';
// import Router from './Router';
// import {NavLink} from 'react-router-dom';

// import classNames from "classnames";


// export default class Nav extends Component {

// 	static propTypes = {
// 	}


// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			navOpen: false
// 		}
// 	}

// 	toggleNavOpen = () => {
// 		this.setState({
// 			navOpen: !this.state.navOpen
// 		})
// 	}

// 	render() {

// 		const classnames = classNames({
//       "fh5co-nav": true,
//       "fh5co-nav--open": this.state.navOpen,
//     });

// 		return (
// 			<div className={classnames}>
// 					<nav className="fh5co-nav-toggle" onClick={this.toggleNavOpen}>
// 							<span className="nav-section">
// 								<h5>H</h5>
// 							</span>
// 							<div className="lines"></div>
// 							<div className="nav-numbers-list">
// 								<a href="#project-0" className="nav-number">1</a>
// 							</div>
// 					</nav>

// 					<nav id="fh5co-offcanvas">
// 						<ul className="menu-list">
// 							<li><NavLink to="/home">Home</NavLink></li>
// 							<li><NavLink to="/american-made">American Made</NavLink></li>
// 							<li><NavLink to="/vai">V.ai</NavLink></li>
// 							<li><NavLink to="/transactions">Accessibility</NavLink></li>
// 						</ul>
// 					</nav>

// 					<Router/>
// 			</div>
// 		);
// 	}
// }