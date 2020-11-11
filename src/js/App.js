import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import { browserHistory } from 'react-router';

import { detectMobile } from "./actions/mobile"
import { detectWindowHeight, setWindowHeight } from "./actions/windowHeight"

import PageTransition from "./components/PageTransition"


// const App = ({ history }) => {
// 	return (
// 		<ConnectedRouter history={history}>
// 			{ routes }
// 		</ConnectedRouter>
// 	)
// }

// App.propTypes = {
// 	history: PropTypes.object,
// }

// export default App


class App extends Component {

	componentDidMount() {
		window.addEventListener('resize', () => { this.props.detectMobile(); this.props.detectWindowHeight(); });
		// document.addEventListener('scroll', this.props.detectWindowHeight);

		this.props.history.listen((location, action) => {
			this.props.setWindowHeight(window.innerHeight);
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', () => { this.props.detectMobile(); });
		// this.props.history.unlisten();
	}

	render() {
		const { history } = this.props;

		return (
			<Fragment>
				<ConnectedRouter history={history}>
					{ routes }
				</ConnectedRouter>
				<PageTransition history={history}/>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
	windowHeight: state.windowHeight,
})

const mapDispatchToProps = dispatch => ({
	detectMobile: () => dispatch(detectMobile()),
	detectWindowHeight: () => dispatch(detectWindowHeight()),
	setWindowHeight: () => dispatch(setWindowHeight()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
