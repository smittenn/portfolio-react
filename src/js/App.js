import React, {Component} from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import { browserHistory } from 'react-router';

import { detectMobile } from "./actions/mobile"
import { detectWindowHeight } from "./actions/windowHeight"


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
		window.addEventListener('resize', () => { this.props.detectMobile(); });
		// document.addEventListener('scroll', this.props.detectWindowHeight);

		this.props.history.listen((location, action) => {
			this.props.detectWindowHeight();
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', () => { this.props.detectMobile(); });
		// document.removeEventListener('scroll', this.props.detectWindowHeight);
		this.props.history.unlisten();
	}

	render() {
		const { history } = this.props;

		return (
			<ConnectedRouter history={history}>
	 			{ routes }
			</ConnectedRouter>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
