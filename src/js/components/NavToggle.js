import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import { openTakeover, closeTakeover } from "../actions/navTakeover"

import splitLetter from '../services/splitLetter'

class NavToggle extends Component {

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

	componentDidUpdate(prevProps) {
		// if (prevProps.count != this.props.count) { 
		// 	this.setState({
		// 		countIsIncreasing: (prevProps.count < this.props.count),
		// 		countIsDecreasing: (prevProps.count > this.props.count),
		// 	})
		// 	setTimeout(() => {this.setState({ countIsIncreasing: false, countIsDecreasing: false })}, 600);
		// }
	}

	detectMobile = (event) => {
		this.setState({
			isMobile: window.innerWidth <= 800,
		})
	}

	handleClickOutside = (event) => {
		if (!this.refs.hamburger.contains(event.target)) {
			// this.setState({
			// 	isToggleHovered: false,
			// });
		}
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
		const { secondaryPanelOpen, countIsIncreasing, countIsDecreasing, isToggleHovered } = this.state;
		const { black } = this.props;


		const classnames = classNames({
			"nav-toggle": true,
			"nav-toggle--hovering": isToggleHovered,
			"nav-toggle--white": !black,
			"nav-toggle--menuOpen": this.props.isTakeoverOpen,
			// "nav-toggle--countIsIncreasing": countIsIncreasing,
			// "nav-toggle--countIsDecreasing": countIsDecreasing,
		})


		return (
			<div className={classnames}>
				<div className="nav-toggle__toggle" onClick={this.props.isTakeoverOpen ? this.props.closeTakeover : this.props.openTakeover} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} ref="hamburger">
					<h5 className="nav-toggle__abbreviation">{this.props.abbreviation}</h5>
					<div className="nav-toggle__hamburger">
						<div className="line"/>
						<div className="line"/>
						<div className="line"/>
					</div>
					<h5 className="nav-toggle__count">{splitLetter(this.pad(this.props.count, 2).toString())}</h5>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isTakeoverOpen: state.isTakeoverOpen,
})

const mapDispatchToProps = dispatch => ({
	openTakeover: () => dispatch(openTakeover()),
	closeTakeover: () => dispatch(closeTakeover()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavToggle)



