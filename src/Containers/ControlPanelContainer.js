import React, { Component } from 'react'
import { Button, Card, Image, Grid } from 'semantic-ui-react'
import SetSoundsButton from '../Components/Inputs/SetSoundsButton'
// import PlayButton from '../Components/Inputs/PlayButton'
import OscTypeButton from '../Components/Inputs/OscTypeButton'
import FreqDetuneSliders from '../Components/Inputs/FreqDetuneSliders'
import GainSlider from '../Components/Inputs/GainSlider'
import LowMidHighKnobs from '../Components/Inputs/LowMidHighKnobs'
import OscChoice from '../Components/OscChoice'

// Having a hard time with the play / pause buttons.
// Will play but won't pause. May have something to with the dot notation
//  used in SetSoundsButton


class ControlPanelContainer extends Component {
  state = {
    sound: "",
    gainNode: "",
    type: "",
    frequency: 100,
    gain: 100,
    paused: true,

  }

  chooseType = (type) => {
    this.setState({
      type,
      paused: false
    }, ()=>{this.playSound()})
  }

  playSound = (event) => {
    let context = this.props.context
    this.setState({
      pause: false,
      sound: this.props.context.createOscillator(),
      gain:
    }, ()=>{

      let sound = this.state.sound


      sound.type = this.state.type
      sound.frequency.value = this.state.frequency;

      sound.start()

      let gainNode = context.createGain();
      gainNode.gain.value = this.state.gain;
      sound.connect(gainNode)
      gainNode.connect(context.destination)

      // context -> gainNode -> sound

      console.log("Play-Pause state:",this.state.paused, "Type state:",this.state.type)
    })
  }

  pauseSound = (event) => {
    let sound = this.state.sound
    sound.stop()
    sound.disconnect()

    this.setState({
      sound: "",
      paused: true
    }, ()=>{console.log("Pause-Pause state:",this.state.paused, "Type state:",this.state.type)})
  }


  handleFreqSlider = (e) => {
    if(this.state.sound){
      let sound = this.state.sound
      let num = e*10
      console.log(num)

      sound.frequency.value = num
      this.setState({
        frequency: num,
        shapeY: num
      }, ()=>{console.log(this.state.frequency)})
    }
  }

  handleGainSlider = (e) => {
    if(this.state.sound){
      let sound = this.state.sound

      console.log(e)

      sound.gain.value = e
      this.setState({
        gain: e,
        shapeX: e
      }, ()=>{console.log(this.state.gain)})
    }
  }



  buildPlayPause = () => {

    if(this.state.type){
      if(this.state.paused){
        return <SetSoundsButton.PlayButton playSound={this.playSound} />
      } else {
        return <SetSoundsButton.PauseButton pauseSound={this.pauseSound} />
      }
    } else {
      return null
    }
  }

  render(){
    return(
    <Grid columns={1} >
      <Grid.Row>
        <Grid.Column>

          {this.buildPlayPause()}

        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>

          {this.state.type ?
            <OscChoice type={this.state.type} />
            :
            <OscTypeButton chooseType={this.chooseType}/>
          }

        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <FreqDetuneSliders changeFrequency={this.handleFreqSlider} changeGain={this.handleGainSlider}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column>
          <GainSlider handleSound={this.props.handleSound} handlePause={this.props.handlePause}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <LowMidHighKnobs />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}

export default ControlPanelContainer
