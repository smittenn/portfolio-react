import React, {Component} from 'react';
import { connect } from "react-redux"
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import ReactHover from 'react-hover'
import IntersectionVisible  from "react-intersection-visible"
import IntersectionObserver  from "intersection-observer"

import { setCursorHover, setCursorUnhover } from "../actions/cursor"

import Image from '../components/Image'
import TextLink from '../components/TextLink'

import splitLetter from '../services/splitLetter'

class ProjectCard extends Component {

	constructor(props) {
		super(props);

		this.state = {
			hoveredIndex: 0,
		}
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}
	
	componentDidUpdate(prevProps) {
	}

	handleMouseLeave = () => {
		this.setState({
			hoveredIndex: null,
		})
	}

	setIndexHovered = (i) => {
		this.setState({
			hoveredIndex: i,
		})
	}

	render() {

		const { name, tags, href, items } = this.props;
		const { hoveredIndex } = this.state;

		return (
			<ul className="m0">
				{ items.map((item, i) => (
					<li key={i} 
					className={classNames({
						"project-card": true,
						"project-card--hovered": hoveredIndex == i,
					})}>
						<NavLink to={item.href} onClick={this.props.setCursorUnhover}>
							<div className="project-card__asset">
								<Image src={item.img} aspectRatioWidth={item.aspectRatioWidth} aspectRatioHeight={item.aspectRatioHeight}/>
							</div>
							<div className="project-card__bottom" 
							onMouseEnter={() => { this.setIndexHovered(i); }}
							onMouseLeave={this.handleMouseLeave}>
								<TextLink hideUnderline><h2 className="mb0">{item.name}</h2></TextLink>
							</div>
							<div className="project-card__tags">
								<blockquote className="mb0">{item.tags.join(", ")}</blockquote>
							</div>
						</NavLink>
					</li>
				)) }
			</ul>
		)
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