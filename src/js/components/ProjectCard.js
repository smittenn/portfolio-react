import React, {Component, Fragment} from 'react';
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
import splitWord from '../services/splitWord'

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

	createItem = (item, i) => (
		<Fragment>
			{ (item.media) ? (
				<div className="project-card__asset">
					<Image src={item.media.src} aspectRatioWidth={item.media.aspectRatioWidth} aspectRatioHeight={item.media.aspectRatioHeight}/>
				</div>
			) : null }
			<div className="project-card__bottom" onMouseEnter={() => { this.setIndexHovered(i); }} onMouseLeave={this.handleMouseLeave}>
				<TextLink hideUnderline>
					<h2 className="mb0">
						{ splitWord(item.name, {}, classNames({ "outline": this.state.hoveredIndex != i })) }
					</h2>
				</TextLink>
			</div>
			{/*
			<div className="project-card__tags">
			<blockquote className="mb0">{item.tags.join(", ")}</blockquote>
			</div>
			*/}
		</Fragment>
	)

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
					{ (/^\/\//).test(item.to) ? (
						<a href={item.to} onClick={this.props.setCursorUnhover} target="_blank">
							{ this.createItem(item, i) }
						</a>
					) : (
						<NavLink to={item.to} onClick={this.props.setCursorUnhover}>
							{ this.createItem(item, i) }
						</NavLink>
					)}
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