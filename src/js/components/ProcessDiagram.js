import { connect } from "react-redux"

import React, {Component} from "react"
import classNames from "classnames"
import IntersectionVisible from "react-intersection-visible"

import Icon from './Icon'

import pad from '../services/pad'
import splitWord from '../services/splitWord'
import splitLetter from '../services/splitLetter'
import palette from '../services/palette'

import { setCursorHover, setCursorUnhover } from "../actions/cursor"

class ProcessDiagram extends Component {

	constructor(props) {
		super(props);

		this.data = [
			{
				color: palette('brand-red'),
				title: `Discover`,
				iconName: `binoculars`,
				body: `Interview users to understand their current process and workflow.`,
				arcPath: `M 50 1 A 49 49 0 0 1 84.64823227814082 15.351767721859176`
			},
			{
				color: palette('brand-orange'),
				title: `Ideate`,
				iconName: `lightbulb`,
				body: `Meet with stakeholders and developers to collaboratively generate design ideas.`,
				arcPath: `M 84.64823227814082 15.351767721859176 A 49 49 0 0 1 99 50`
			},
			{
				color: palette('brand-yellow'),
				title: `Wireframe`,
				iconName: `wireframe`,
				body: `Consolidate the ideas into a wireframe to communicate the design and functionality and gather consensus.`,
				arcPath: `M 99 50 A 49 49 0 0 1 84.64823227814082 84.64823227814082`
			},
			{
				color: palette('brand-purple'),
				title: `Prototype`,
				iconName: `prototype`,
				body: `Create a responsive and clickable coded prototype built with HTML, CSS, and JavaScript.`,
				arcPath: `M 84.64823227814082 84.64823227814082 A 49 49 0 0 1 50 99`
			},
			{
				color: palette('brand-green'),
				title: `User Testing`,
				iconName: `conversation`,
				body: `Test the prototype using Usability Testing methods to gather thorough feedback.`,
				arcPath: `M 50 99 A 49 49 0 0 1 15.351767721859176 84.64823227814082`
			},
			{
				color: palette('brand-pink'),
				title: `Experience Mapping`,
				iconName: `directions`,
				body: `Synthesize the feedback and map the users’ experience with the prototype to improve it in future iterations.`,
				arcPath: `M 15.351767721859176 84.64823227814082 A 49 49 0 0 1 1 50.00000000000001`
			},
			{
				color: palette('brand-blue'),
				title: `Refinement`,
				iconName: `filter`,
				body: `Refine and iterate on the design to further improve the users' experience.`,
				arcPath: `M 1 50.00000000000001 A 49 49 0 0 1 15.351767721859161 15.351767721859176`
			},
			{
				color: palette('brand-teal'),
				title: `Iterate`,
				iconName: `clipboard`,
				body: `Deliver changes to the prototype and backlog improvements for the future.`,
				arcPath: `M 15.351767721859161 15.351767721859176 A 49 49 0 0 1 49.99999999999999 1`
			}
		]

		this.state = {
			prevIndex: null,
			activeIndex: 1,
			hoveringIndex: 1,
			activeItem: this.data[0]
		}
	}

	componentDidMount() {
		this.setColor();
	}

	setActiveStep = (i) => {
		this.setState((prevState) => ({
			prevIndex: prevState.activeIndex,
			activeIndex: i,
			activeItem: this.data[i-1]
		}));	
	}

	setHoveringIndex = (i) => {
		this.setState({
			hoveringIndex: i,
		});	
	}

	setColor = () => {
		const section = document.getElementsByTagName('section')[0];
		const circles = document.getElementsByClassName('step__spot-circle');

		section ? section.style.backgroundColor = this.state.activeItem.color : null;
		circles ? Array.from(circles).forEach((item) => item.style.fill = this.state.activeItem.color) : null;
	}

	generateTitle = () => (
		<div className="title" key={this.data.indexOf(this.state.activeItem)}>
			<h3>
				<Icon icon={this.state.activeItem.iconName} size={96} strokeWidth={2} color={palette('brand-white')}/>
				{/*<i className={"iconcss icon-" + this.state.activeItem.iconName }/>*/}
			</h3>
			<h3 /*className={ activeIndex ? null : "mb0"}*/>{ splitLetter(this.state.activeItem.title) }</h3>
			<blockquote className="mb0">{ this.state.activeItem.body ? splitWord(this.state.activeItem.body) : null }</blockquote>
		</div>
	)

	render() {

		const { activeIndex, prevIndex, activeItem, hoveringIndex } = this.state;


		const steps = this.data.map((item, i) => (
			<li className={classNames({ "step": true, "step--hovering" : hoveringIndex == i + 1, "step--active": (activeIndex > i) })} key={i + 1} onClick={() => this.setActiveStep(i+1)}>
				<div className="step__spot" onMouseOver={() => { this.setHoveringIndex(i+1); this.props.setCursorHover(); }} onMouseOut={() => { this.setHoveringIndex(null); this.props.setCursorUnhover(); }}>
					<svg className="step__spot-svg" viewBox="0 0 100 100">
						<circle cx="50" cy="50" r="24" className="step__spot-circle"></circle>
						<circle cx="50" cy="50" r="12" className="step__spot-fill"></circle>
					</svg>
					{/*<div className="step__number">{i + 1}</div>*/}
				</div>
				<div className="step__info">
					{/*<div className="step__icon">
						<i className="step__svg process-icon process-icon-discovery"></i>
					</div>*/}
					<p className="step__text mb0">
						{ pad(i + 1, 2) + '. ' }
					</p>
					<h5 className="step__text">
						{ item.title }
					</h5>
				</div>
			</li>
		))

		const arcs = this.data.map((item, i) => (
			<path className={ classNames({ "step__arc" : true, "step__arc--active" : (activeIndex > i+1) })} id={"step__arc-" + (i + 1)} d={item.arcPath} key={i+1}/>
		))

		this.setColor();

		return (
		 <div className="process" id='process'>
			<div className="process__list">
				<svg viewBox="0 0 100 100">

				<path className="circle__arc circle__arc-1" d="M 31.248511814110604 4.729902906946947 A 49 49 0 0 1 68.7514881858894 4.729902906946947"/>
				<path className="circle__arc circle__arc-2" d="M 68.7514881858894 4.729902906946947 A 49 49 0 0 1 95.27009709305305 31.2485118141106"/>
				<path className="circle__arc circle__arc-3" d="M 95.27009709305305 31.2485118141106 A 49 49 0 0 1 95.27009709305305 68.7514881858894"/>
				<path className="circle__arc circle__arc-4" d="M 95.27009709305305 68.7514881858894 A 49 49 0 0 1 68.7514881858894 95.27009709305305"/>
				<path className="circle__arc circle__arc-5" d="M 68.7514881858894 95.27009709305305 A 49 49 0 0 1 31.248511814110604 95.27009709305305"/>
				<path className="circle__arc circle__arc-6" d="M 31.248511814110604 95.27009709305305 A 49 49 0 0 1 4.729902906946947 68.7514881858894"/>
				<path className="circle__arc circle__arc-7" d="M 4.729902906946947 68.7514881858894 A 49 49 0 0 1 4.72990290694694 31.24851181411063"/>
				<path className="circle__arc circle__arc-8" d="M 4.72990290694694 31.24851181411063 A 49 49 0 0 1 31.248511814110614 4.729902906946947"/>

				<g>
					{ arcs }
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
