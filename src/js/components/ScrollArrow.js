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
		document.addEventListener('mousewheel', this.handleScroll);
		document.addEventListener('touchmove', this.handleScroll);
	}

	componentWillUnmount() {
		document.removeEventListener('mousewheel', this.handleScroll);
		document.removeEventListener('touchmove', this.handleScroll);
	}

	handleScroll = (e) => {
		// this.setState({ isHidden: true });
		(document.body.scrollTop > 0) ? this.setState({ isHidden: true }) : null;
		(document.body.scrollTop == 0) ? this.setState({ isHidden: false }) : null;
	}


	render() {
		const { label } = this.props;

		console.log();

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
				{<h5 className="uppercase">{this.props.label ? splitLetter(`Scroll`) : splitLetter(`Scroll`)}</h5>}
			</div>					
		);
	}
}


