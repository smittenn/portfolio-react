import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import classNames from 'classnames'
import { connect } from 'react-redux'

import { openSidebar, closeSidebar } from '../actions/sidebar'
import { setCursorHover, setCursorUnhover } from "../actions/cursor"

import createNewId from '../services/createNewId'
import splitLetter from "../services/splitLetter"
import pad from '../services/pad'
import textWidth from '../services/textWidth'

class Sidebar extends Component {

	constructor(props) {
		super(props);

		const lengths = props.sections.map(section => textWidth(section.toUpperCase()));
    const max = Math.floor(lengths.reduce((a, b) => Math.max(a, b)))

    // this.labelRefs = props.sections.map(section => {
    // 	return React.createRef();
    // });

    this.state = {
    	max: max,
    	clientRect: 0
    }
	}

	componentDidMount () {
		// this.calcWidths();
    // console.log(this.labelRefs);

    // console.log(this.refs);
		// for (var ref in this.refs) {
  //     // console.log(this.refs[ref].offsetWidth);
  //   }
    // console.log(values);
   //  this.getRectsInterval = setTimeout(() => {
			// this.calcWidths();
   //  }, 5000);
  }

  componentDidUpdate() {
		// this.calcWidths();
  }

  // componentDidMount() {
  //   this.getRectsInterval = setInterval(() => {
  //   	const containerRect = document.querySelectorAll('.sidebar__label')
  //     console.log(containerRect);
  //   }, 10000);
  // }

  componentWillUnmount() {
    // clearInterval(this.getRectsInterval);
  }

  calcWidths = () => {
		const labels = Array.prototype.slice.call(document.querySelectorAll('.sidebar__label'))
		const widths = labels.map(label => label.offsetWidth)
		const max = widths.reduce((a, b) => Math.max(a,b))
		
		this.setState({
			max: max
		})
	}


	refCallback = element => {
		if (element) {
			console.log(element.current)
		}
	}

	handleClickOutside = (event) => {
		if (!this.refs.sidebar.contains(event.target)) {
			// console.log(this.refs);
			// this.props.closeSidebar();
		}
	}

  // setRef = node => node && this.setState(prevState => {clientRect: Math.max(node.getBoundingClientRect().width, prevState.clientRect)});

	render() {

		const { sections, activeSection } = this.props;

		const classnames = classNames({
			"sidebar": true,
			"sidebar--right": true,
			"sidebar--open": this.props.isSidebarOpen,
			"sidebar--open": this.props.isSidebarOpen,
			[`sidebar--length${this.state.max}`]: true
		})

		const sidebarItems = sections.map((section, i) => 
			<li key={i} className="sidebar__item">
				<Link to={ this.props.isSidebarOpen ? section : "" } smooth={"easeOutQuint"} duration={1200} className={classNames({ "active": sections[i] == activeSection })} onClick={this.props.isMobile ? this.props.closeSidebar : this.props.setCursorUnhover} onMouseEnter={ this.props.setCursorHover }  onMouseLeave={ this.props.setCursorUnhover } >
					{ i == 0 ? <div className="sidebar__border sidebar__border--top"/> : null }
					<h6 className="sidebar__number mb0 uppercase">{pad(i + 1, 2)}.</h6>
					<div className="sidebar__dash"></div>
					<h6 className="sidebar__label mb0 uppercase">
						{ section }
					</h6>
					<h6 className="sidebar__indicator mb0">&nbsp;&nbsp;•&nbsp;</h6>
				</Link>
				<div className="sidebar__border"/>
			</li>
		)
		
		return (
			<div className={classnames} ref="sidebar" style={{ minHeight: this.props.windowHeight }} >
				<ul className="sidebar__inner" onClick={this.props.isSidebarOpen ? null : this.props.openSidebar} onMouseEnter={this.props.isMobile ? null : this.props.openSidebar} onMouseLeave={this.props.isMobile ? null : this.props.closeSidebar}>
					{ sidebarItems }
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isSidebarOpen: state.isSidebarOpen,
	isMobile: state.isMobile,
	windowHeight: state.windowHeight,
})

const mapDispatchToProps = dispatch => ({
	openSidebar: () => dispatch(openSidebar()),
	closeSidebar: () => dispatch(closeSidebar()),
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
