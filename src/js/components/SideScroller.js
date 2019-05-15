import React, {Component} from "react"
import classNames from "classnames"

export default class SideScroller extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isMobile: window.innerWidth <= 800,
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.detectMobile);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.detectMobile);
	}

	detectMobile = (event) => {
		this.setState({
			isMobile: window.innerWidth <= 800,
		})
	}


	render() {
		const { isMobile } = this.state;

		const margin = isMobile ? 12 : 60;

		const style = {
			overflowX: 'scroll',
			display: 'flex',
			width: '100%',
			justifyContent: 'space-between',
			WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 97.5%, transparent)',
		}

		const items = this.props.children.map((item, i) => {
			// let style = {};

			// i == this.props.children.length - 1 ? style = { margin: margin + 'px 0' + (2 * margin) + 'px' } :  style = { marginLeft: margin + 'px' }
			return React.cloneElement(item, { style: { marginLeft: margin + 'px' }, key: i })
		})
		
		return (
			<div style={style}>
				{ items }
				<div style={{ minWidth: margin + 'px'}}/>
				{/*<h2 style={{ position: 'absolute'}}><i className="iconcss icon-arrow-right"/></h2>*/}
			</div>
		);
	}
}