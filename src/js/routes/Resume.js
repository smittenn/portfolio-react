import React, {Component} from "react"
import { connect } from "react-redux"

import { reset, setCounter } from "../actions/counter"
import { home, process, resume, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce, cisco, protohack } from "../actions/abbreviation"
import { setPanel } from "../actions/panel"

import ScrollSection from "../components/ScrollSection"
import TextLink from "../components/TextLink"

import { about } from "../data/about"

class Resume extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeSection: "intro",
			sections: [
				"resume",
			],
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.resume();
		this.props.reset();
		this.props.setPanel("All Pages");
	}
		
	setActiveSection = (idx) => {
		this.setState({
			activeSection: this.state.sections[idx],
		})
		this.props.setCounter(idx + 1);
	}

	render() {
		const { activeSection, sections } = this.state;

		const formattedRole = about.role.split(" ").map((word, i) => <span key={i} className="inherit--brand-red"><span className="outline">{word} </span></span>)
		const formattedTagline = [`${about.name} is an `, ...formattedRole, `in ${about.location}.`]
		
		return (
			<article>
				<ScrollSection 
				name={sections[0]}
				disableSectionNumber
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(0); }}>
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--col-2-desktop grid__item--hide-bp-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-6-desktop grid__item--col-12-medium">
							<div className="grid__row">
								<h2 className="h2 mb0">{formattedTagline}</h2>
							</div>
							<div className="grid__row">
								<div className="grid__item--col-12">
									<blockquote className="mb0">
										<hr/>
										<div className="grid__row mb0">
											<TextLink><a href="mailto:hi@ericsmithux.com">hi@ericsmithux.com</a></TextLink>
											<h5 className="mb0 inherit--brand-red">&nbsp;&nbsp;•&nbsp;&nbsp;</h5> 
											<TextLink><a href="call:5087334510">+15087334510</a></TextLink>
											<h5 className="mb0 inherit--brand-red">&nbsp;&nbsp;•&nbsp;&nbsp;</h5>
											Brooklyn, NY
										</div>
										<hr/>
									 </blockquote>
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item--col-12">
									<blockquote className="mb0">August 2019 – March 2022. New York, NY.</blockquote>
									<h4 className="mb0">Google Design <span className="inherit--brand-red"><span className="outline">•</span></span> UX Engineer</h4>
									<blockquote>HTML, CSS, Javascript, Python, Django, Wagtail</blockquote>
									<blockquote className="mb0"><ul className="ls">
										<li>Lead developer on <TextLink><a href="//design.google">design.google</a></TextLink>, Google's design editorial platform.</li>
										<li>Rapidly prototyped and deployed new front-end features for our article page.</li>
										<li>Improved usability of our CMS for content editors.</li>
										<li>Created front-end features that supported the launch of many campaigns and articles.</li>
									</ul></blockquote>
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item--col-12">
									<blockquote className="mb0">July 2018 – August 2019. New York, NY.</blockquote>
									<h4 className="mb0">J&J Design Studio <span className="inherit--brand-red"><span className="outline">•</span></span> Sr. Interaction Designer</h4>
									<blockquote>Sketch, Invision, Webflow, HTML, CSS, React, Javascript</blockquote>
									<blockquote className="mb0">
										<ul className="ls">
											<li>Created a flexible design system allowing for J&J to consolidate 250 medical device websites.</li>
											<li>Built a front-end code prototype of the design system and act as a digital styleguide and single source of truth for our developers.</li>
										</ul>
									</blockquote>
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item--col-12">
									<blockquote className="mb0">May 2017 – June 2018. New York, NY.</blockquote>
									<h4 className="mb0">NBCUX Lab <span className="inherit--brand-red"><span className="outline">•</span></span> UI/UX Designer & Developer</h4>
									<blockquote>Adobe CC, HTML, CSS, Javascript, React</blockquote>
									<blockquote className="mb0"><ul className="ls">
										<li>Designed and developed the site for Universal Pictures’ film,
										American Made. Maintained sites for 2 other films: Jurassic World & The Lorax.</li>
										<li>Small agile team that acted as a UX Design and Development
										agency within NBCUniversal.</li>
										<li>Contributed front-end code to a web video player shared
										among NBCU’s entertainment brands.</li>
										<li>Delivered live code prototypes for mobile and web products.</li>
									</ul></blockquote>
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item--col-12">
									<blockquote className="mb0">September 2015 – November 2016.  San Francisco, CA.</blockquote>
									<h4 className="mb0">Wrap Media <span className="inherit--brand-red"><span className="outline">•</span></span> UI/UX Designer & Developer</h4>
									<blockquote>Sketch, Principle, Adobe CC, HTML, CSS, Javascript</blockquote>
									<blockquote className="mb0"><ul className="ls">
										<li>Created mobile web experiences for external clients with a focus on interaction design.</li>
										<li>Designed and prototyped features that were integrated into their app creation and distribution web SAAS product.</li>
										<li>Contributed front-end code to a codebase, implemented interactions in the product.</li>
										<li>Designed and developed multiple iterations of the company website and product messaging.</li>
									</ul></blockquote>
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item--col-12">
									<blockquote className="mb0">May 2015 – August 2015.  Alameda, CA.</blockquote>
									<h4 className="mb0">Perforce <span className="inherit--brand-red"><span className="outline">•</span></span> UX Designer & Researcher</h4>
									<blockquote>Sketch, Adobe CC, Invision App, Proto.io</blockquote>
									<blockquote className="mb0"><ul className="ls">
										<li>Applied Lean UX principles across the the organization’s product suite from a centralized design team</li>
										<li>Practiced 1-week design sprints with regular design critique sessions with the design team and stakeholders</li>
										<li>Developed and applied new brand guidlines in across products. Applied the style guide in a new product</li>
										<li>Rapidly created multiple prototype iterations and conducted generative research sessions to gain insights on an early stage, SAAS, web product</li>
									</ul></blockquote>
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item--col-12">
									<blockquote className="mb0">May 2014 – May 2015. San Jose, CA.</blockquote>
									<h4 className="mb0">Cisco <span className="inherit--brand-red"><span className="outline">•</span></span> User Interface Engineer</h4>
									<blockquote>HTML, CSS, Javascript, Backbone.js, Node.js, D3.js</blockquote>
									<blockquote className="mb0"><ul className="ls">
									  <li>Engineer on a small team focused on creating a Backbone.js web application that allowed our users to visualize traffic on their Wide Area Network</li>
									  <li>Created a network traffic visualization web interface while working closely with designers.</li>
									  <li>Developed data visualizations utilizing the library, D3.js</li>
									  <li>Contributed to the product’s developer site and API documentation.</li>
									</ul></blockquote>
								</div>
							</div>
							<div className="grid__row"><hr/></div>
							<div className="grid__row">
								<div className="grid__item--col-12">
									<blockquote className="mb0">March 2015 – May 2015. San Francisco, CA.</blockquote>
									<h4 className="mb0">General Assembly <span className="inherit--brand-red"><span className="outline">•</span></span> UX Immersive Program</h4>
									<blockquote className="mb0">UX Design Immersive Program</blockquote>
								</div>
							</div>
							<div className="grid__row">
								<div className="grid__item--col-12">
									<blockquote className="mb0">September 2010 — May 2014. Amherst, MA.</blockquote>
									<h4 className="mb0">Computer Science <span className="inherit--brand-red"><span className="outline">•</span></span> Bachelor of Science</h4>
									<blockquote className="mb0">University of Massachusetts Amherst</blockquote>
								</div>
							</div>
							<div className="grid__row"><hr/></div>
							<h4 className="">Skills</h4>
							<blockquote>
							  HTML5, CSS3,
							  LESS, SASS, Bootstrap,
							  Sketch, Zeplin, Craft,
							  Adobe CC, Photoshop, Illustrator, XD,
							  Webflow, Proto.io, Invision, Principle,
							  Interactive Prototyping,
							  User Testing, User Interviews,
							  JavaScript, Typescript, jQuery,
							  React, Angular, Backbone,
							  Git, Github, Heroku,
							  Node, NPM
							</blockquote>
						</div>
					</div>
				</ScrollSection>
			</article>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	reset: () => dispatch(reset()),
	setCounter: (n) => dispatch(setCounter(n)),
	home: () => dispatch(home()),
	process: () => dispatch(process()),
	resume: () => dispatch(resume()),
	americanMade: () => dispatch(americanMade()),
	vai: () => dispatch(vai()),
	translator: () => dispatch(translator()),
	jjMdc: () => dispatch(jjMdc()),
	jjHome: () => dispatch(jjHome()),
	wrap1: () => dispatch(wrap1()),
	wrap2: () => dispatch(wrap2()),
	perforce: () => dispatch(perforce()),
	cisco: () => dispatch(cisco()),
	protohack: () => dispatch(protohack()),
	setPanel: (str) => dispatch(setPanel(str)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Resume)
