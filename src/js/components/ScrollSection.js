import React from "react"
import { Component, Fragment } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import IntersectionVisible  from "react-intersection-visible"
import IntersectionObserver  from "intersection-observer"

import DelayLink from "./DelayLink"
import NavToggle from "./NavToggle"
import Sidebar from "./Sidebar"
import ParallaxBackground from "./ParallaxBackground"
import HeroScrollButton from "./HeroScrollButton"
import GridLines from "./GridLines"
import TextLink from "./TextLink"
import ArrowGroup from "./ArrowGroup"
import Icon from "./Icon"

import palette from "../services/palette"
import pad from "../services/pad"
import splitLetter from "../services/splitLetter"

const EASING = "easeOutQuint"
const DURATION = 1200

class ScrollSection extends Component {

	constructor(props) {
		super(props);

		this.state = {
			homeButtonIsHovering: false,
		}
	}

	scrollTo = (element) => {
		scroller.scrollTo(element, {
			duration: DURATION,
			smooth: EASING,
		});
	}

	toggleHomeButtonHovering = () => {
		this.setState({ 
			homeButtonIsHovering: !this.state.homeButtonIsHovering
		})
	}

	createSectionNumber = () => (
		!this.props.disableSectionNumber ? (
			<div className="grid">
				{ this.props.right ? (
					<Fragment>
						<div className="grid__item--col-7 grid__item--hide-bp-medium"/>
						<div className="grid__item--col-5 grid__item--col-12-medium">
							<h6 className="scrolling-section__number uppercase mb0">{splitLetter(pad((this.props.sections.indexOf(this.props.name) + 1), 2) + ".")}</h6>
						</div>
					</Fragment>
				) : (
					<Fragment>
						<div className="grid__item--col-1 grid__item--hide-bp-medium"/>
						<div className="grid__item--col-10 grid__item--col-12-medium">
							<h6 className="scrolling-section__number uppercase mb0">{splitLetter(pad((this.props.sections.indexOf(this.props.name) + 1), 2) + ".")}</h6>
						</div>
					</Fragment>
				)}
			</div>
		) : null
	)

	render() {

		const { name, onSetActive, black, style, sections, activeSection, fullHeight, disableSectionNumber, right } = this.props;
		const { easing, duration } = this.state;

		const classnames = classNames({
			"scrolling-section": true,
			"scrolling-section--black": this.props.black,
			"scrolling-section--grey": this.props.grey
		})

		const updatedStyle = {};
		(style) ? Object.assign(updatedStyle, style) : null

		if (fullHeight) {
			Object.assign(updatedStyle, {
				minHeight: this.props.windowHeight,
				display: 'flex',
				justifyContent: 'center'
			})
		}

		const indexOfName = sections.indexOf(name);
		const clipWrapperLeft = (
			<div className="clip-wrapper__left" style={{ minHeight: this.props.windowHeight }}>
				<DelayLink to="/">
					<TextLink hideLine>
						<h4 className="mb0" onMouseEnter={ this.toggleHomeButtonHovering } onMouseLeave={ this.toggleHomeButtonHovering }>
							<span 
							className={classNames({ "outline": this.state.homeButtonIsHovering })}>
								•
							</span>
						</h4>
					</TextLink>
				</DelayLink>
				{ sections.length > 1 ? (
					<ArrowGroup isVertical>
						{ (indexOfName - 1 > -1) ? (
							<a>
								<div onClick={() => this.scrollTo(sections[indexOfName - 1]) }/>
							</a>
							/*<Link to={sections[indexOfName - 1]} spy={true} smooth={easing} duration={duration} hashSpy={false} offset={0}/>*/
						) : null}
						{ (indexOfName + 1 < sections.length) ? (
							<a>
								<div onClick={() => this.scrollTo(sections[indexOfName + 1]) }/>
							</a>
							/*<Link to={sections[indexOfName + 1]} onClick={this.scrollTo(sections[indexOfName + 1])} spy={true} smooth={easing} duration={duration} hashSpy={false} offset={0}/>*/
						) : null}
					</ArrowGroup>
				) : null}
				{ this.props.abbreviation == 'R' ? <TextLink hideUnderline><a href="assets/img/resume/ericsmith-resume.png" target="_blank"><h3 className="mb0"><Icon icon='download' size={48} color={palette('brand-black')}/></h3></a></TextLink> : null }
			</div>
		)

		return (
			name ? (
			<Element name={name} className={classnames}>
				<IntersectionVisible options={{threshold: 0}}
				onShow={(i) => i[0].target.classList.add("active-section")}
				onHide={(i) => i[0].target.classList.remove("active-section")}>

					<section style={updatedStyle}>
						{ this.props.background }
						{<GridLines/>}
						{ this.createSectionNumber() }
						{ this.props.children }
					</section>

					<div className="clip-wrapper">
						{ sections.length > 1 ? (
							<Fragment>
								<Link style={{display: 'none'}} to={name} spy={true} smooth={easing} duration={duration} hashSpy={false} offset={0} onSetActive={onSetActive} />

								{ (name == sections[0]) ? (
									<HeroScrollButton to={sections[1]} onSetActive={onSetActive} />
								) : null }

								{ (name == sections[1]) ? (
									<HeroScrollButton to={name} onSetActive={onSetActive} />
								) : null }

								<Sidebar sections={sections} activeSection={activeSection}/>
							</Fragment>
						) : null }

						{ clipWrapperLeft }

						<NavToggle sections={sections}/>
					</div>
				</IntersectionVisible>
			</Element>
			) : (
			<div className={classnames}>
				<IntersectionVisible options={{threshold: .25}}
				onShow={(i) => i[0].target.classList.add("active-section")}
				onHide={(i) => i[0].target.classList.remove("active-section")}>

					<section style={updatedStyle}>
						{ this.props.background }
						<GridLines/>
						{ this.props.children }
					</section>

					<div className="clip-wrapper">

						{ clipWrapperLeft }

						<Sidebar sections={sections} activeSection={activeSection}/>

						<NavToggle sections={sections}/>
					</div>
				</IntersectionVisible>
			</div>
			)
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isMobile: state.isMobile,
	windowHeight: state.windowHeight,
})

export default connect(mapStateToProps)(ScrollSection)
