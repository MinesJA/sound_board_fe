import React, { Component } from 'react'
import { Tab, Button, Input, Form } from 'semantic-ui-react'
import ControlPanelContainer from './ControlPanelContainer'
const uuidv1 = require('uuid/v1'); // use like => uuidv1();


class BoardPanesContainer extends Component {

  // buildControlPanels = () => {
  //   return this.props.controlObjs.map(
  //     (obj)=>{
  //       return { menuItem: `${obj.name}`, render: () =>
  //                 <Tab.Pane>
  //                   <ControlPanelContainer
  //                     key={uuidv1()}
  //                     values={obj}
  //                     context={this.props.context}
  //                     updateControlObjs = {this.props.updateControlObjs}
  //
  //
  //
  //                     newFrequency={this.props.newFrequency}
  //                     handleSliderSpeed={this.props.handleSliderSpeed}
  //                     sendSoundShape={this.props.handleSoundShape}
  //                     chooseType={this.props.chooseType}
  //                     />
  //                 </Tab.Pane>
  //       }
  //     }
  //   )
  // }

  let panes = [
    { menuItem: `1`, render: () =>
              <Tab.Pane>
                <ControlPanelContainer
                  key={uuidv1()}
                  values={obj}
                  context={this.props.context}
                  newFrequency={this.props.newFrequency}
                  handleSliderSpeed={this.props.handleSliderSpeed}
                  sendSoundShape={this.props.handleSoundShape}
                  chooseType={this.props.chooseType}
                  />
              </Tab.Pane>
    },
    { menuItem: `2`, render: () =>
              <Tab.Pane>
                <ControlPanelContainer
                  key={uuidv1()}
                  values={obj}
                  context={this.props.context}
                  newFrequency={this.props.newFrequency}
                  handleSliderSpeed={this.props.handleSliderSpeed}
                  sendSoundShape={this.props.handleSoundShape}
                  chooseType={this.props.chooseType}
                  />
              </Tab.Pane>
    },
    { menuItem: `3`, render: () =>
              <Tab.Pane>
                <ControlPanelContainer
                  key={uuidv1()}
                  context={this.props.context}
                  newFrequency={this.props.newFrequency}
                  handleSliderSpeed={this.props.handleSliderSpeed}
                  sendSoundShape={this.props.handleSoundShape}
                  chooseType={this.props.chooseType}
                  />
              </Tab.Pane>
    }

  ]



  addPanel = (e) => {
    this.props.addPanel()
  }

  render(){
    return(
      <div>
        <Tab panes={panes}  />
        <Button onClick={this.addPanel} size={"small"} >Add New Control Panel</Button>
      </div>
    )
  }


}

export default BoardPanesContainer
