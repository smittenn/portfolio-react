import React, {Component} from "react"
import classNames from "classnames"
import IntersectionVisible from "react-intersection-visible"

import pad from '../services/pad'
import splitWord from '../services/splitWord'

export default class ProcessDiagram extends Component {

	constructor(props) {
		super(props);

		this.state = {
			prevIndex: null,
			activeIndex: null,
			hoveringIndex: null,
			activeItem: {
				title: `My User Experience Process`,
				body: ``
			}
		}

		this.data = [
			{
				title: `Discover`,
				body: `Interview users to understand their current process and workflow.`,
				arcPath: `M 50 1 A 49 49 0 0 1 84.64823227814082 15.351767721859176`
			},
			{
				title: `Ideate`,
				body: `Meet with stakeholders and developers to collaboratively generate design ideas.`,
				arcPath: `M 84.64823227814082 15.351767721859176 A 49 49 0 0 1 99 50`
			},
			{
				title: `Wireframe`,
				body: `Consolidate the ideas and create a wireframe to communicate the design and functionality with developers.`,
				arcPath: `M 99 50 A 49 49 0 0 1 84.64823227814082 84.64823227814082`
			},
			{
				title: `Prototype`,
				body: `Create a responsive and clickable coded prototype built with HTML, CSS, and JavaScript.`,
				arcPath: `M 84.64823227814082 84.64823227814082 A 49 49 0 0 1 50 99`
			},
			{
				title: `User Testing`,
				body: `Test the prototype using Usability Testing methods to gather thorough feedback.`,
				arcPath: `M 50 99 A 49 49 0 0 1 15.351767721859176 84.64823227814082`
			},
			{
				title: `Experience Mapping`,
				body: `Synthesize the feedback and map the users' experience with the prototype to improve it in the future iterations.`,
				arcPath: `M 15.351767721859176 84.64823227814082 A 49 49 0 0 1 1 50.00000000000001`
			},
			{
				title: `Refining`,
				body: `Refine and iterate on the design to further improve the users' experience.`,
				arcPath: `M 1 50.00000000000001 A 49 49 0 0 1 15.351767721859161 15.351767721859176`
			},
			{
				title: `Deliver & Backlog`,
				body: `Deliver changes to the prototype and list the possible improvements for the future.`,
				arcPath: `M 15.351767721859161 15.351767721859176 A 49 49 0 0 1 49.99999999999999 1`
			}
		]
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

	render() {

		const { activeIndex, prevIndex, activeItem, hoveringIndex } = this.state;


		const steps = this.data.map((item, i) => (
			<li className={classNames({ "step": true, "step--hovering" : hoveringIndex == i + 1 })} key={i + 1} onClick={() => this.setActiveStep(i+1)}>
				<div className="step__spot" onMouseOver={() => this.setHoveringIndex(i+1)} onMouseOut={() => this.setHoveringIndex(null)}>
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
			<path className={ classNames({ "step__arc" : true, "step__arc--active" : (activeIndex > i+1) })} id={"step__arc-" + (i + 1)} d={item.arcPath} key={i+1} style={(activeIndex > i+1) ? { transitionDelay: activeIndex > prevIndex ? (activeIndex - prevIndex) * 0.3 + 's' : (prevIndex - activeIndex) * 0.3 + 's' } : null}/>
		))

		return (
		 <div className="process" id='process'>
			<div className="process__list">
				<svg viewBox="0 0 100 100">
				<defs>
				  <linearGradient id='grad-arc-1'>
					<stop/>
					<stop offset='100%'/>
				  </linearGradient>
				  <linearGradient id='grad-arc-2'>
					<stop/>
					<stop offset='100%'/>
				  </linearGradient>
				  <linearGradient id='grad-arc-3'>
					<stop/>
					<stop offset='100%'/>
				  </linearGradient>
				  <linearGradient id='grad-arc-4'>
					<stop/>
					<stop offset='100%'/>
				  </linearGradient>
				  <linearGradient id='grad-arc-5'>
					<stop/>
					<stop offset='100%'/>
				  </linearGradient>
				  <linearGradient id='grad-arc-6'>
					<stop/>
					<stop offset='100%'/>
				  </linearGradient>
				  <linearGradient id='grad-arc-7'>
					<stop/>
					<stop offset='100%'/>
				  </linearGradient>
				  <linearGradient id='grad-arc-8'>
					<stop/>
					<stop offset='100%'/>
				  </linearGradient>
				</defs>

				<path className="circle__arc circle__arc-1" id="circle__arc-1" d="M 31.248511814110604 4.729902906946947 A 49 49 0 0 1 68.7514881858894 4.729902906946947"/>
				<path className="circle__arc circle__arc-2" id="circle__arc-2" d="M 68.7514881858894 4.729902906946947 A 49 49 0 0 1 95.27009709305305 31.2485118141106"/>
				<path className="circle__arc circle__arc-3" id="circle__arc-3" d="M 95.27009709305305 31.2485118141106 A 49 49 0 0 1 95.27009709305305 68.7514881858894"/>
				<path className="circle__arc circle__arc-4" id="circle__arc-4" d="M 95.27009709305305 68.7514881858894 A 49 49 0 0 1 68.7514881858894 95.27009709305305"/>
				<path className="circle__arc circle__arc-5" id="circle__arc-5" d="M 68.7514881858894 95.27009709305305 A 49 49 0 0 1 31.248511814110604 95.27009709305305"/>
				<path className="circle__arc circle__arc-6" id="circle__arc-6" d="M 31.248511814110604 95.27009709305305 A 49 49 0 0 1 4.729902906946947 68.7514881858894"/>
				<path className="circle__arc circle__arc-7" id="circle__arc-7" d="M 4.729902906946947 68.7514881858894 A 49 49 0 0 1 4.72990290694694 31.24851181411063"/>
				<path className="circle__arc circle__arc-8" id="circle__arc-8" d="M 4.72990290694694 31.24851181411063 A 49 49 0 0 1 31.248511814110614 4.729902906946947"/>

				<g>
					{ arcs }
				</g>

			</svg>

			<div className="title">
				<h3 className={ activeIndex ? null : "mb0"}>{ activeItem.title }</h3>
				<blockquote className="mb0">{ splitWord(activeItem.body) }</blockquote>
			</div>

			<ul>
			{ steps }
			</ul>

			</div>
		</div>
		);
	}
}
