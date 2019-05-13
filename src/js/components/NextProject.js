import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"

export default class NextProject extends Component {

	constructor(props) {
		super(props);

		this.state = {	
			arrowX: 0,
			arrowY: 0,
			isHovering: false,
		}
	}

	componentDidMount() {
		// window.addEventListener('mousemove', this.setArrowPosition)
	}

	componentWillUnmount() {
		// window.removeEventListener('mousemove', this.setArrowPosition)
	}

	// componentDidUpdate(prevProps) {}

	setArrowPosition = (event) => {
		// console.log(event)
		const { pageX, pageY } = event;
		
		this.setState({
			arrowX: pageX,
			arrowY: pageY - this.refs.nextProject.offsetTop,
		})
	}

	handleHover = () => {
		this.setState({ 
			isHovering: !this.state.isHovering 
		})
	}

	render() {

		const { to, name, style, sections, activeSection } = this.props;

		const classnames = classNames({
			"next-project": true,
		})
		
		return (
			<div className={classnames} onMouseMove={this.setArrowPosition} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} ref="nextProject">
				<NavLink to={to}>
					<section className="black" style={style}>
							<GridLines/>
								<div className="grid">
									<div className="grid__item grid__item--col-12">
										<h3 className="no-mb">Next Up</h3>
										<h2>{name}</h2>

										<h2 style={{
											opacity: this.state.isHovering ? 1 : 0,
											position: 'absolute',
											left: this.state.arrowX,
											top: this.state.arrowY,
										}}><i className="iconcss icon-arrow-right"/></h2>
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