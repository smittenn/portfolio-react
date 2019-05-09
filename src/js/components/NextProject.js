import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"

export default class NextProject extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidUpdate(prevProps) {}

	render() {

		const { to, name, style, sections, activeSection } = this.props;

		const classnames = classNames({
			"next-project": true,
		})
		
		return (
			<div className={classnames}>
				<NavLink to={to}>
					<section className="black" style={style}>
							<GridLines/>
								<div className="grid">
									<div className="grid__item grid__item--col-12">
										<h2>Next Up</h2>
										<h1>{name}</h1>
									</div>
								</div>
					</section>
				</NavLink>
				<div className="clip-wrapper">
					<Sidebar 
					isBlack={false}
					sections={sections} 
					activeSection={activeSection}
					/>
				</div>
			</div>
		);
	}
}