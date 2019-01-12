import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import splitLetter from '../services/splitLetter'

export default class ScrollArrow extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isHidden: false,
		}
	}

	componentDidMount() {
		document.addEventListener('mousewheel', this.handleMouseWheel);
	}

	componentWillUnmount() {
		document.removeEventListener('mousewheel', this.handleMouseWheel);
	}

	handleMouseWheel = (e) => {
		this.setState({ isHidden: true });
		(document.body.scrollTop == 0) ? this.setState({ isHidden: false }) : null;
	}


	render() {
		const { label } = this.props;

		const classnames = classNames({
			"scroll-arrow": true,
			"scroll-arrow--hidden": this.state.isHidden,
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


