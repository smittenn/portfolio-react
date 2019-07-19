import React, {Component} from "react"
import classNames from "classnames"
import { connect } from 'react-redux'

class SideScroller extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const classnames = classNames({
			"side-scroller": true,
		})


		const margin = this.props.isMobile ? 12 : 72;

		const style = {
			overflowX: 'scroll',
			display: 'flex',
			width: '100%',
			justifyContent: 'space-between',
			WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 95%, transparent)',
		}

		const items = this.props.children.map((item, i) => {
			// let style = {};

			// i == this.props.children.length - 1 ? style = { margin: margin + 'px 0' + (2 * margin) + 'px' } :  style = { marginLeft: margin + 'px' }
			return React.cloneElement(item, { style: { marginLeft: margin + 'px' }, key: i })
		})
		
		return (
			<div style={style} className={classnames}>
				{/*<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>*/}
				{ items }
				<div style={{ minWidth: margin + 'px'}}/>
				{/*<h2 style={{ position: 'absolute'}}><i className="iconcss icon-arrow-right"/></h2>*/}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(SideScroller)