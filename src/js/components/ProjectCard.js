import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import ReactHover from 'react-hover'

import splitLetter from '../services/splitLetter'

export default class ProjectCard extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isHovered: false,
		}
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}
	
	componentDidUpdate(prevProps) {
	}

	handleMouseEnter = () => {
		this.setState({
			isHovered: true,
		})
	}

	handleMouseLeave = () => {
		this.setState({
			isHovered: false,
		})			
	}

	render() {

		const { name, tags, href } = this.props;
		const { isHovered } = this.state;

		const classnames = classNames({
			"project-card": true,
			"project-card--hovered": isHovered,
		})

		// const tags = tags.map((item, index) => {

		// })

		return (
			<div className={classnames} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
				<NavLink to={href}>
					<div className="project-card__asset">
					{this.props.children}
					</div>
					<div className="project-card__bottom">
						<div>
							<h4>{name}</h4>
							<blockquote>{tags.join(", ")}</blockquote>
						</div>
						{/*<i className="iconcss icon-arrow-right"></i>*/}
					</div>
				</NavLink>
			</div>
		);
	}
}




