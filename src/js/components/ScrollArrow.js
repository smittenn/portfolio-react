import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

export default class ScrollArrow extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}


	render() {
		const { menuOpen, secondaryPanelOpen, secondaryPanelType, countIsIncreasing } = this.state;

		const classnames = classNames({
			"scroll-arrow": true,
		})

		return (
			<div className={classnames}>
				<div className="scroll-arrow__seperator"/>
				{/*<i className="iconcss icon-arrow-right"/>*/}
				{<h5 className="uppercase">Scroll</h5>}
			</div>					
		);
	}
}


