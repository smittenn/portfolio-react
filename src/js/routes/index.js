import React from 'react'
import { Route, Switch } from 'react-router'

import NavTakeover from '../components/NavTakeover'
import Cursor from '../components/Cursor'

import Homepage from './Homepage'
import Process from './Process'
import Work from './Work'
import Resume from './Resume'
import AboutMe from './AboutMe'

import AmericanMade from './projects/AmericanMade'
import RationalizedPlayer from './projects/RationalizedPlayer'
import Translator from './projects/Translator'
import JnjHome from './projects/JnjHome'
import JnjMdc from './projects/JnjMdc'
import MicroAppInteractions from './projects/MicroAppInteractions'
import MicroAppTemplates from './projects/MicroAppTemplates'
import HelixSync from './projects/HelixSync'
import HelixCloud from './projects/HelixCloud'
import GoogleDesign from './projects/GoogleDesign'

import navData from "../data/nav"

const routes = (
	<main>
		<Switch>
			<Route exact path={navData.items[0].to} component={Homepage}/>

			<Route exact path={navData.items[1].to} component={Work}/>
			<Route exact path="/american-made" component={AmericanMade}/>
			<Route exact path="/rationalized-player" component={RationalizedPlayer}/>
			<Route path="/translator" component={Translator}/>
			<Route path="/jnj-home" component={JnjHome}/>
			<Route path="/jnj-mdc" component={JnjMdc}/>
			<Route path="/micro-app-interactions" component={MicroAppInteractions}/>
			<Route path="/micro-app-templates" component={MicroAppTemplates}/>
			<Route path="/helix-sync" component={HelixSync}/>
			<Route path="/helix-cloud" component={HelixCloud}/>
			<Route path="/google-design" component={GoogleDesign}/>

			<Route exact path={navData.items[2].to} component={Process}/>
			<Route path={navData.items[3].to} component={AboutMe}/>
			<Route path={navData.items[4].to} component={Resume}/>

			{/*
			<Route path="/cisco" component={Cisco}/>
			<Route path="/protohack" component={Protohack}/>*/}
		</Switch>
		<NavTakeover/>
		<Cursor/>
	</main>
)


export default routes
