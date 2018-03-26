import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ShapeContainer from './ShapeContainer'
import BoardPanesContainer from './BoardPanesContainer'

// let context = new AudioContext()
// let sound = context.createOscillator()

class InterfaceContainer extends Component {
  state = {

    type: "",
    pause: false,
    shapeSpeed: 100,
    context: new AudioContext(),
  }


handleSoundShape = (type) =>{
  this.setState({
    type: type,
  })
}

handleSliderSpeed = (frequency) =>{
  this.setState({
    shapeSpeed:frequency
  })
}

handleShapeClick = (e) => {
  let newFrequency = this.state.shapeSpeed + 10
  this.setState({
    shapeSpeed: newFrequency
  })
}

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={5} >

            <BoardPanesContainer clickedFrequency={this.state.shapeSpeed} handleSoundShape={this.handleSoundShape} handleSliderSpeed={this.handleSliderSpeed} context = {this.state.context}/>

          </Grid.Column>
          <Grid.Column width={10}>

            {this.state.type ? <ShapeContainer shapeSpeed={this.state.shapeSpeed} type={this.state.type} handleShapeClick={this.handleShapeClick} /> : null}

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}




export default InterfaceContainer
