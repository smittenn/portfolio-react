import React, { Component, PropTypes } from 'react';
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';
import Nav from './Nav';


export default class AppRoute extends Component {

	static propTypes = {
	}

	constructor(props) {
		super(props);
	}

	 render() {
        const history = createHistory({ basename: process.env.PUBLIC_URL });
        // const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

        return (
            <Router history={history}>
                <Route path="/" component={Nav}/>
            </Router>
        );
    }
}