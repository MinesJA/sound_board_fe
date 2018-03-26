import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'



const SetSoundsButton = {


  PlayButton: function PlayButton(props){
    return <Grid textAlign='center' columns={1}>
              <Grid.Column>
                <Button.Group>
                  <Button icon='play' onClick={(e)=>{
                      e.preventDefault()
                      props.playSound
                    }} />
                </Button.Group>
              </Grid.Column>
            </Grid>
  },

  ResetButton: function ResetButton(props){
    return <Grid textAlign='center' columns={1}>
              <Grid.Column>
                <Button.Group>
                  <Button icon='repeat' onClick={props.resetSound} />
                </Button.Group>
              </Grid.Column>
            </Grid>
  }
}


export default SetSoundsButton
