import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'


class OscTypeButton extends Component {

  handleClick = (e) => {
    e.preventDefault()
    console.log(e.target.name, " clicked")

    this.props.handleSound(e.target.name)
  }



  render(){
    return(
      <Grid textAlign='center' columns={1}>
        <Grid.Column>
            <Button.Group>
              <Button onClick={this.handleClick} name="triangle">Triangle</Button>
              <Button.Or />
              <Button onClick={this.handleClick} name="sine">Sine</Button>
              <Button.Or />
              <Button onClick={this.handleClick} name="sawtooth">Flattooth</Button>
            </Button.Group>
        </Grid.Column>
      </Grid>
    )
  }
}

export default OscTypeButton
