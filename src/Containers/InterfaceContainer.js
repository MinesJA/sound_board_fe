import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ShapeContainer from './ShapeContainer'
import BoardPanesContainer from './BoardPanesContainer'

// let context = new AudioContext()
// let sound = context.createOscillator()

class InterfaceContainer extends Component {
  state = {
    pause: false,
    shapeSpeed: null,

  }



  render(){
    return(
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={5} >

            <BoardPanesContainer handleSound = {this.handleSound} context = {this.state.context}/>

          </Grid.Column>
          <Grid.Column width={10}>

            {this.state.type ? <ShapeContainer shapeSpeed={this.state.shapeSpeed} type={this.state.type} /> : null}

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}




export default InterfaceContainer
