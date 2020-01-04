import React from 'react'
import { Route, Switch } from 'react-router'

import NavTakeover from '../components/NavTakeover'
import Cursor from '../components/Cursor'

import Home from './Home'
import Process from './Process'
import Resume from './Resume'
import AboutMe from './AboutMe'

import AmericanMade from './projects/AmericanMade'
import Vai from './projects/Vai'
import Translator from './projects/Translator'
import JnjHome from './projects/JnjHome'
import JnjMdc from './projects/JnjMdc'
import MicroAppInteractions from './projects/MicroAppInteractions'
import MicroAppTemplates from './projects/MicroAppTemplates'
import Perforce from './projects/Perforce'

const routes = (
	<main>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/process" component={Process}/>
			<Route path="/about-me" component={AboutMe}/>
			<Route path="/resume" component={Resume}/>

			<Route exact path="/american-made" component={AmericanMade}/>
			<Route exact path="/vai" component={Vai}/>
			<Route path="/translator" component={Translator}/>
			<Route path="/jnj-home" component={JnjHome}/>
			<Route path="/jnj-mdc" component={JnjMdc}/>
			<Route path="/micro-app-interactions" component={MicroAppInteractions}/>
			<Route path="/micro-app-templates" component={MicroAppTemplates}/>
			<Route path="/perforce" component={Perforce}/>
			{/*
			<Route path="/cisco" component={Cisco}/>
			<Route path="/protohack" component={Protohack}/>*/}
		</Switch>
		<NavTakeover/>
		<Cursor/>
	</main>
)

export default routes
