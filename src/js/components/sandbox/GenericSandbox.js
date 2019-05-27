import React, {Component} from "react"

import {Sandbox, withDependencies} from 'react-sandbox-editor'

const ReactSandbox = withDependencies([
	'https://unpkg.com/react@16.6.0/umd/react.development.js',
	'https://unpkg.com/react-dom@16.6.0/umd/react-dom.development.js'
])(Sandbox)

export default class GenericSandbox extends Component {

	constructor(props) {
		super(props);


		this.state = {
			selectedTab: "resultTab",
		}
	}


	handleClickTab = (e, tabName) => {
		this.setState({
			selectedTab: tabName,
		});
	}

	render() {

		return (
			<ReactSandbox
			classes={{
				header: 'sandbox__header',
				tab: 'sandbox__tab',
				selectedTab: 'sandbox__tab--selected',
				selectedTabIndicator: 'sandbox__indicator',
			}}
			style={{
				minHeight: '600px',
			}}
			displayMode="tab"
			selectedTab={this.state.selectedTab}
			onTabClick={this.handleClickTab}
			executeOnCodeChange
			hideDisplayModeButton
			executeOnCodeChangeDebounce={1000}
			horizontalSplitOffset={50}
			permissions={[
				'allow-forms',
				'allow-pointer-lock',
				'allow-popups',
				'allow-modals',
				'allow-same-origin',
				'allow-scripts',
				'allow-top-navigation'
			]}
			scriptEditor={{
				defaultValue: this.props.scriptValue,
				mode: 'jsx'
			}}
			templateEditor={{
				defaultValue: this.props.templateValue,
				mode: 'html',
				readOnly: false,
				wrapLines: false
			}}
			stylesheetEditor={{
				defaultValue: this.props.stylesheetValue,
				mode: 'css',
				readOnly: false,
				wrapLines: false
			}}
			dependencies={this.props.dependencies}
			theme="monokai"
			/>
			
		);
	}
}