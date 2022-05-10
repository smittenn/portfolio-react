import React, {Component} from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import IntersectionVisible from "react-intersection-visible"

import Image from "../../components/Image"

import addLineBreaks from "../../services/addLineBreaks"

class ProjectIntroBlock extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { col1Top, col1Bottom, col2Top, col2Bottom } = this.props;

		return (
			<div>
				<div className="grid">
					<div className="grid__row mb0">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<blockquote className="mr">
								{addLineBreaks(col1Top)}
							</blockquote>
							<blockquote className={ this.props.isMobile ? "mr" : "mr mb0"}>
								{addLineBreaks(col1Bottom)}
							</blockquote>
						</div>
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<blockquote className="mr">
								{addLineBreaks(col2Top)}
							</blockquote>
							<blockquote className="mb0 mr">
								{addLineBreaks(col2Bottom)}
							</blockquote>
						</div>
					</div>
				</div>
				{/*<div className="grid">
					<div className="grid__row">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							<div className="grid__row">
								<div className="grid__item grid__item--col-12">
									<Image src={media.src}  aspectRatioWidth={media.aspectRatioWidth} aspectRatioHeight={media.aspectRatioHeight}/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="grid">
					<div className="grid__row mb0">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<blockquote className="mr">
								{addLineBreaks(col3)}
							</blockquote>
						</div>
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<blockquote className="mb0 mr">
								{addLineBreaks(col4)}
							</blockquote>
						</div>
					</div>
				</div>*/}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(ProjectIntroBlock)