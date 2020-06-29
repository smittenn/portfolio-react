import { connect } from "react-redux"

import React, {Component} from "react"
import classNames from "classnames"
import IntersectionVisible from "react-intersection-visible"

import Icon from './Icon'

import processData from '../data/process'

import pad from '../services/pad'
import splitWord from '../services/splitWord'
import splitLetter from '../services/splitLetter'
import palette from '../services/palette'
import darken from '../services/darken'

import { setCursorHover, setCursorUnhover } from "../actions/cursor"

class ProcessDiagram extends Component {

	constructor(props) {
		super(props);

		this.state = {
			prevIndex: null,
			activeIndex: 1,
			hoveringIndex: 1,
			data: processData.data,
			activeItem: processData.data[0]
		}
	}

	componentDidMount() {
		this.setColor();
	}

	setActiveStep = (i) => {
		this.setState((prevState) => ({
			prevIndex: prevState.activeIndex,
			activeIndex: i,
			activeItem: this.state.data[i-1]
		}));	
	}

	setHoveringIndex = (i) => {
		this.setState({
			hoveringIndex: i,
		});	
	}

	setColor = () => {
		const processSection = document.getElementById('process');
		if (processSection) { 
			const section = processSection.getElementsByTagName('section')[0];
			const circles = processSection.getElementsByClassName('step__spot-circle');

			if (section) { section.style.backgroundColor = palette(this.state.activeItem.color) }
			if (circles) { Array.from(circles).forEach((item) => item.style.fill = palette(this.state.activeItem.color)) }
		}
	}

	generateTitle = () => (
		<div className="title" key={this.state.data.indexOf(this.state.activeItem)}>
			<h4>
				<Icon icon={this.state.activeItem.iconName} size={96} strokeWidth={2} color={palette('brand-white')}/>
			</h4>
			<h3>{ splitLetter(this.state.activeItem.title) }</h3>
			<blockquote className="mb0">{ this.state.activeItem.body ? splitWord(this.state.activeItem.body) : null }</blockquote>
		</div>
	)

	render() {

		const { activeIndex, prevIndex, activeItem, hoveringIndex } = this.state;

		this.setColor();

		const steps = this.state.data.map((item, i) => (
			<li className={classNames({ "step": true, "step--hovering" : hoveringIndex == i + 1, "step--active": (activeIndex > i) })} key={i + 1} onClick={() => this.setActiveStep(i+1)}>
				<div className="step__spot" onMouseOver={() => { this.setHoveringIndex(i+1); this.props.setCursorHover(); }} onMouseOut={() => { this.setHoveringIndex(null); this.props.setCursorUnhover(); }}>
					<svg className="step__spot-svg" viewBox="0 0 100 100">
						<circle cx="50" cy="50" r="24" className="step__spot-circle"></circle>
						<circle cx="50" cy="50" r="12" className="step__spot-fill"></circle>
					</svg>
				</div>
				<div className="step__info">
					<h6 className="step__text mb0">
						{ pad(i + 1, 2) + '. ' }
					</h6>
					<h5 className="step__text">
						{ item.title }
					</h5>
				</div>
			</li>
		))

		const stepArcs = this.state.data.map((item, i) => (
			<path 
			className={ classNames({ 
				"step__arc" : true, 
				"step__arc--active" : (activeIndex > i+1) 
			})} 
			id={"step__arc-" + (i + 1)} 
			d={item.stepArcPath} 
			key={i+1}
			/>
		))

		const circleArcs = this.state.data.map((item, i) => (
			<path 
			className={"circle__arc circle__arc-" + (i + 1)}
			d={item.circleArcPath} 
			key={i+1}
			/>
		))

		return (
		 <div className="process">
			<div className="process__list">
				<svg viewBox="0 0 100 100">
					<g>
						{ circleArcs }
					</g>
					<g>
						{ stepArcs }
					</g>
				</svg>

				{ this.generateTitle() }

				<ul>
					{ steps }
				</ul>

			</div>
		</div>
		);
	}
}

const mapStateToProps = state => ({
	isCursorHovering: state.isCursorHovering,
})

const mapDispatchToProps = dispatch => ({
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProcessDiagram)
