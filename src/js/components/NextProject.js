import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import IntersectionVisible from "react-intersection-visible"

import GridLines from "../components/GridLines"
import Sidebar from "../components/Sidebar"
import ClipWrapper from "../components/ClipWrapper"

import { setCursorHover, setCursorUnhover } from "../actions/cursor"


class NextProject extends Component {

	constructor(props) {
		super(props);

		this.state = {	
			/*mouseY: 50,
			mouseX: window.innerWidth / 2,
			isHovering: false,*/
		}
	}


	handleMouseMove = (event) => {
		// console.log(event);
		/*const { clientX, clientY } = event;
		const threshold = clientY - this.refs.nextProject.clientHeight

		this.setState({
			mouseY: Math.min((threshold), 150),
		})*/
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
			"scrolling-section--black": true
		})

		// const clip = {
		//     clipPath: 'url(#clippy)'
		// }
		
		return (
			<IntersectionVisible onShow={(i) => i[0].target.classList.add("active-section")} onHide={(i) => i[0].target.classList.remove("active-section")}>
				<div className={classnames} onMouseEnter={this.props.setCursorHover} onMouseLeave={this.props.setCursorUnhover} onClick={this.props.setCursorUnhover}>
					
					<div className="next-project__spacer" style={this.refs.nextProject ? { height: this.refs.nextProject.clientHeight + 'px' } : null}/>
					
					<NavLink to={to}>
						<section style={style} ref="nextProject">
								<GridLines/>
								<div className="grid">
									{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
									<div className="grid__item grid__item--col-10">
										<h3 className="">Next Up</h3>
										<h2>{name}{/*<i className="iconcss icon-arrow-right"/>*/}</h2>
									</div>
								</div>
						</section>
					</NavLink>

					<ClipWrapper name={name} onSetActive={() => {}} black={true} sections={sections} activeSection={activeSection} />

				</div>
			</IntersectionVisible>
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