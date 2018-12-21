import React from 'react'
import { Route, Switch } from 'react-router'
import Nav from '../components/Nav'
import Home from '../components/Home'
import AmericanMade from '../components/AmericanMade'
import Vai from '../components/Vai'
import AboutMe from '../components/AboutMe'

const routes = (
	<div>
		<Nav/>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/american-made" component={AmericanMade}/>
			<Route path="/vai" component={Vai}/>
			<Route path="/about" component={AboutMe}/>
		</Switch>
	</div>
)

export default routes
