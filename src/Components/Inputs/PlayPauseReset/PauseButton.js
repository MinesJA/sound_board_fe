import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'

const PauseButton = (props) => {

  const pauseSound = (e) => {
    e.preventDefault()
    props.pauseSound()
  }

  return(<Grid textAlign='center' columns={1}>
          <Grid.Column>
            <Button.Group>
              <Button icon='pause' onClick={pauseSound} />
            </Button.Group>
          </Grid.Column>
        </Grid>
  )
}

export default PauseButton
