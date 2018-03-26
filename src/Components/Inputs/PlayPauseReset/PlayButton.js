import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'

const PlayButton = (props) => {


const playSound = (e) => {
  e.preventDefault()

  props.playSound()
}

  return(
    <Grid textAlign='center' columns={1}>
      <Grid.Column>
        <Button.Group>
          <Button icon='play' onClick={playSound}/>
        </Button.Group>
      </Grid.Column>
    </Grid>
  )
}

export default PlayButton
