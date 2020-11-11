import React, { Component } from "react"
import classNames from "classnames"
import { connect } from "react-redux"
import { setCursorHover, setCursorUnhover } from "../actions/cursor"

import Icon from "../components/Icon"
import palette from "../services/palette"

class ArrowGroup extends Component {

	constructor(props) {
		super(props);
	}

	timeoutCursor = () => {
		this.props.setCursorUnhover()
		setTimeout(() => {
			this.props.setCursorHover()
		}, 600);
	}

	render() {

		const { isVertical } = this.props;

		const classnames = classNames({
			"arrow-group": true,
			"arrow-group--vertical": isVertical,
		})

		const children = this.props.children.map((item, i) => (
			item ? (
				React.cloneElement(item, {
					key: i,
					onMouseOver: this.props.setCursorHover,
					onClick: this.timeoutCursor,
					onMouseLeave: this.props.setCursorUnhover,
				})
			) : null
		))

		return (
			<div className={classnames}>
				<div className="arrow-group__first">
					<Icon icon='arrow' size={40}/>
				</div>
				<div className="arrow-group__second">
					<Icon icon='arrow' size={40}/>
				</div>
				<div className="arrow-group__links">
					{ children }
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArrowGroup)
