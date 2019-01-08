import React from 'react'
import { Route, Switch } from 'react-router'

import Nav from '../components/Nav'

import Home from './Home'
import AmericanMade from './AmericanMade'
import Vai from './Vai'
import AboutMe from './AboutMe'

const routes = (
	<div>
		<Nav/>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/process" component={Home}/>
			<Route path="/about-me" component={AboutMe}/>
			<Route path="/resume" component={AboutMe}/>

			<Route path="/american-made" component={AmericanMade}/>
			<Route path="/vai" component={Vai}/>
			{/*<Route path="/translator" component={Translator}/>
			<Route path="/jnj-mdc" component={JnjMdc}/>
			<Route path="/jnj-home" component={JnjHome}/>
			<Route path="/micro-app-interactions" component={MicroAppInteractions}/>
			<Route path="/micro-app-templates" component={MicroAppTemplates}/>
			<Route path="/perforce" component={Perforce}/>
			<Route path="/cisco" component={Cisco}/>
			<Route path="/protohack" component={Protohack}/>*/}
		</Switch>
	</div>
)

export default routes
