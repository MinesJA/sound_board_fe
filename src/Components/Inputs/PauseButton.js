import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'

class PauseButton extends Component {


  render(){
    return(
      <Grid textAlign='center' columns={1}>
        <Grid.Column>
          <Button.Group>
            <Button icon='pause' onClick={this.handlePauseClick} />
          </Button.Group>
        </Grid.Column>
      </Grid>
    )
  }
}

export default PauseButton
