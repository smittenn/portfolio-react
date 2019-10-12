import React, {Component} from "react"
import classNames from "classnames"
import { connect } from 'react-redux'

class SideScroller extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const classnames = classNames({
			"grid" : true,
			"side-scroller": true,
		})


		const margin = this.props.isMobile ? 12 : 72;

		const items = this.props.children.map((item, i) => {
			return React.cloneElement(item, { style: { marginRight: margin + 'px' }, key: i })
		})
		
		return (
			<div className={classnames}>
				{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
				{ items }
				{/*<div style={{ minWidth: margin + 'px'}}/>*/}
				{/*<h2 style={{ position: 'absolute'}}><i className="iconcss icon-arrow-right"/></h2>*/}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(SideScroller)