import React, {Component} from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import IntersectionVisible from "react-intersection-visible"

import TextLink from "../../components/TextLink"

import people from "../../data/people"

export default class DetailsBlock extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { role, date, client, team } = this.props;
		
		return (
			<div className="grid">
				<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
				<div className="grid__item grid__item--col-3 grid__item--col-12-medium">
					<h6 className="uppercase">Role</h6>
					<blockquote>{role}</blockquote>
				</div>
				<div className="grid__item grid__item--col-2 grid__item--col-12-medium">
					<h6 className="uppercase">Date</h6>
					<blockquote>{date}</blockquote>
				</div>
				<div className="grid__item grid__item--col-2 grid__item--col-12-medium">
					<h6 className="uppercase">Client</h6>
					<blockquote>{client}</blockquote> 
				</div>
				<div className="grid__item grid__item--col-3 grid__item--col-12-medium">
					<h6 className="uppercase">Team</h6>
					<blockquote className="mb0">
						{
							team.map((person, i) => (
								<span>
									<TextLink key={i}><a href={people[person]}>{person}</a></TextLink>
									{ i == team.length - 1 ? null : ',\u00A0' }
								</span>
							))
						}
					</blockquote> 
				</div>
			</div>
		);
	}
}