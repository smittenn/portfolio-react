import React, {Component} from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import IntersectionVisible from "react-intersection-visible"

import TextLink from "../../components/TextLink"

export default class NextProjectBlock extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { to, name } = this.props;

		
		return (
			<div className="grid">
				<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
				<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
					<h4 className="light fade">Next Up</h4>
					<h2 className="mb0">
						<NavLink to={to}>
							<TextLink>{name}</TextLink>
						</NavLink>
					</h2>
				</div>
			</div>
		);
	}
}