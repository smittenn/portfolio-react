import React, { Component } from 'react'
import classNames from "classnames"


class PageTransition extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isAnimating: false
		}

		// this.props.history.listen((location, action) => {
		// 	console.log(location, action);
		// 	this.setState({ isAnimating: true });
			
		// 	setTimeout(() => {
		// 		this.setState({ isAnimating: false });
		// 	}, 600)
		// });
	}

	componentWillUnmount() {
		// this.props.history.unlisten();
	}

	render() {
		const classnames = classNames({
			"page-transition": true,
			// "page-transition--animating": this.state.isAnimating,
		})

		return (
			<div className={classnames}>
				<div className="page-transition__wipe"/>
				<div className="page-transition__wipe"/>
			</div>
		)
	}
}

export default PageTransition
