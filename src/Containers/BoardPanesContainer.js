import React, { Component } from 'react'
import { Tab, Button, Input, Form } from 'semantic-ui-react'
import ControlPanelContainer from './ControlPanelContainer'
const uuidv1 = require('uuid/v1'); // use like => uuidv1();


class BoardPanesContainer extends Component {
  state = {
    conext: new (window.AudioContext || window.webkitAudioContext)(),
    tempName: "",
    controlObjs: [
      {
        name: "First Sound",
        type: 'sine',
        frequency: 25,
        gain: 25,
        distortion: 0,
      },
      {
        name: "Second Sound",
        type: 'sine',
        frequency: 15,
        gain: 32,
        distortion: 28,
      },
      {
        name: "Third Sound",
        type: 'sawtooth',
        frequency: 50,
        gain: 47,
        distortion: 15,
      }
    ]
  }


  buildControlPanels = () => {
    console.log("BoardPanes - buildingControlPanels: ")
    return this.state.controlObjs.map(
      (obj)=>{
        return { menuItem: `${obj.name}`, render: () =>
        <Tab.Pane>
          <ControlPanelContainer key={uuidv1()} values={obj} context={this.state.context}/>
        </Tab.Pane>
        }
      }
    )
  }

  handleChange = (value) => {
    this.setState({
      tempName: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let obj =  {
                name: this.state.tempName,
                type: "",
                frequency: 50,
                gain: 50,
                distortion: 0,
               }

    let panelsArray = [...this.state.controlObjs, obj]

    this.setState({
      controlObjs: panelsArray
    })
  }


  render(){
    return(
      <div>
        <Tab panes={this.buildControlPanels()}  />
        <Form>
          <Form.Group>
            <Input onChange={this.handleChange} placeholder='New Control Panel Name' />
            <Button onClick={this.handleSubmit} size={"small"}>Add New Control Panel</Button>
          </Form.Group>
        </Form>

      </div>
    )
  }


}

export default BoardPanesContainer
