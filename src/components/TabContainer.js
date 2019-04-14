import * as React from 'react'
import { Button } from 'reactstrap'
import Tabs from './Tabs'

const Tab = props => {
	const { title, visible, children } = props

	const styles = {
		display: visible ? 'block' : 'none',
	}

	//console.log(styles)

	return (
		<div className="tab" style={styles}>
			<h2>{title}</h2>
			{children}
		</div>
	)
}

const TabContainer = () => {
	return (
		<Tabs
			render={({ currentTab, switchTab }) => {
				console.log(`current tab: ${currentTab}`)
				return (
					<div>
						<div className="tab__headers">
              <Button color="primary" onClick={() => switchTab(0)}>Tab 1</Button>
              <Button color="primary" onClick={() => switchTab(1)}>Tab 2</Button>
              <Button color="primary" onClick={() => switchTab(2)}>Tab 3</Button>
						</div>
						<Tab visible={currentTab === 0} title="One">
							<p>This is tab one!</p>
						</Tab>
						<Tab visible={currentTab === 1} title="Two">
							<p>This is tab two!</p>
						</Tab>
						<Tab visible={currentTab === 2} title="Three">
							<p>This is tab three!</p>
						</Tab>
					</div>
				)
			}}
		/>
	)
}

export default TabContainer
