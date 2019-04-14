import React from 'react'

class Tabs extends React.Component {
	state = {
		currentTab: 0,
	}

	switchTab = index => {
		this.setState({
			currentTab: index,
		})
	}

	render() {
		const { render } = this.props
		const renderProps = {
			currentTab: this.state.currentTab,
			switchTab: this.switchTab,
		}

		return render(renderProps)
	}
}

export default Tabs
