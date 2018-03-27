import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ShapeContainer from './ShapeContainer'
import BoardPanesContainer from './BoardPanesContainer'

// let context = new AudioContext()
// let sound = context.createOscillator()

// let fetchVals = [
//   {
//     name: 1,
//     type: 'sine',
//     frequency: 25,
//     gain: 25,
//     distortion: 0,
//     sound: "",
//     paused: true
//   },
//   {
//     name: 2,
//     type: 'sine',
//     frequency: 15,
//     gain: 32,
//     distortion: 28,
//     sound: "",
//     paused: true
//   },
//   {
//     name: 3,
//     type: 'sawtooth',
//     frequency: 50,
//     gain: 47,
//     distortion: 15,
//     sound: "",
//     paused: true
//   },
// ]

class InterfaceContainer extends Component {
    state = {
      context: new (window.AudioContext || window.webkitAudioContext)(),
      counter: 4,
      type: "",
      speedX: 50,
      speedY: 50,
      speedW: 50,
      sound: ""
    }


    handleSoundShape = (type) =>{
      this.setState({
        type,
      })
    }

    handleSliderSpeedX = (value) =>{
      this.setState({
        speedX:value
      })
    }
    handleSliderSpeedY = (value) =>{
      this.setState({
        speedY:value
      })
    }
    handleSliderSpeedW = (value) =>{
      this.setState({
        speedW:value
      })
    }

    getSound = (sound) => {
      this.setState({
        sound: sound
      })
    }



  // addPanel = (e) => {
  //   let counter = this.state.counter + 1
  //
  //   let obj =  {name: counter,
  //               type: "",
  //               frequency: 50,
  //               gain: 50,
  //               distortion: 0}
  //
  //   let panelsArray = [...this.state.controlObjs]
  //   panelsArray.push(obj)
  //
  //   this.setState({
  //     controlObjs: panelsArray,
  //     counter: counter
  //   }, ()=>{console.log("Current ControlPanels Array: ", this.state.panelsArray)})
  // }
  //
  // updateControlObjs = (contObj) => {
  //
  //   let oldContObjs = [...this.state.controlObjs]
  //   console.log("Old Array: ", oldContObjs)
  //   console.log("New Obj: ", contObj)
  //
  //   let contMatch = oldContObjs.find(
  //     (obj)=>{return obj.name === contObj.name}
  //     )
  //
  //   let index = oldContObjs.indexOf(contMatch)
  //
  //   oldContObjs[index] = contObj
  //
  //   this.setState({
  //     controlObjs: oldContObjs
  //   },()=>{console.log("This is the new Interface state: ", this.state.controlObjs)})
  // }



  render(){
    return(
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={5} >
            <BoardPanesContainer
              handleSoundShape = {this.handleSoundShape}
              handleSliderSpeedX = {this.handleSliderSpeedX}
              handleSliderSpeedY = {this.handleSliderSpeedY}
              handleSliderSpeedW = {this.handleSliderSpeedW}
              chooseType={this.handleSoundShape}
              getSound={this.getSound}
              context = {this.state.context}

              type={this.state.type}
              sound={this.state.sound}
            />

          </Grid.Column>
          <Grid.Column width={10}>

            {this.state.type ?

              <ShapeContainer
                shapeSpeedX={this.state.speedX}
                shapeSpeedY={this.state.speedY}
                shapeSpeedW={this.state.speedW}

                type={this.state.type}
              />

              : null}

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}




export default InterfaceContainer
