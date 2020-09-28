import React from "react"
import { Component, Fragment } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import IntersectionVisible from "react-intersection-visible"

import Image from "../../components/Image"
import Video from "../../components/Video"
import IFrame from "../../components/IFrame"
import CodepenEmbed from "../../components/CodepenEmbed"
import SideScroller from "../../components/SideScroller"
import Carousel from "../../components/Carousel"

import addLineBreaks from "../../services/addLineBreaks"
import splitWord from "../../services/splitWord"
import splitLetter from "../../services/splitLetter"

export default class ProjectSectionBlock extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { title, subtitle, description1, description2, media } = this.props;

		const renderedMedia = (() => {
			if (media.type == 'image') 
				return <Image src={media.src} aspectRatioWidth={media.aspectRatioWidth} aspectRatioHeight={media.aspectRatioHeight} caption={media.caption}/>

			else if (media.type == 'video')
				return <Video src={media.src} poster={media.poster}/>

			else if (media.type == 'iframe')
				return <IFrame src={media.src} aspectRatioWidth={media.aspectRatioWidth} aspectRatioHeight={media.aspectRatioHeight}/>

			else if (media.type == 'codepen')
				return <CodepenEmbed slug={media.slug} title={media.title} aspectRatioWidth={media.aspectRatioWidth} aspectRatioHeight={media.aspectRatioHeight}/>

			else if (media.type == 'side-scroller')
				return <SideScroller>{this.props.children}</SideScroller>

			else if (media.type == 'carousel')
				return <Carousel>{this.props.children}</Carousel>
		})()
		
		return (
			<Fragment>
				<div className="grid">
					<div className="grid__row mb0">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<h2 className={subtitle ? "mb0" : null}>
								{ (title.split(" ").length > 1) ? splitWord(title) : splitLetter(title)}
							</h2>
							{ subtitle ? <h4 className="fade">{subtitle}</h4> : null }
						</div>						
					</div>
					<div className="grid__row">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<blockquote className="mr">{addLineBreaks(description1)}</blockquote>
						</div>
						{ description2 ? (<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
							<blockquote className="mr">{addLineBreaks(description2)}</blockquote>
						</div>) : null}
					</div>
				</div>
				{ media.type == 'side-scroller' ? (
					<Fragment>{renderedMedia}</Fragment>
				) : (
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							{renderedMedia}
						</div>
					</div>
				)}
			</Fragment>
		);
	}
}