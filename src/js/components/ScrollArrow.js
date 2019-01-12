import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import splitLetter from '../services/splitLetter'
import detectMobile from '../services/detectMobile'

export default class ScrollArrow extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isHidden: false,
		}
	}

	componentDidMount() {
		// document.addEventListener('mousewheel', this.handleMouseWheel);
		// document.addEventListener('touchstart', this.handleMouseWheel);
	}

	componentWillUnmount() {
		// document.removeEventListener('mousewheel', this.handleMouseWheel);
		// document.removeEventListener('touchstart', this.handleMouseWheel);
	}

	handleMouseWheel = (e) => {
		// this.setState({ isHidden: true });
		// () ? this.setState({ isHidden: false }) : null;
	}


	render() {
		const { label } = this.props;

		const classnames = classNames({
			"scroll-arrow": true,
			"scroll-arrow--hidden": document.body.scrollTop != 0,
		})

		return (
			<div className={classnames}>
				<div className="scroll-arrow__seperator"/>
				{/*<i className="iconcss icon-arrow-right"/>*/}
				{<h5 className="uppercase">{this.props.label ? splitLetter(`Scroll`) : splitLetter(`Scroll`)}</h5>}
			</div>					
		);
	}
}


