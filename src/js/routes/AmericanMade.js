import React, {Component} from 'react'
import { connect } from 'react-redux'

import Nav from "../components/Nav";
import ParallaxHeader from "../components/ParallaxHeader"

import GridLines from "../components/GridLines"
import ScrollArrow from "../components/ScrollArrow"

import splitWord from "../services/splitWord"

import { reset, setCounter } from '../actions/counter'
import { americanMade } from '../actions/abbreviation'
import { setNavWhite, setNavBlack } from "../actions/color"

class AmericanMade extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.americanMade();
		this.props.reset();
		this.props.setNavWhite();
	}


	constructor(props) {
		super(props);

	}

	render() {

		return (
			<div>
				<ParallaxHeader 
				headerText={[<span className="outline">American&nbsp;</span>, <span className="outline">Made&nbsp;</span>, `is a film site created for Universal Pictures`]}
				bgImage={"../assets/img/american-made/output.gif"}
				strength={200}
				/>
				<ScrollArrow/>
				<section>
					<div className="grid">
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							{/*<h1>The Sky <br/> is Never <br/>the Limit</h1>*/}
							{<h2>I took a deep dive into the story of the American Made film when the NBCUX Lab partnered with Universal Pictures.</h2> }
							<p>The NBCUX Lab operates as an internal agency at NBCUniversal working with different organizations within NBCU on a variety of projects ranging from consumer film sites to internal tools and content management systems. <br/><br/>	Our final design is the product of many late nights and too many cups of caffeine. It all paid off though—the film earned $16.7 million at the box office the first weekend and there was a 63% conversion rate from our site to purchase tickets! I didn't do it alone, <a href="https://www.linkedin.com/in/oleksandr-lebedyev/">Oleksandr Lebedyev</a> and <a href="https://www.linkedin.com/in/poplar-bai/">Poplar Bai</a> helped greatly.</p>
						</div>
						<div className="grid__item grid__item--col-6">
						<div className="grid__item grid__item--col-12">
							<p className="uppercase">Role</p>
							<h4>Lead Designer</h4>
						</div>
						<div className="grid__item grid__item--col-3">
							<p className="uppercase">Date</p>
							<h4>June, 2017</h4>
						</div>
						<div className="grid__item grid__item--col-3">
							<p className="uppercase">Client</p>
							<h4>NBCUX Lab</h4> 
						</div>
						</div>

					</div>
				</section>
				<section>
					<img src="../assets/img/american-made/columbia.gif"/>
				</section>
				<GridLines/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	counter: state.counter,
	abbreviation: state.abbreviation,
})

const mapDispatchToProps = dispatch => ({
	reset: () => dispatch(reset()),
	americanMade: () => dispatch(americanMade()),
	setNavWhite: () => dispatch(setNavWhite()),
	setNavBlack: () => dispatch(setNavBlack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AmericanMade)