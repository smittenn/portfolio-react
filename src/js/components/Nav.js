import React, {Component} from 'react';
import NavRouter from './NavRouter';
import {NavLink} from 'react-router-dom';
import classNames from "classnames";

export default class Nav extends Component {

	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false,
			secondaryPanelOpen: false,
			secondaryPanelType: 'links',
			notificationsOpen: false,
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

	toggleNotificationsOpen = () => {
		this.setState({
			menuOpen: false,
			secondaryPanelOpen: false,
			notificationsOpen: !this.state.notificationsOpen,
		})
	}

	createCampusesContent = () => (
		<div className="home-nav__panel home-nav__panel--blue">
			<ul>
				<li onClick={this.closeSecondaryPanel}><i className="iconcss icon-arrow-long-left"></i><h4>Back</h4></li>
				<li onClick={this.toggleMenuOpen}><NavLink to="/american-made"><h3>American Made</h3></NavLink></li>
				<li onClick={this.toggleMenuOpen}><NavLink to="/vai"><h3>Video AI</h3></NavLink></li>
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
		const { menuOpen, secondaryPanelOpen, secondaryPanelType, notificationsOpen } = this.state;

		const classnames = classNames({
			"home-nav": true,
			"home-nav--menuOpen": menuOpen,
			"home-nav--secondaryPanelOpen": secondaryPanelOpen,
			"home-nav--notificationsOpen": notificationsOpen,
		})

		return (
			<div>
				<nav className={classnames}>
					<div ref="hamburger" className="home-nav__hamburger" onClick={this.toggleMenuOpen}>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
					</div>
					<div className="home-nav__main">
						<div ref="panels">
							<div className="home-nav__panel home-nav__panel--white">
								<ul>
									<li onClick={this.toggleMenuOpen}><NavLink to="/home"><h3>Home</h3></NavLink></li>
									<li onClick={() => this.openSecondaryPanel('links')}><h3 className={classNames({'active': secondaryPanelType == 'links' && secondaryPanelOpen })}>Projects</h3></li>
		 							<li onClick={this.toggleMenuOpen}><NavLink to="/about-me"><h3>Process</h3></NavLink></li>
		 							<li onClick={this.toggleMenuOpen}><NavLink to="/about-me"><h3>About Me</h3></NavLink></li>
		 							<li onClick={this.toggleMenuOpen}><NavLink to="/about-me"><h3>Resume</h3></NavLink></li>
								</ul>
							</div>
							{ this.createCampusesContent() }
						</div>
					</div>
				</nav>
				<NavRouter/>
			</div>
		);
	}
}



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