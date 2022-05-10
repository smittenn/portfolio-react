import React, {Component, Fragment} from 'react';
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import IntersectionVisible  from "react-intersection-visible"
import IntersectionObserver  from "intersection-observer"

import { setCursorHover, setCursorUnhover } from "../actions/cursor"

import DelayLink from '../components/DelayLink'
import Image from '../components/Image'
import Video from '../components/Video'
import TextLink from '../components/TextLink'

import splitLetter from '../services/splitLetter'
import splitWord from '../services/splitWord'
import Icon from './Icon';

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

	createLink = (item, i) => (
		(/^\/\//).test(item.to) ? (
			<a href={item.to} onClick={this.props.setCursorUnhover} target="_blank">
				{ this.createText(item, i) }
			</a>
		) : (
			<DelayLink to={item.to} onClick={this.props.setCursorUnhover}>
				{ this.createText(item, i) }
			</DelayLink>
		)
	)

	createText = (item, i) => (
		<div className="project-card__bottom" onMouseEnter={() => { this.setIndexHovered(i); }} onMouseLeave={this.handleMouseLeave}>
			<TextLink hideUnderline>
				<h2 className="h2 mb0">
					{ splitWord(item.name, {}, classNames({ "outline": this.state.hoveredIndex != i })) }
				</h2>
			</TextLink>
			{ (/^\/\//).test(item.to) ? <div className="project-card__arrow"><Icon icon="arrow" size={40}/></div> : null }
		</div>
	)

	createMedia = (item) => (
		(item.media) ? (
			<div className="project-card__asset">
				<div className="grid p0">
					<div className="grid__item--col-6 grid__item--col-4-medium"/>
					<div className="grid__item--col-6 grid__item--col-8-medium">
						{ (item.media.type == 'video') ? (
							<Video src={item.media.src} loop hideControls/>
						) : (
							<Image src={item.media.src} aspectRatioWidth={item.media.aspectRatioWidth} aspectRatioHeight={item.media.aspectRatioHeight}/>
						)}
					</div>
				</div>
			</div>
		) : null
	)

	render() {

		const { name, tags, href, items } = this.props;
		const { hoveredIndex } = this.state;

		return (
			<Fragment>
				{ items.map((item, i) => (
					<div key={i} className={classNames({
					"grid": true,
					"p0": true,
					"project-card": true,
					"project-card--hovered": hoveredIndex == i,
					})}>
						<div className="grid">
							<div className="grid__item--col-1 grid__item--hide-bp-medium"/>
							<div className="grid__item--col-10 grid__item--col-12-medium">
								{ this.createLink(item, i) }
							</div>
						</div>
						{ this.createMedia(item) }
					</div>
				)) }
			</Fragment>
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
