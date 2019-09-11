import React, {Component} from 'react';
import { connect } from "react-redux"
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import ReactHover from 'react-hover'

import { setCursorHover, setCursorUnhover } from "../actions/cursor"

import splitLetter from '../services/splitLetter'

class TextLink extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isHovered: false,
		}
	}

	handleMouseEnter = () => {
		this.setState({
			isHovered: true,
		})
		this.props.setCursorHover();
	}

	handleMouseLeave = () => {
		this.setState({
			isHovered: false,
		})
		this.props.setCursorUnhover();			
	}

	render() {

		const { hideUnderline } = this.props;
		const { isHovered } = this.state;

		const classnames = classNames({
			"text-link": true,
			"text-link--hide-underline": hideUnderline,
			"text-link--hovered": isHovered,
		})

		return (
			<span className={classnames} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleMouseLeave}>
				{ this.props.children }
				<div className="text-link__line-container">
					<div className="text-link__line"/>
				</div>
			</span>
		);
	}
}




const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})


export default connect(mapStateToProps, mapDispatchToProps)(TextLink)