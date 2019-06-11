import React, {Component} from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'

import { detectMobile } from "./actions/mobile"


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
		window.addEventListener('resize', this.props.detectMobile);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.props.detectMobile);
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
})

const mapDispatchToProps = dispatch => ({
	detectMobile: () => dispatch(detectMobile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
