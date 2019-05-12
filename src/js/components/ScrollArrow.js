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
		document.addEventListener('scroll', this.handleScroll);
		// document.addEventListener('touchmove', this.handleScroll);
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.handleScroll);
		// document.removeEventListener('touchmove', this.handleScroll);
	}

	handleScroll = (e) => {
		(document.body.scrollTop > (window.innerHeight / 4)) ? this.setState({ isHidden: true }) : this.setState({ isHidden: false });
	}

	render() {
		const { label } = this.props;

		const classnames = classNames({
			"scroll-arrow": true,
			"scroll-arrow--hidden": this.state.isHidden
		})

		return (
			<div className={classnames}>				
				<div className="scroll-arrow__seperator-container">
					<div className="scroll-arrow__seperator"/>
				</div>
				{/*<i className="iconcss icon-arrow-right"/>*/}
				{<h5 className="uppercase">{this.props.label ? splitLetter(this.props.label) : splitLetter(`Scroll`)}</h5>}
			</div>					
		);
	}
}


