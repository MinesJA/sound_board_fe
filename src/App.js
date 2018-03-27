import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'

import MyBoardsContainer from './Containers/MyBoardsContainer'
import InterfaceContainer from './Containers/InterfaceContainer'

class App extends Component {


  render() {
    return (
      <div>
        <NavBar />
        <Route path="/users/:id/boards" exact component={MyBoardsContainer} />
        
        <Route path="/boards/:id" exact component={InterfaceContainer} />
      </div>
    );
  }
}

export default App;
