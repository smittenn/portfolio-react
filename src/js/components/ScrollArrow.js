import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import splitLetter from '../services/splitLetter'
import detectMobile from '../services/detectMobile'

import { setCursorHover, setCursorUnhover } from "../actions/cursor"


class ScrollArrow extends Component {

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
		const { label, black } = this.props;

		const classnames = classNames({
			"scroll-arrow": true,
			"scroll-arrow--hidden": this.state.isHidden,
			"scroll-arrow--black": this.props.black,
		})

		return (
			<div className={classnames}  onMouseEnter={this.props.setCursorHover} onMouseLeave={this.props.setCursorUnhover} onClick={this.props.setCursorUnhover}>				
				<div className="scroll-arrow__seperator-container">
					<div className="scroll-arrow__seperator"/>
				</div>
				{<h6 className="uppercase">{this.props.label ? splitLetter(this.props.label) : splitLetter(`Read More`)}</h6>}
			</div>					
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


export default connect(mapStateToProps, mapDispatchToProps)(ScrollArrow)