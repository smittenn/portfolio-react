import React, {Component} from "react"
import classNames from "classnames"
import IntersectionVisible from "react-intersection-visible"

export default class ProcessDiagram extends Component {

	constructor(props) {
		super(props);

		this.state = {
			src: '',
		}


	}

	render() {

		const {  } = this.props;


		return (
		  <div className="process" id='process'>
			<ul className="process__list">
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

			    <path className="step__arc step__arc-2" id="step__arc-1" d="M 50 1 A 49 49 0 0 1 84.64823227814082 15.351767721859176"></path>
		        <path className="step__arc step__arc-2" id="step__arc-2" d="M 84.64823227814082 15.351767721859176 A 49 49 0 0 1 99 50"></path>
		        <path className="step__arc step__arc-3" id="step__arc-3" d="M 99 50 A 49 49 0 0 1 84.64823227814082 84.64823227814082"></path>
		        <path className="step__arc step__arc-4" id="step__arc-4" d="M 84.64823227814082 84.64823227814082 A 49 49 0 0 1 50 99"></path>
		        <path className="step__arc step__arc-5" id="step__arc-5" d="M 50 99 A 49 49 0 0 1 15.351767721859176 84.64823227814082"></path>
		        <path className="step__arc step__arc-6" id="step__arc-6" d="M 15.351767721859176 84.64823227814082 A 49 49 0 0 1 1 50.00000000000001"></path>
		        <path className="step__arc step__arc-7" id="step__arc-7" d="M 1 50.00000000000001 A 49 49 0 0 1 15.351767721859161 15.351767721859176"></path>
		        <path className="step__arc step__arc-8" id="step__arc-8" d="M 15.351767721859161 15.351767721859176 A 49 49 0 0 1 49.99999999999999 1"></path>

			  </svg>
			  <h3 className="title mb0">My User Experience Process</h3>

			  <li className="step step-1" id="step-1">
				<div className="step__spot">
				  <svg className="step__spot-svg" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="40" className="step__spot-fill"></circle>
					<circle cx="50" cy="50" r="48" className="step__spot-circle"></circle>
				  </svg>
				</div>
				<div className="step__number">1</div>
				<div className="step__info">
				  <div className="step__header">
					<div className="step__icon">
					  <i className="step__svg process-icon process-icon-discovery"></i>
					</div>
					<div className="step__title">Discover</div>
				  </div>
				  <div className="step__text">
					Interview users to understand their current process and workflow.
				  </div>
				  <div className="step__role">
					The UX Design team <br />
					&amp; Product team
				  </div>
				</div>
			  </li>

			  <li className="step step-2" id="step-2">
				<div className="step__spot">
				  <svg className="step__spot-svg" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="40" className="step__spot-fill"></circle>
					<circle cx="50" cy="50" r="48" className="step__spot-circle"></circle>
				  </svg>
				</div>
				<div className="step__number">2</div>
				<div className="step__info" id="step__info-2">
				  <div className="step__header">
					<div className="step__icon">
					  <i className="step__svg process-icon process-icon-ideation"></i>
					</div>
					<div className="step__title">Ideate</div>
				  </div>
				  <div className="step__text">
					Meet with stakeholders and developers to collaboratively generate design ideas.
				  </div>
				  <div className="step__role">
				  </div>
				</div>
			  </li>

			  <li className="step step-3" id="step-3">
				<div className="step__spot">
				  <svg className="step__spot-svg" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="40" className="step__spot-fill"></circle>
					<circle cx="50" cy="50" r="48" className="step__spot-circle"></circle>
				  </svg>
				</div>
				<div className="step__number">3</div>
				<div className="step__info" id="step__info-3">
				  <div className="step__header">
					<div className="step__icon">
					  <i className="step__svg process-icon process-icon-wireframes"></i>
					</div>
					<div className="step__title">Wireframe</div>
				  </div>
				  <div className="step__text">
					Consolidate the ideas and create a wireframe to communicate the design and functionality with developers.
				  </div>
				  <div className="step__role">
				  </div>
				</div>
			  </li>

			  <li className="step step-4" id="step-4">
				<div className="step__spot">
				  <svg className="step__spot-svg" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="40" className="step__spot-fill"></circle>
					<circle cx="50" cy="50" r="48" className="step__spot-circle"></circle>
				  </svg>
				</div>
				<div className="step__number">4</div>
				<div className="step__info">
				  <div className="step__header">
					<div className="step__icon">
					  <i className="step__svg process-icon process-icon-prototype"></i>
					</div>
					<div className="step__title">Prototype</div>
				  </div>
				  <div className="step__text">
					Create a responsive and clickable coded prototype built with HTML, CSS, and JavaScript.
				  </div>
				  <div className="step__role">
				  </div>
				</div>
			  </li>

			  <li className="step step-5" id="step-5">
				<div className="step__spot">
				  <svg className="step__spot-svg" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="40" className="step__spot-fill"></circle>
					<circle cx="50" cy="50" r="48" className="step__spot-circle"></circle>
				  </svg>
				</div>
				<div className="step__number">5</div>
				<div className="step__info">
				  <div className="step__header">
					<div className="step__icon">
					  <i className="step__svg process-icon process-icon-testing"></i>
					</div>
					<div className="step__title">User Testing</div>
				  </div>
				  <div className="step__text">
					Test the prototype using Usability Testing methods to gather thorough feedback.
				  </div>
				  <div className="step__role">
				  </div>
				</div>
			  </li>

			  <li className="step step-6" id="step-6">
				<div className="step__spot">
				  <svg className="step__spot-svg" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="40" className="step__spot-fill"></circle>
					<circle cx="50" cy="50" r="48" className="step__spot-circle"></circle>
				  </svg>
				</div>
				<div className="step__number">6</div>
				<div className="step__info">
				  <div className="step__header">
					<div className="step__icon">
					  <i className="step__svg process-icon process-icon-mapping"></i>
					</div>
					<div className="step__title">Experience Mapping</div>
				  </div>
				  <div className="step__text">
					Synthesize the feedback and map the users' experience with the prototype to improve it in the future iterations.
				  </div>
				  <div className="step__role">
				  </div>
				</div>
			  </li>

			  <li className="step step-7" id="step-7">
				<div className="step__spot">
				  <svg className="step__spot-svg" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="40" className="step__spot-fill"></circle>
					<circle cx="50" cy="50" r="48" className="step__spot-circle"></circle>
				  </svg>
				</div>
				<div className="step__number">7</div>
				<div className="step__info">
				  <div className="step__header">
					<div className="step__icon">
					  <i className="step__svg process-icon process-icon-refining"></i>
					</div>
					<div className="step__title">Refining</div>
				  </div>
				  <div className="step__text">
					Refine and iterate on the design to further improve the users' experience.
				  </div>
				  <div className="step__role">
				  </div>
				</div>
			  </li>

			  <li className="step step-8" id="step-8">
				<div className="step__spot">
				  <svg className="step__spot-svg" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="40" className="step__spot-fill"></circle>
					<circle cx="50" cy="50" r="48" className="step__spot-circle"></circle>
				  </svg>
				</div>
				<div className="step__number">8</div>
				<div className="step__info">
				  <div className="step__header">
					<div className="step__icon">
					  <i className="step__svg process-icon process-icon-clipboard"></i>
					</div>
					<div className="step__title">Deliver and Backlog</div>
				  </div>
				  <div className="step__text">
					Deliver changes to the prototype and list the possible improvements for the future.
				  </div>
				  <div className="step__role">
				  </div>
				</div>
			  </li>
			</ul>
		  </div>
		);
	}
}
