import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import splitLetter from '../services/splitLetter'

import { setCursorHover, setCursorUnhover } from "../actions/cursor"


class HeroScrollButton extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isHidden: false,
		}
	}

	componentDidMount() {
		document.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (e) => {
		(document.body.scrollTop > (window.innerHeight / 3)) ? this.setState({ isHidden: true }) : this.setState({ isHidden: false });
	}

	render() {
		const { label, to, onSetActive } = this.props;

		const classnames = classNames({
			"scroll-arrow": true,
			"scroll-arrow--hidden": this.state.isHidden
		})

		return (
			<Link to={to} spy={true} smooth={"easeOutCubic"} duration={1200} hashSpy={false} offset={0} onSetActive={onSetActive}>
				<div className={classnames}  onMouseEnter={this.state.isHidden ? null : this.props.setCursorHover} onMouseLeave={this.props.setCursorUnhover} onClick={this.props.setCursorUnhover}>				
					<div className="scroll-arrow__seperator-container">
						<div className="scroll-arrow__seperator"/>
					</div>
					<h6 className="uppercase">{this.props.label ? splitLetter(this.props.label) : splitLetter('Read More')}</h6>
				</div>					
			</Link>
		);
	}
}


const mapStateToProps = state => ({
	isCursorHovering: state.isCursorHovering,
})

const mapDispatchToProps = dispatch => ({
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})


export default connect(mapStateToProps, mapDispatchToProps)(HeroScrollButton)