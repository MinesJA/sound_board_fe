import React, { Component } from 'react'
import { Tab, Button, Input, Form } from 'semantic-ui-react'
import ControlPanelContainer from './ControlPanelContainer'
const uuidv1 = require('uuid/v1'); // use like => uuidv1();


class BoardPanesContainer extends Component {
  state = {
    context: new (window.AudioContext || window.webkitAudioContext)(),
    counter: 4,
    controlObjs: [
      {
        name: 1,
        type: 'sine',
        frequency: 25,
        gain: 25,
        distortion: 0,
        sound: "",
        paused: true
      },
      {
        name: 2,
        type: 'sine',
        frequency: 15,
        gain: 32,
        distortion: 28,
        sound: "",
        paused: true
      },
      {
        name: 3,
        type: 'sawtooth',
        frequency: 50,
        gain: 47,
        distortion: 15,
        sound: "",
        paused: true
      },
    ]
  }


  buildControlPanels = () => {
    console.log("BoardPanes - buildingControlPanels: ")
    return this.state.controlObjs.map(
      (obj)=>{
        return { menuItem: `${obj.name}`, render: () =>
                  <Tab.Pane>
                    <ControlPanelContainer
                      key={uuidv1()}
                      values={obj}
                      context={this.state.context}
                      updateControlObjs = {this.updateControlObjs}



                      newFrequency={this.props.newFrequency}
                      handleSliderSpeed={this.props.handleSliderSpeed}
                      sendSoundShape={this.props.handleSoundShape}
                      chooseType={this.props.chooseType}
                      />
                  </Tab.Pane>
        }
      }
    )
  }

  updateControlObjs = (contObj) => {
    let controlArray = [...this.state.controlObjs]
    console.log("Old Array: ", controlArray)
    console.log("New Obj: ", contObj)

    

    var objMatch = controlArray.find(
      (obj)=>{return obj.name === contObj.name}
    )

    this.setState({
      objMatch
    })


  }




  addPanel = (e) => {
    e.preventDefault()

    let counter = this.state.counter + 1

    let obj =  {name: counter,
                type: "",
                frequency: 50,
                gain: 50,
                distortion: 0}

    let panelsArray = [...this.state.controlObjs]
    panelsArray.push(obj)

    this.setState({
      controlObjs: panelsArray,
      counter: counter
    }, ()=>{console.log("Current ControlPanels Array: ", this.state.panelsArray)})
  }


  render(){
    return(
      <div>
        <Tab panes={this.buildControlPanels()}  />
        <Button onClick={this.addPanel} size={"small"} renderActiveOnly={false}>Add New Control Panel</Button>
      </div>
    )
  }


}

export default BoardPanesContainer
