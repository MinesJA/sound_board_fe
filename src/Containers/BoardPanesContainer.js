import React from 'react'
import { Tab } from 'semantic-ui-react'
import ControlPanelContainer from './ControlPanelContainer'




const BoardPanesContainer = (props) => {

  let panes = [
    { menuItem: 'Board', render: () => <ControlPanelContainer newFrequency={props.newFrequency} handleSliderSpeed={props.handleSliderSpeed} sendSoundShape={props.handleSoundShape} chooseType={props.chooseType} context = {props.context}/> },
    { menuItem: '+', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]

  return(
    <Tab panes={panes} />
  )

}

export default BoardPanesContainer
