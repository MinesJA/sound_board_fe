import React, { Component } from 'react'
import { Tab, Button, Input, Form } from 'semantic-ui-react'
import ControlPanelContainer from './ControlPanelContainer'
const uuidv1 = require('uuid/v1'); // use like => uuidv1();


class BoardPanesContainer extends Component {



  panes = () => [
    { menuItem: `1`, render: () =>
              <Tab.Pane>
                <ControlPanelContainer
                  key={uuidv1()}

                  context={this.props.context}
                  type={this.props.type}
                  handleSliderSpeedX={this.props.handleSliderSpeedX}
                  handleSliderSpeedY={this.props.handleSliderSpeedY}
                  handleSliderSpeedW={this.props.handleSliderSpeedW}
                  getSound={this.props.getSound}
                  sound={this.props.sound}

                  chooseType={this.props.chooseType}

                  />
              </Tab.Pane>
    },
    { menuItem: `2`, render: () =>
              <Tab.Pane>
                <ControlPanelContainer
                  key={uuidv1()}

                  context={this.props.context}
                  type={this.props.type}
                  handleSliderSpeedX={this.props.handleSliderSpeedX}
                  handleSliderSpeedY={this.props.handleSliderSpeedY}
                  handleSliderSpeedW={this.props.handleSliderSpeedW}
                  getSound={this.props.getSound}
                  sound={this.props.sound}

                  chooseType={this.props.chooseType}

                  />
              </Tab.Pane>
    },
    { menuItem: `3`, render: () =>
              <Tab.Pane>
                <ControlPanelContainer
                  key={uuidv1()}

                  context={this.props.context}
                  type={this.props.type}
                  handleSliderSpeedX={this.props.handleSliderSpeedX}
                  handleSliderSpeedY={this.props.handleSliderSpeedY}
                  handleSliderSpeedW={this.props.handleSliderSpeedW}
                  getSound={this.props.getSound}
                  sound={this.props.sound}

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
        <Tab panes={this.panes()}  />
        <Button onClick={this.addPanel} size={"small"} >Add New Control Panel</Button>
      </div>
    )
  }


}

export default BoardPanesContainer
