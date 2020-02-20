import React, {Component} from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import IntersectionVisible from "react-intersection-visible"

import TextLink from "../../components/TextLink"

import people from "../../data/people"

export default class ProjectDetailsBlock extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { role, date, client, team } = this.props;
		
		return (
			<div className="grid">
				<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
				<div className="grid__item grid__item--col-3 grid__item--col-12-medium">
					<h5 className="">Role</h5>
					<blockquote>{role}</blockquote>
				</div>
				<div className="grid__item grid__item--col-2 grid__item--col-12-medium">
					<h5 className="">Date</h5>
					<blockquote>{date}</blockquote>
				</div>
				<div className="grid__item grid__item--col-2 grid__item--col-12-medium">
					<h5 className="">Client</h5>
					<blockquote>{client}</blockquote> 
				</div>
				<div className="grid__item grid__item--col-3 grid__item--col-12-medium">
					<h5 className="">Team</h5>
					<blockquote className="mb0">
						{
							team.map((person, i) => (
								<span key={i}>
									<TextLink><a href={people[person]}>{person}</a></TextLink>
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