import React from "react"
import { Component, Fragment } from "react"

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

	renderMedia = (media) => {
		if (Array.isArray(media))
			return media.map((item, i) => ( 
				<Fragment key={i}>
					{ i == 0 ? null : <div className="spacer__sm"/> }
					{this.renderMediaType(item)}
				</Fragment>
			))
		else
			return this.renderMediaType(media)
	}

	renderMediaType = (media) => {
		if (media.type == 'image') 
			return <Image src={media.src} aspectRatioWidth={media.aspectRatioWidth} aspectRatioHeight={media.aspectRatioHeight} caption={media.caption}/>

		else if (media.type == 'video')
			return <Video src={media.src} poster={media.poster} caption={media.caption} disableAutoplay={media.disableAutoplay} hideControls={media.hideControls}/>

		else if (media.type == 'iframe')
			return <IFrame src={media.src} aspectRatioWidth={media.aspectRatioWidth} aspectRatioHeight={media.aspectRatioHeight}/>

		else if (media.type == 'codepen')
			return <CodepenEmbed slug={media.slug} title={media.title} aspectRatioWidth={media.aspectRatioWidth} aspectRatioHeight={media.aspectRatioHeight}/>

		else if (media.type == 'side-scroller')
			return <SideScroller>
				{ this.props.children ? this.props.children : this.renderChildren(media)}
			</SideScroller>

		else if (media.type == 'carousel')
			return <Carousel>
				{ this.props.children ? this.props.children : this.renderChildren(media)}
			</Carousel>
	}

	renderChildren = (media) => (
		this.props.children ? this.props.children : (
			media.items.map((item, i) => (
				<div className={`grid__item grid__item--col-${item.gridItemWidth} grid__item--col-12-medium`} key={i}>
					{this.renderMediaType(item)}
				</div>
			)
		))
	)


	render() {

		const { title, subtitle, description1, description2, media } = this.props;

		const renderedMedia = this.renderMedia(media);
		
		return (
			<Fragment>
				<div className="grid">
					<div className="grid__row mb0">
						<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
							<h2 className={subtitle ? "h2 mb0" : "h2"}>
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
					<Fragment>
						{renderedMedia}
					</Fragment>
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
