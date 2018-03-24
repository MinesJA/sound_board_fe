import React from 'react'
import { Tab } from 'semantic-ui-react'
import ControlPanelContainer from './ControlPanelContainer'

const panes = [
  { menuItem: 'Board', render: () => <ControlPanelContainer /> },
  { menuItem: '+', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const BoardPanesContainer = () => (
  <Tab panes={panes} />
)

export default BoardPanesContainer
