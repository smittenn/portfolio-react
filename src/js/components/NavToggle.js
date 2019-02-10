import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import splitLetter from '../services/splitLetter'

class Nav extends Component {

	constructor(props) {
		super(props);

		this.lastPosition = -1;

		// my Variables
		this.lastSection = false;
		this.replaceItemTop = -1;
		this.replaceItemBottom = -1;
		this.replaceItemHeight = -1;

	}

	
	componentDidMount() {
		this.startLoop();


	}

	componentWillUnmount() {
		this.stopLoop();
	}

	startLoop() {
		if( !this._frameId ) {
			this._frameId = window.requestAnimationFrame( this.loop );
		}
	}

	loop = () => {

		var top = window.pageYOffset;

		var sections = document.querySelectorAll('section');
		var replaceContainer = document.querySelectorAll('.js-replace');
		var replaceItem = document.querySelectorAll('.js-replace__item');

		if (replaceItem.length > 0) {
			// get top position of item from container, because image might not have loaded
			this.replaceItemTop = parseInt(replaceContainer[0].getBoundingClientRect().top);
			this.replaceItemHeight = replaceItem[0].offsetHeight;
			this.replaceItemBottom = this.replaceItemTop + this.replaceItemHeight;
		}

		var sectionTop = -1;
		var sectionBottom = -1;
		var currentSection = -1;

		// Fire when needed
		if (this.lastPosition == window.pageYOffset) {
			scroll(loop);
			return false;
		} 
		else {
			this.lastPosition = window.pageYOffset;

			Array.prototype.forEach.call(sections, function(el, i) {
				sectionTop = parseInt(el.getBoundingClientRect().top);
				sectionBottom = parseInt(el.getBoundingClientRect().bottom);

				if ((sectionTop <= this.replaceItemBottom) && (sectionBottom > this.replaceItemTop)) {
					currentSection = el.classList.contains('section--bg');

					if ( currentSection ) { 
						replaceContainer[0].classList.remove('js-replace--reverse');
					} else {
					replaceContainer[0].classList.add('js-replace--reverse')
					}
				}

				if ( (this.replaceItemTop < sectionTop) && ( sectionTop <= this.replaceItemBottom) ) {
					if (currentSection != this.lastSection)  {
						document.documentElement.style.setProperty('--replace-offset', 100 / this.replaceItemHeight * parseInt(sectionTop - this.replaceItemTop) + '%');
					}
				}

				if ( this.replaceItemTop >= sectionTop ) {
					document.documentElement.style.setProperty('--replace-offset', 0 + '%');
					this.lastSection = currentSection;
				}

			}); 
		}

		// perform loop work here

		// Set up next iteration of the loop
		this.frameId = window.requestAnimationFrame(this.loop);
	}

	stopLoop() {
		window.cancelAnimationFrame( this._frameId );
		// Note: no need to worry if the loop has already been cancelled
		// cancelAnimationFrame() won't throw an error
	}

	componentDidUpdate(prevProps) {
	}

	pad = (n, width, z) => (
		n.length >= width ? (n + '') : new Array(width - (n + '').length + 1).join(z || '0') + (n + '')
	)

	// loop = () => {
	// 	console.log('loop');

	// 	// var scroll = window.requestAnimationFrame
	// 	// || window.webkitRequestAnimationFrame
	// 	// || window.mozRequestAnimationFrame
	// 	// || window.msRequestAnimationFrame
	// 	// || window.oRequestAnimationFrame
	// 	// || function(callback){ window.setTimeout(callback, 1000/60) };

	// 	// Recall the loop
	// 	scroll( this.loop )
	// }


	render() {

		return (
			<header className="nav-toggle header"> 
				<div className="header__logo  js-replace">
					<div className="js-replace__item  js-replace__item--active">
						<div className="js-replace__content">
							<div className="logo">Logo</div>
						</div>
					</div>  

					<div className="js-replace__item">
						<div className="js-replace__content">
							<div className="logo  logo--invert">Logo</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	color: state.color,
})

export default connect(mapStateToProps)(Nav)



