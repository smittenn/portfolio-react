import React, {Component} from "react"
import classNames from "classnames"
import { connect } from "react-redux"

import Icon from "../components/Icon"
import palette from "../services/palette"

class SideScroller extends Component {

	constructor(props) {
		super(props);
	}

	scrollTo = () => {
		this._scrollButton.blur();

		if (window.scrollTo) {
			window.requestAnimationFrame(() => {
				window.scrollTo({
					left: 0,
					behavior: 'smooth'
				});
			});
		}
	}


	render() {

		const { style } = this.props;

		const classnames = classNames({
			"side-scroller": true,
		})

		const margin = this.props.isMobile ? 12 : 72;

		const items = this.props.children.map((item, i) => {
			return React.cloneElement(item, { 
				style: { marginRight: margin + 'px' }, 
				key: i 
			})
		})

		// console.log(this.props.children[0])
		
		return (
			<div className={classnames} style={style}>
				{/*<div className="grid side-scroller__controls">
					<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
					<div style={{ transform: 'scaleX(-1)' }} className={classNames({ 'disabled': true })}>
						<Icon icon='arrow' size={48}/>
					</div>
					<div className={classNames({ 'disabled': false })}>
						<Icon icon='arrow' size={48}/>
					</div>
					<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
				</div>*/}
				<div className="grid side-scroller__items">
					{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						{ items }
					{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(SideScroller)
