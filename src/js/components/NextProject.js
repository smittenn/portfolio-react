import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"

import { setCursorHover, setCursorUnhover } from "../actions/cursor"


class NextProject extends Component {

	constructor(props) {
		super(props);

		this.state = {	
			mouseY: 50,
			mouseX: window.innerWidth / 2,
			isHovering: false,
		}
	}


	handleMouseMove = (event) => {
		// console.log(event);
		const { clientX, clientY } = event;
		const threshold = clientY - this.refs.nextProject.clientHeight

		this.setState({
			mouseY: Math.min((threshold), 150),
			// mouseX: clientX,
		})
	}

	handleHover = () => {
		this.setState({ 
			isHovering: !this.state.isHovering 
		})
	}

	render() {

		const { to, name, style, sections, activeSection, black } = this.props;

		const classnames = classNames({
			"next-project": true,
			"next-project--black": black,
		})

		const clip = {
		    clipPath: 'url(#clippy)'
		}
		
		return (
			<div className={classnames} onMouseEnter={this.props.setCursorHover} onMouseLeave={this.props.setCursorUnhover} onClick={this.props.setCursorUnhover} onMouseMove={this.handleMouseMove} ref="nextProject">
				<svg viewBox={`0 0 ${window.innerWidth} 600`} width="100%" height="100%" preserveAspectRatio="none" style={{ position: 'absolute', width: '100%', height: '100%' }}>
					<clipPath id="clippy">
						<path d={`M 0 600 L ${window.innerWidth} 600 L ${window.innerWidth} 45 Q ${this.state.mouseX} ${this.state.mouseY} 0 45 Z`} vectorEffect="non-scaling-stroke"></path>
					</clipPath>
				</svg>
				<GridLines/>
				<NavLink to={to}>
					<section className="black" style={Object.assign(clip, style)}>
							<GridLines/>
							<div className="grid">
								<div className="grid__item grid__item--col-12">
									<h3 className="">Next Up</h3>
									<h2>{name}<i className="iconcss icon-arrow-right"/></h2>
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

const mapStateToProps = state => ({
	isCursorHovering: state.isCursorHovering,
})

const mapDispatchToProps = dispatch => ({
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})


export default connect(mapStateToProps, mapDispatchToProps)(NextProject)