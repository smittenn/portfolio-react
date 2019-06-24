import React, {Component} from 'react';
import { connect } from "react-redux"
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import ReactHover from 'react-hover'

import { setCursorHover, setCursorUnhover } from "../actions/cursor"

import splitLetter from '../services/splitLetter'

class ProjectCard extends Component {

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
		this.props.setCursorHover();
	}

	handleMouseLeave = () => {
		this.setState({
			isHovered: false,
		})
		this.props.setCursorUnhover();			
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
				<NavLink to={href} onClick={this.handleMouseLeave}>
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




const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard)